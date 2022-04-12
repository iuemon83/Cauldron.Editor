import Head from "next/head";
import CardSetEditorForm from "../components/CardSetEditorForm";
import CardSetDataViewerForm from "../components/CardSetDataViewerForm";
import { useEffect, useState } from "react";
import { cardEmpty } from "../types/Card";
import { CardSet } from "../types/CardSet";
import { getCardMetaData, getSampleCardSet, globalCache } from "../components/CauldronApi";
import { Button, CssBaseline, AppBar, Toolbar, Typography, Paper, Tabs, Tab, CircularProgress } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InfoIcon from "@mui/icons-material/Info";
import GetAppIcon from "@mui/icons-material/GetApp";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { styled } from "@mui/material/styles";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Home: React.FC<Props> = (props: Props) => {
  const [loading, setLoading] = useState(true);

  const [cardset, setCardset] = useState({
    name: "",
    cards: [],
  } as CardSet);
  const [cardIndex, setCardIndex] = useState(-1);

  const [tabValue, setTabValue] = useState(0);

  async function LoadMetadata() {
    const metadata = await getCardMetaData();
    globalCache.metadata = metadata;

    console.log(globalCache.metadata);
  }

  const newCard = (index: number) => {
    const newCard = cardEmpty();
    newCard.name = `カード${index}`;

    return newCard;
  };

  useEffect(() => {
    if (!loading) {
      return;
    }

    LoadMetadata()
      .then(() => {
        setCardset({
          name: "",
          cards: [newCard(0)],
        });
        setLoading(false);
      })
      .catch((a) => {
        console.log(a);
        alert("api呼び出しでエラーが発生しました。");
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (newValue === 0) {
      setCardIndex(-1);
    }
    setTabValue(newValue);
  };

  const openCardSet = (newCardSet: CardSet) => {
    const message = "編集中のカードセットは削除されます。よろしいですか？";
    if (!confirm(message)) {
      return;
    }

    const sorted = {
      ...newCardSet,
      cards: newCardSet.cards.sort((l, r) => l.name.localeCompare(r.name)),
    };

    // setCardIndex(0);
    setCardset(sorted);
  };

  const DownloadButton = () => {
    const saveJson = (filename: string, jsonSource: {}) => {
      const json = JSON.stringify(jsonSource);

      const element = document.createElement("a");
      element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(json));
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    };

    const filename = "cardset.json";

    const downloadCardSet = (cardset: CardSet) => saveJson(filename, cardset);

    return (
      <Button color="inherit" onClick={() => downloadCardSet(cardset)} startIcon={<GetAppIcon />}>
        保存
      </Button>
    );
  };

  const OpenCardsetButton = () => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const cardsetFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => {
        const json = ev.target?.result;
        if (typeof json !== "string") {
          return;
        }

        console.log(json);

        const cardset = JSON.parse(json);
        openCardSet(cardset);

        // 同じファイルが連続で選択されても動くように
        e.target.value = "";
      };
      reader.readAsText(cardsetFile);
    };

    return (
      <label htmlFor="load-cardset">
        <input style={{ display: "none" }} id="load-cardset" onChange={handleChangeInput} type="file" />

        <Button color="inherit" component="span" startIcon={<OpenInBrowserIcon />}>
          開く
        </Button>
      </label>
    );
  };

  const OpenSampleCardsetButton = (props: { id: number }) => {
    const handleButtonClick = async () => {
      const cardset = await getSampleCardSet(props.id);

      console.log(cardset);

      openCardSet(cardset);
    };

    return (
      <Button color="inherit" onClick={() => handleButtonClick()} startIcon={<OpenInBrowserIcon />}>
        サンプル{props.id}
      </Button>
    );
  };

  const Root = styled(`div`)(({ theme }) => ({
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexGrow: 1,
  }));

  const StyledMain = styled(`main`)(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflow: "scroll",
  }));

  // エラーになるのでとりあえずanyにしてる
  const ToolbarSpacer = styled(`div`)(({ theme }) => ({ ...theme.mixins.toolbar } as any));

  return (
    <Root>
      <Head>
        <title>Cauldron DCG Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
            }}
          >
            Cauldron DCG Editor
          </Typography>
          <DownloadButton></DownloadButton>
          <OpenCardsetButton></OpenCardsetButton>
          <OpenSampleCardsetButton id={1}></OpenSampleCardsetButton>
          <OpenSampleCardsetButton id={2}></OpenSampleCardsetButton>
        </Toolbar>
      </AppBar>
      <Paper>
        <ToolbarSpacer />
        <Tabs orientation="vertical" value={tabValue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab icon={<ListAltIcon />} label="Card Set" />
          <Tab icon={<EqualizerIcon />} label="Data" />
          <Tab icon={<InfoIcon />} label="About" />
        </Tabs>
      </Paper>
      <StyledMain>
        <ToolbarSpacer />
        <TabPanel value={tabValue} index={0}>
          <CardSetEditorForm
            cardset={cardset}
            setCardset={(newCardset) => {
              setCardset((oldCardset) => {
                return {
                  ...oldCardset,
                  ...newCardset,
                };
              });
            }}
            cardIndex={cardIndex}
            setCardIndex={(x) => setCardIndex(x)}
          ></CardSetEditorForm>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <CardSetDataViewerForm cardset={cardset} />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          about
        </TabPanel>
      </StyledMain>
    </Root>
  );
};

export default Home;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
