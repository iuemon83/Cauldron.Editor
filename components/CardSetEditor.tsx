import { Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Link } from "@mui/material";
import { cardEmpty } from "../types/CardDetail";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ArtifactIcon from "@mui/icons-material/AccountBalance";
import CreatureIcon from "@mui/icons-material/Accessibility";
import MagicIcon from "@mui/icons-material/Whatshot";
import { CardSetDetail } from "../types/CardSetDetail";
import CardEditor from "../components/CardEditor";
import InputText from "./input/InputText";
import { CardDetail } from "../types/CardDetail";

interface Props {
  cardset: CardSetDetail;
  setCardset: (newCardset: Partial<CardSetDetail>) => void;
  cardIndex: number;
  setCardIndex: (index: number) => void;
}

const CardSetEditor: React.FC<Props> = (props: Props) => {
  const { cardset, setCardset, cardIndex, setCardIndex } = props;

  const AddCardButton = () => {
    const handleAddCardButtonClick = () => {
      setCardset({
        cards: [newCard(cardset.cards.length), ...cardset.cards],
      });

      // 追加したカードを選択する
      setCardIndex(0);
    };

    return (
      <Button variant="contained" onClick={handleAddCardButtonClick} color="primary" startIcon={<AddIcon />}>
        New Card
      </Button>
    );
  };

  const handleClearCardsButtonClick = () => {
    const confirmMessage = `すべてのカードを削除します。`;
    if (!confirm(confirmMessage)) {
      return;
    }

    setCardset({ cards: [newCard(0)] });
  };

  const handleDeleteCardButtonClick = (deleteIndex: number) => {
    if (cardset.cards.length === 1) {
      return;
    }

    const confirmMessage = `「${cardset.cards[deleteIndex].name}」を削除します。`;
    if (!confirm(confirmMessage)) {
      return;
    }

    setCardIndex(-1);

    const newCards = [...cardset.cards];
    newCards.splice(deleteIndex, 1);

    setCardset({ cards: newCards });
  };

  const handleCardListItemClick = (index: number) => {
    console.log(cardset.cards[index]);
    setCardIndex(index);
  };

  const newCard = (index: number) => {
    const newCard = cardEmpty();
    newCard.name = `カード${index}`;

    return newCard;
  };

  // カードセットのエディター
  if (cardIndex < 0) {
    return (
      <>
        <InputText label="カードセット名" detail={cardset} keyName="name" onChanged={setCardset} />
        <Divider />
        <AddCardButton></AddCardButton>
        <Button variant="contained" onClick={() => handleClearCardsButtonClick()} color="secondary" startIcon={<DeleteIcon />}>
          Clear
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Cost</TableCell>
                <TableCell align="right">Power</TableCell>
                <TableCell align="right">Toughness</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cardset.cards.map((card, index) => (
                <TableRow key={index} hover>
                  <TableCell>
                    {card.type === "creature" ? <CreatureIcon /> : card.type === "artifact" ? <ArtifactIcon /> : <MagicIcon />}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link href="#" onClick={() => handleCardListItemClick(index)}>
                      {card.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{card.cost}</TableCell>
                  <TableCell align="right">{card.power}</TableCell>
                  <TableCell align="right">{card.toughness}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => handleDeleteCardButtonClick(index)}
                      color="secondary"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }

  const handleCardChange = (newValue: Partial<CardDetail>) => {
    console.log(newValue);

    cardset.cards[cardIndex] = {
      ...cardset.cards[cardIndex],
      ...newValue,
    };
    setCardset({ ...cardset, cards: [...cardset.cards] });
  };

  // カードが選択されているならカードのエディター
  return (
    <CardEditor
      cardsetName={cardset.name}
      card={cardset.cards[cardIndex]}
      onChanged={handleCardChange}
      deleteCard={() => handleDeleteCardButtonClick(cardIndex)}
      cardIndex={cardIndex}
      setCardIndex={setCardIndex}
    ></CardEditor>
  );
};

export default CardSetEditor;
