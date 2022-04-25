import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { getSampleCardSet } from "../components/CauldronApi";
import { CardSet } from "../types/CardSet";
import GetAppIcon from "@mui/icons-material/GetApp";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

type Props = { cardset: CardSet; setCardset: (newCardset: Partial<CardSet>) => void };

const CardSetEditorMenu = (p: Props) => {
  const { cardset, setCardset } = p;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownloadCardset = () => {
    handleClose();

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

    if (!cardset.name) {
      alert("カードセットの名前を入力してください");
      return;
    }

    const filename = `${cardset.name}.json`;

    const downloadCardSet = (cardset: CardSet) => saveJson(filename, cardset);

    downloadCardSet(cardset);
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

    setCardset(sorted);
  };

  const OpenCardsetButton = () => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        handleClose();
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
        handleClose();
      };
      reader.readAsText(cardsetFile);
    };

    return (
      <label htmlFor="load-cardset">
        <input style={{ display: "none" }} id="load-cardset" onChange={handleChangeInput} type="file" />

        <MenuItem>
          <ListItemIcon>
            <OpenInBrowserIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Open</ListItemText>
        </MenuItem>
      </label>
    );
  };

  const handleOpenSample = async (id: number) => {
    const cardset = await getSampleCardSet(id);

    console.log(cardset);

    openCardSet(cardset);

    handleClose();
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleDownloadCardset}>
          <ListItemIcon>
            <GetAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Save</ListItemText>
        </MenuItem>
        <OpenCardsetButton />
        <MenuItem onClick={() => handleOpenSample(1)}>
          <ListItemIcon>
            <OpenInBrowserIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sample1</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleOpenSample(2)}>
          <ListItemIcon>
            <OpenInBrowserIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sample2</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CardSetEditorMenu;
