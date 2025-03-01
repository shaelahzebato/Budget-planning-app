import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { BudgetContext } from '../Context/BudgetContext';

function ExpensesList() {
    const { expenses, deleteExpense } = useContext(BudgetContext);

    const handleDelete = (id) => {
        deleteExpense(id);
    };


    return (
        <div className="mt-6">
            {expenses.length === 0 ? (
                <p className="text-gray-500 text-center">Aucune dépense enregistrée.</p>
            ) : (
                <ul className="flex flex-col gap-3">
                    {expenses.map((item) => (
                        <ExpenseItem 
                            key={item.id} 
                            id={item.id} 
                            name={item.name} 
                            price={item.price.toLocaleString()} 
                            deleteFunc={() => handleDelete(item.id)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ExpensesList;