import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useEffect, useState } from "react";
import { getCardMetaData, globalCache } from "../components/CauldronApi";
import { CssBaseline, AppBar, Toolbar, Typography, CircularProgress } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { getAs } from "./MyLink";

const drawerWidth = 200;

type Props = {
  children: React.ReactNode;
};

export const ResponsiveDrawer: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  async function LoadMetadata() {
    const metadata = await getCardMetaData();
    globalCache.metadata = metadata;

    console.log(globalCache.metadata);
  }

  useEffect(() => {
    if (!loading) {
      return;
    }

    LoadMetadata()
      .then(() => {
        setLoading(false);
      })
      .catch((a) => {
        console.log(a);
        alert("サーバーとの通信でエラーが発生しました。");
      });
  }, [loading]);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (index: number, url: string) => {
    setSelectedIndex(index);
    router.push(url, getAs(url));
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key="Card Set" selected={selectedIndex === 0} onClick={(event) => handleListItemClick(0, "/cardset")}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary="Card Set" />
        </ListItem>
        <ListItem button key="Rule Book" selected={selectedIndex === 1} onClick={(event) => handleListItemClick(1, "/rulebook")}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary="Rule Book" />
        </ListItem>
        <ListItem button key="About" selected={selectedIndex === 2} onClick={(event) => handleListItemClick(2, "/about")}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Root>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Cauldron DCG Editor
            </Typography>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Root>
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
  // display: "flex",
  flexGrow: 1,
}));
