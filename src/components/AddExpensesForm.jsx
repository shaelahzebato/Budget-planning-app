import React, { useContext, useState } from "react";
import { BudgetContext } from "../Context/BudgetContext";
import { v4 as uuidv4 } from 'uuid';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddExpensesForm() {

    const {addExpense} = useContext(BudgetContext)

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {

        e.preventDefault();

        // Vérifier si les champs sont vides
        if (!name.trim() || !price) {
            toast.error("Veuillez remplir tous les champs avant d'ajouter une dépense.");
            return;
        }

        if (name && price) {
            addExpense({ id: uuidv4(), name, price: parseFloat(price) });
            setName("");
            setPrice("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Champ Nom */}
                <div className="flex flex-col w-full">
                    <label htmlFor="name" className="text-gray-700 font-semibold">Nom de la dépense</label>
                    <input 
                        className="border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-300 focus:outline-none" 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Ex: Courses, Loyer..."
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>

                {/* Champ Prix */}
                <div className="flex flex-col w-full">
                    <label htmlFor="price" className="text-gray-700 font-semibold">Prix de la dépense</label>
                    <input 
                        className="border border-gray-300 rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-300 focus:outline-none" 
                        type="number" 
                        name="price" 
                        id="price" 
                        placeholder="Ex: 50000"
                        value={price}
                        onChange={event => setPrice(event.target.value)}
                    />
                </div>
            </div>

            {/* Bouton d'enregistrement */}
            <button className="mt-6 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300">
                Enregistrer
            </button>
        </form>
    );
}

export default AddExpensesForm;