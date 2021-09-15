import {
  Button,
  Typography,
  Divider,
  Breadcrumbs,
  Link,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { CardDetail } from "../types/CardDetail";
import Card from "../components/Card";

interface Props {
  cardsetName: string;
  card: CardDetail;
  onChanged: (newValue: Partial<CardDetail>) => void;
  deleteCard: () => void;
  cardIndex: number;
  setCardIndex: (index: number) => void;
}

const CardEditor: React.FC<Props> = (props: Props) => {
  const { cardsetName, card, onChanged, deleteCard, cardIndex, setCardIndex } =
    props;

  const handleClickCardsetLink = () => {
    setCardIndex(-1);
  };

  const DeleteCardButton = () => {
    const handleDeleteCardButtonClick = () => {
      deleteCard();
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

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="#" onClick={() => handleClickCardsetLink()}>
          {cardsetName}
        </Link>
        <Typography color="textPrimary">{card.name}</Typography>
      </Breadcrumbs>
      <Divider />
      <DeleteCardButton></DeleteCardButton>
      <Card detail={card} onChanged={onChanged}></Card>
    </>
  );
};

export default CardEditor;
