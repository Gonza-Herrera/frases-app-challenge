import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PhraseContext from "../../context/phrases";
import { PhraseContextType } from "../../context/type";

const DialogComponent = (props: any) => {
  const { open, setOpen, title } = props;
  const { phrasesContext, setPhrasesContext } = useContext(
    PhraseContext
  ) as PhraseContextType;
  const [phrase, setPhrase] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

  const handlePhraseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value);
  };

  const handleAddClick = () => {
    const newPhrase = { title: phrase };
    setPhrasesContext([...phrasesContext, newPhrase]);
    handleClose();
    setPhrase("");
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="phrase"
            label="Frase..."
            type="text"
            fullWidth
            variant="standard"
            value={phrase}
            onChange={handlePhraseChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="outlined" onClick={handleAddClick}>
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
