"use client"
import { useState } from "react";

const Options = () => {
    const [selected, setSelected] = useState("Long");

    return (
        <div className="flex justify-center items-center h-full px-20 py-48">
            <div className="flex space-x-6 p-4 w-full max-w-sm">
                <button 
                    className={`border-2 p-3 rounded-md transition w-full min-w-[150px] ${
                        selected === "Long" ? "border-green-400 bg-green-400 text-black" : "border-gray-500 text-gray-300"
                    }`}
                    onClick={() => setSelected("Long")}
                >
                    Long
                </button>
                <button 
                    className={`border-2 p-3 rounded-md transition w-full min-w-[150px] ${
                        selected === "Short" ? "border-green-400 bg-green-400 text-black" : "border-gray-500 text-gray-300"
                    }`}
                    onClick={() => setSelected("Short")}
                >
                    Short
                </button>
            </div>
        </div>
    );
};

export default Options;
