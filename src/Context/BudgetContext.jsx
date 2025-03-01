import React, {createContext, useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BudgetContext = createContext();

const BudgetContextProvider = props => {

    const [budget, setBudget] = useState(null);
    const [expenses, setExpenses] = useState([]);

    const totalExpenses = expenses.reduce((acc, item) => acc + item.price, 0);
    const remaining = budget ? budget - totalExpenses : 0;

    // Fonction pour ajouter une dépense
    const addExpense = (expense) => {
        if (expense.price > remaining) {
            toast.error("Le montant dépasse le budget restant !");
            return;
        }
        setExpenses([...expenses, expense]);
        toast.success("Dépense ajoutée avec succès !");
    };

    // Fonction pour ajouter/modifier le budget
    const addBudget = (budgetAmount) => {
        setBudget(budgetAmount);
        toast.success("Budget mis à jour !");
    };

    // Fonction pour supprimer une dépense
    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    const editExpense = (id, updatedExpense) => {
        setExpenses(expenses.map((expense) => (expense.id === id ? updatedExpense : expense)));
    };

    return (
        <BudgetContext.Provider value={{expenses, budget, totalExpenses, remaining, addBudget, addExpense, editExpense, deleteExpense}}>
            {props.children}
        </BudgetContext.Provider>
    )
}
export default BudgetContextProvider;

/*[
    { id: 1, name: "Shopping", price: 70000 },
    { id: 2, name: "Maison", price: 80000 },
    { id: 3, name: "Factures", price: 10000 },
    { id: 4, name: "Livre", price: 12000 }
]*/