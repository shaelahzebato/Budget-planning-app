import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpensesList() {
    const expenses = [
        { id: 1, name: "Shopping", price: 70000 },
        { id: 2, name: "Maison", price: 80000 },
        { id: 3, name: "Factures", price: 10000 },
    ];

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
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ExpensesList;