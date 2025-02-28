import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

function ExpenseItem({ name, price }) {
    return (
        <li className="flex justify-between items-center border-[1px] border-gray-200 rounded-lg p-3 gap-6 shadow-sm">
            {/* Texte */}
            <div className="w-full flex justify-between items-center">
                <span className="font-medium">{name}</span>
                <span className="text-gray-600">{price} FRANCS CFA</span>
            </div>

            {/* Boutons Modifier & Supprimer */}
            <div className="flex gap-3">
                <button className="text-blue-500 hover:text-blue-700 transition duration-200">
                    <FaEdit size={18} />
                </button>
                <button className="text-red-500 hover:text-red-700 transition duration-200">
                    <FaTimes size={18} />
                </button>
            </div>
        </li>
    );
}

export default ExpenseItem;