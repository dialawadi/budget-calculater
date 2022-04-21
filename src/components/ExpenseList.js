import React from "react";
import Item from "./ExpenseItem";
import {MdDelete} from 'react-icons/md';
export const ExpenseList = ({ expenses ,clearIteams ,handleDelete , handleEdit }) => {
  return (
    <>
      <ul className="list">
          {expenses.map((expense)=> {
              return <Item key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit} />

          })}
      </ul>
      {expenses.length > 0 && <button className="btn" onClick={clearIteams}>clear expenses
      <MdDelete className="btn-icon" />
      </button>}
    </>
  );
};
