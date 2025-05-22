import { createContext, useContext, useState, type ReactNode } from "react";

const ShowAddBookContext = createContext<{
  showForm: boolean;
  toggleShowForm: () => void;
} | null>(null);

export function ShowAddBookProvider({ children }: { children: ReactNode }) {
  const [showAddForm, setShowAddForm] = useState(false);

  function toggleShowForm() {
    setShowAddForm((prevState) => !prevState);
  }
  return (
    <ShowAddBookContext.Provider
      value={{ showForm: showAddForm, toggleShowForm }}
    >
      {children}
    </ShowAddBookContext.Provider>
  );
}

export function useShowAddBookForm() {
  const context = useContext(ShowAddBookContext);

  if (!context)
    throw new Error(
      "useShowAddBookForm cannot be used outside ShowAddBookContext"
    );

  return { ...context };
}
