import CardSetEditorForm from "../components/CardSetEditorForm";
import CardSetDataViewerForm from "../components/CardSetDataViewerForm";
import { useEffect, useState } from "react";
import { cardEmpty } from "../types/Card";
import { CardSet } from "../types/CardSet";
import { getSampleCardSet } from "../components/CauldronApi";
import { Button, Tabs, Tab, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import GetAppIcon from "@mui/icons-material/GetApp";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CardSetEditor: React.VFC = () => {
  console.log("card set editor");

  const router = useRouter();

  const newCard = (index: number) => {
    const newCard = cardEmpty();
    newCard.name = `カード${index}`;

    return newCard;
  };

  const [cardset, setCardset] = useState({
    name: "カードセット",
    cards: [newCard(0)],
  } as CardSet);
  const [cardIndex, setCardIndex] = useState(-1);

  const [tabValaue, setTabValue] = useState(0);

  const parseNumberOrDefault = (v: string, defaultValue: number) => {
    const x = parseInt(v as string);
    return Number.isNaN(x) ? defaultValue : x;
  };

  useEffect(() => {
    const i = parseNumberOrDefault(router.query.tab as string, 0);
    if (i !== tabValaue) {
      setTabValue(i);
    }
  }, [router.query.tab, tabValaue]);

  useEffect(() => {
    const i = parseNumberOrDefault(router.query.index as string, -1);
    if (i !== cardIndex) {
      setCardIndex(i);
    }
  }, [router.query.index, cardIndex]);

  const changeTab = (index: number) => {
    if (index === tabValaue) {
      return;
    }

    router.push(`/cardset?tab=${index}`, undefined, { shallow: true });
  };

  const changeCard = (index: number) => {
    if (index === cardIndex) {
      return;
    }

    if (index >= 0 && index < cardset.cards.length) {
      router.push(`/cardset?index=${index}`, undefined, { shallow: true });
    } else {
      changeTab(0);
    }
  };

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
    changeTab(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabValaue} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab icon={<EditIcon />} label="Editor" iconPosition="start" />
          <Tab icon={<EqualizerIcon />} label="Data" iconPosition="start" />
        </Tabs>
      </Box>
      <StyledMain>
        <TabPanel value={tabValaue} index={0}>
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
            setCardIndex={changeCard}
          ></CardSetEditorForm>
        </TabPanel>
        <TabPanel value={tabValaue} index={1}>
          <CardSetDataViewerForm cardset={cardset} />
        </TabPanel>
      </StyledMain>
    </>
  );
};

export default CardSetEditor;

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

const StyledMain = styled(`main`)(({ theme }) => ({
  padding: theme.spacing(3),
}));
