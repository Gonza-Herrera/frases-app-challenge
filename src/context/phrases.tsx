import { createContext, ReactNode, useState } from "react";
import { Phrase, Search } from "./type";

interface ContextProps {
  phrasesContext: Phrase[];
  setPhrasesContext: (phrases: Phrase[]) => void;
  search: Search;
  setSearch: (search: Search) => void;
}

const Context = createContext<Partial<ContextProps>>({});

interface Props {
  children: ReactNode;
}

export function PhrasesContextProvider({ children }: Props) {
  const [phrasesContext, setPhrasesContext] = useState<Array<Phrase>>([]);
  const [search, setSearch] = useState<Search>({
    onSearch: false,
    searchValue: [],
  });

  const contextValue: ContextProps = {
    phrasesContext,
    setPhrasesContext,
    search,
    setSearch,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Context;
