import { type } from "os";

export type Phrase = {
  title: string;
};

export type OnSearch = {
  onSearch: false;
  searchValue: Array<Search>;
};

export type Search = {
  onSearch: boolean;
  searchValue: Array<Phrase>;
};

export type PhraseContextType = {
  phrasesContext: Array<Phrase>;
  setPhrasesContext: (value: Array<Phrase>) => void;
  search: Search;
  setSearch: (search: Search) => void;
};
