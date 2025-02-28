import React from "react";

function AddExpensesForm() {
    return (
        <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
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