import { Button, FormGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import FormSet from "./FormSet";

type HasArray<K extends string, U> = {
  [P in K]: U[];
};

interface Props<K extends string, U, T extends HasArray<K, U>> {
  label: string;
  detail: T;
  keyName: K;
  onChanged: (e: Partial<T>) => void;
  jtx: (item: U, onItemChanged: (x: Partial<U>) => void) => React.ReactNode;
  newItem: () => U;
}

const InputList = <K extends string, U, T extends HasArray<K, U>>(p: Props<K, U, T>) => {
  const clearItems = () => {
    p.onChanged({ [p.keyName]: [] } as any);
  };

  const addItem = () => {
    const newValue = p.newItem();

    p.onChanged({
      [p.keyName]: [...p.detail[p.keyName], newValue],
    } as any);
  };

  const removeItem = (index: number) => {
    const newlist = [...p.detail[p.keyName]];
    newlist.splice(index, 1);

    p.onChanged({
      [p.keyName]: newlist,
    } as any);
  };

  const onItemChanged = (x: U, index: number) => {
    const newlist = [...p.detail[p.keyName]];
    newlist.splice(index, 1, x);
    p.onChanged({ [p.keyName]: newlist } as any);
  };

  return (
    <FormSet
      label={
        <>
          {p.label}
          <Button variant="contained" onClick={() => addItem()} color="primary" startIcon={<AddIcon />} />
          <Button variant="contained" onClick={() => clearItems()} color="secondary">
            Clear
          </Button>
        </>
      }
    >
      {p.detail[p.keyName].map((elm, index) => (
        <FormGroup key={index}>
          <span>
            <Button variant="contained" color="secondary" onClick={() => removeItem(index)} startIcon={<DeleteIcon />} />
          </span>
          {p.jtx(elm, (x) => onItemChanged({ ...elm, ...x }, index))}
        </FormGroup>
      ))}
    </FormSet>
  );
};

export default InputList;
