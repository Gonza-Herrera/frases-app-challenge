import { FC, useContext } from "react";
import { Phrase } from "../../context/type";
import CardComponent from "../Card";
import PhraseContext from "../../context/phrases";
import { PhraseContextType } from "../../context/type";
import { Props } from "../../models/phrases";


export const CardListComponent: FC<Props> = () => {
  const { phrasesContext, search } = useContext(
    PhraseContext
  ) as PhraseContextType;

  return (
    <>
      {phrasesContext.length > 0 && !search.onSearch ? (
        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          {phrasesContext.map((phrase) => (
            <CardComponent key={phrase.title} title={phrase.title} />
          ))}
        </div>
      ) : search.onSearch === true ? (
        <div
          className="card-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          {search.searchValue.length > 0 ? (
            search.searchValue.map((phrase) => (
              <CardComponent key={phrase.title} title={phrase.title} />
            ))
          ) : (
            <h2>
              Upss! No se encontraron frases que coincidan con la búsqueda
            </h2>
          )}
        </div>
      ) : (
        <h2>Para iniciar agregue una frase</h2>
      )}
    </>
  );
};
