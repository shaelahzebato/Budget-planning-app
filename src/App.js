import { useContext, useState } from "react";
import AddExpensesForm from "./components/AddExpensesForm";
import ExpensesList from "./components/ExpensesList";
import { BudgetContext } from "./Context/BudgetContext";
import { ToastContainer } from "react-toastify";  // 🔹 Importer le ToastContainer
import "react-toastify/dist/ReactToastify.css";  // 🔹 Importer les styles


function App() {
    const { totalExpenses, remaining, addBudget, budget } = useContext(BudgetContext); 

    const [budgetStoredLocally, setBudgetStoredLocally] = useState(budget || "");
    const [isEditing, setIsEditing] = useState(true);

    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        if (!budgetStoredLocally || isNaN(budgetStoredLocally) || budgetStoredLocally <= 0) {
            alert("Veuillez entrer un montant valide.");
            return;
        }
        addBudget(parseInt(budgetStoredLocally)); // Mets à jour le budget dans le contexte
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] container mx-auto py-6 bg-white rounded-lg p-6">
                <h1 className="text-3xl font-bold text-orange-600 text-center">
                    Mon application de planification budgétaire !
                </h1>
                <ToastContainer/>
                {/* Budget Section */}
                {isEditing ? (
                    <form onSubmit={handleBudgetSubmit} className="mt-6 flex gap-4">
                        <input
                            type="number"
                            name="budget"
                            placeholder="Entrez votre budget"
                            value={budgetStoredLocally}
                            onChange={(e) => setBudgetStoredLocally(e.target.value)}
                            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded-md">
                            Valider
                        </button>
                    </form>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-md">
                            <span className="text-gray-700 text-lg font-semibold">
                                <strong>Budget :</strong> {budget} FRANCS CFA
                            </span>
                            <button onClick={() => setIsEditing(true)} className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600 transition">
                                Modifier
                            </button>
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg text-green-800 font-semibold shadow-md">
                            <strong>Reste :</strong> {remaining} FRANCS CFA
                        </div>
                        <div className="bg-red-100 p-4 rounded-lg text-red-800 font-semibold shadow-md">
                            <strong>Dépensés :</strong> {totalExpenses} FRANCS CFA
                        </div>
                    </div>
                )}

                {/* Expenses List */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">Liste des dépenses</h2>
                    <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                        <ExpensesList />
                    </div>
                </div>

                {/* Add Expense Form */}
                <div className="mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">Ajouter une dépense</h2>
                    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
                        <AddExpensesForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;