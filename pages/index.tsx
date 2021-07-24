import Head from "next/head";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { CardDetail, cardEmpty } from "../types/CardDetail";
import { CardSetDetail } from "../types/CardSetDetail";
import {
  getCardMetaData,
  getSampleCardSet,
  globalCache,
} from "../components/CauldronApi";
import {
  Button,
  TextField,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Drawer,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
import MenuIcon from "@material-ui/icons/Menu";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import ArtifactIcon from "@material-ui/icons/AccountBalance";
import CreatureIcon from "@material-ui/icons/Accessibility";
import MagicIcon from "@material-ui/icons/Whatshot";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    // "min-height": "100vh",
    // padding: "0 1rem",
    display: "flex",
    // "flex-direction": "column",
    // "justify-content": "left",
    // "align-items": "flex-start",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  main: {
    // padding: "1rem 0",
    // flex: 1,
    // display: "flex",
    // "flex-direction": "column",
    // "justify-content": "left",
    // "align-items": "flex-start",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
}));

async function LoadMetadata() {
  const metadata = await getCardMetaData();
  globalCache.metadata = metadata;

  console.log(globalCache.metadata);
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const Home: React.FC<Props> = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [loading, setLoading] = useState(true);

  const filename = "cardset.json";

  const newCard = (index: number) => {
    const newCard = cardEmpty();
    newCard.name = `カード${index}`;

    return newCard;
  };

  const [cardIndex, setCardIndex] = useState(0);
  const [cardset, setCardset] = useState({
    name: "",
    cards: [],
  } as CardSetDetail);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCardChange = (newValue: Partial<CardDetail>) => {
    console.log(newValue);

    setCardset((oldCardset) => {
      oldCardset.cards[cardIndex] = {
        ...oldCardset.cards[cardIndex],
        ...newValue,
      };
      return { ...oldCardset, cards: [...oldCardset.cards] };
    });
  };

  const handleCardListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setCardIndex(index);
  };

  const AddCardButton = () => {
    const handleAddCardButtonClick = () => {
      setCardset((oldCardset) => {
        return {
          ...oldCardset,
          cards: [newCard(cardset.cards.length), ...oldCardset.cards],
        };
      });

      // 追加したカードを選択する
      setCardIndex(0);
    };

    return (
      <Button
        variant="contained"
        onClick={handleAddCardButtonClick}
        color="primary"
        startIcon={<AddIcon />}
      >
        New Card
      </Button>
    );
  };

  const DeleteCardButton = () => {
    const handleDeleteCardButtonClick = () => {
      if (cardset.cards.length === 1) {
        return;
      }

      const deleteIndex = cardIndex;

      const confirmMessage = `「${cardset.cards[deleteIndex].name}」を削除します。`;
      if (!confirm(confirmMessage)) {
        return;
      }

      if (deleteIndex === cardset.cards.length - 1) {
        setCardIndex(deleteIndex - 1);
      }

      setCardset((oldCardset) => {
        const newCardset = [...oldCardset.cards];
        newCardset.splice(deleteIndex, 1);

        return { ...oldCardset, cards: newCardset };
      });
    };

    return (
      <Button
        variant="contained"
        onClick={handleDeleteCardButtonClick}
        color="secondary"
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    );
  };

  const OpenSampleCardsetButton = () => {
    const handleButtonClick = async () => {
      const cardset = await getSampleCardSet();

      console.log(cardset);

      openCardSet(cardset);
    };

    return (
      <Button
        color="inherit"
        onClick={() => handleButtonClick()}
        startIcon={<OpenInBrowserIcon />}
      >
        サンプル
      </Button>
    );
  };

  const openCardSet = (newCardSet: CardSetDetail) => {
    const message = "編集中のカードセットは削除されます。よろしいですか？";
    if (!confirm(message)) {
      return;
    }

    const sorted = {
      ...newCardSet,
      cards: newCardSet.cards.sort((l, r) => l.name.localeCompare(r.name)),
    };

    setCardIndex(0);
    setCardset(sorted);
  };

  const DownloadButton = () => {
    const saveJson = (filename: string, jsonSource: {}) => {
      const json = JSON.stringify(jsonSource);

      const element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:application/json;charset=utf-8," + encodeURIComponent(json)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    };

    const downloadCardSet = (cardset: CardSetDetail) =>
      saveJson(filename, cardset);

    return (
      <Button
        color="inherit"
        onClick={() => downloadCardSet(cardset)}
        startIcon={<GetAppIcon />}
      >
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
        <input
          style={{ display: "none" }}
          id="load-cardset"
          onChange={handleChangeInput}
          type="file"
        />

        <Button
          color="inherit"
          component="span"
          startIcon={<OpenInBrowserIcon />}
        >
          開く
        </Button>
      </label>
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <TextField
          label="カードセット名"
          value={cardset.name}
          onChange={(e) => setCardset({ ...cardset, name: e.target.value })}
        />
        <AddCardButton></AddCardButton>
      </div>
      <Divider />
      <List>
        {cardset.cards.map((card, index) => (
          <ListItem
            button
            key={index}
            selected={cardIndex === index}
            onClick={(e) => handleCardListItemClick(e, index)}
          >
            <ListItemIcon>
              {card.type === "creature" ? (
                <CreatureIcon />
              ) : card.type === "artifact" ? (
                <ArtifactIcon />
              ) : (
                <MagicIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={card.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  useEffect(() => {
    if (!loading) {
      return;
    }

    LoadMetadata().then(() => {
      setCardset({
        name: "",
        cards: [newCard(cardIndex)],
      });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Head>
        <title>Cauldron DCG - カード作成ツール</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Cauldron DCG - カード作成ツール
          </Typography>
          <DownloadButton></DownloadButton>
          <OpenCardsetButton></OpenCardsetButton>
          <OpenSampleCardsetButton></OpenSampleCardsetButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <DeleteCardButton></DeleteCardButton>
        <Card
          detail={cardset.cards[cardIndex]}
          onChanged={handleCardChange}
        ></Card>
      </main>
    </div>
  );
};

export default Home;
