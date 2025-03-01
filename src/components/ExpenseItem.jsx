import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext, useState } from "react";
import { BudgetContext } from "../Context/BudgetContext";

function ExpenseItem({ id, name, price, deleteFunc }) {
    const { editExpense } = useContext(BudgetContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);
    const [newPrice, setNewPrice] = useState(price);

    const handleEdit = () => {
        editExpense(id, { id, name: newName, price: parseFloat(newPrice) });
        setIsEditing(false);
    };

    return (
        <li className="flex justify-between items-center border-[1px] border-gray-200 rounded-lg p-3 gap-6 shadow-sm">
            {isEditing ? (
                <div className="flex w-full gap-2">
                    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className="border p-1 w-full" />
                    <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} className="border p-1 w-full" />
                    <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleEdit}>OK</button>
                </div>
            ) : (
                <div className="w-full flex justify-between items-center">
                    <span className="font-medium">{name}</span>
                    <span className="text-gray-600">{price} FRANCS CFA</span>
                </div>
            )}
            <div className="flex gap-3">
                <button className="text-blue-500 hover:text-blue-700 transition duration-200" onClick={() => setIsEditing(true)}>
                    <FaEdit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700 transition duration-200" onClick={deleteFunc}>
                    <FaTimes size={18} />
                </button>
            </div>
        </li>
    );
}

export default ExpenseItem;