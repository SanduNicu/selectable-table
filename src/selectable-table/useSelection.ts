import { useCallback, useState } from "react";
import { TableLine } from "./types";

const useSelection = (tableData: TableLine[]) => {
  const [selection, setSelection] = useState<string[]>([]);

  const handleSelection = useCallback(
    (rowName: string) => {
      if (selection.includes(rowName)) {
        setSelection([...selection.filter((el) => el !== rowName)]);
      } else {
        setSelection([...selection, rowName]);
      }
    },
    [selection]
  );

  const clearSelection = useCallback(() => {
    setSelection([]);
  }, []);

  const selectAll = useCallback(() => {
    const allRowsName = tableData.reduce(
      (acc, { name }) => [...acc, name],
      [] as string[]
    );
    setSelection(allRowsName);
  }, [tableData]);

  return {
    selection,
    setSelection,
    handleSelection,
    clearSelection,
    selectAll,
  };
};

export default useSelection;
