import { Button, Typography, Divider, Breadcrumbs } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card } from "../types/Card";
import CardForm from "../components/CardForm";
import Link from "next/link";

interface Props {
  cardsetName: string;
  card: Card;
  onChanged: (newValue: Partial<Card>) => void;
  deleteCard: () => void;
  cardIndex: number;
  setCardIndex: (index: number) => void;
}

const CardEditorForm: React.FC<Props> = (props: Props) => {
  const { cardsetName, card, onChanged, deleteCard, cardIndex, setCardIndex } = props;

  const DeleteCardButton = () => {
    const handleDeleteCardButtonClick = () => {
      deleteCard();
    };

    return (
      <Button variant="contained" onClick={handleDeleteCardButtonClick} color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    );
  };

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/cardset" shallow={true}>
          {cardsetName}
        </Link>
        <Typography color="textPrimary">{card.name}</Typography>
      </Breadcrumbs>
      <Divider />
      <DeleteCardButton></DeleteCardButton>
      <CardForm model={card} onChanged={onChanged}></CardForm>
    </>
  );
};

export default CardEditorForm;
