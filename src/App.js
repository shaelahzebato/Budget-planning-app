import AddExpensesForm from "./components/AddExpensesForm";
import ExpensesList from "./components/ExpensesList";

function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="w-[90%] md:w-[80%] lg:w-[70%] container mx-auto py-6 bg-white rounded-lg p-6">
                <h1 className="text-3xl font-bold text-orange-600 text-center">
                    Mon application de planification budgétaire !
                </h1>

                {/* Budget Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-md">
                        <span className="text-gray-700 text-lg font-semibold">
                            <strong>Budget :</strong> 450 000 FRANCS CFA
                        </span>
                        <button className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-600 transition">
                            Modifier
                        </button>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg text-green-800 font-semibold shadow-md">
                        <strong>Reste :</strong> 370 000 FRANCS CFA
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg text-red-800 font-semibold shadow-md">
                        <strong>Dépensés :</strong> 80 000 FRANCS CFA
                    </div>
                </div>

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