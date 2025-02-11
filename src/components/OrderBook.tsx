"use client";
import { useEffect, useState } from "react";
// import clsx from "clsx";
const OrderBook = () => {
    const [ask, setAsk] = useState<{ price: string; size: string; n: number }[]>([]);
    const [bid, setBid] = useState<{ price: string; size: string; n: number }[]>([]);
    const [spread, setSpread] = useState<string | null>(null);

    useEffect(() => {
        const ws = new WebSocket("wss://api.hyperliquid.xyz/ws");

        ws.onopen = () => {
            console.log("WebSocket connected");
            ws.send(JSON.stringify({ method: "subscribe", subscription: { type: "l2Book", coin: "BTC" } }));
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // if (!data?.data?.levels) return;

            const askData = data.data.levels[0]?.map((entry: any) => ({
                price: entry.px,
                size: entry.sz,
                n: entry.n
            })) || [];

            const bidData = data.data.levels[1]?.map((entry: any) => ({
                price: entry.px,
                size: entry.sz,
                n: entry.n
            })) || [];

            if (askData.length > 0 && bidData.length > 0) {
                setSpread((parseFloat(askData[0].price) - parseFloat(bidData[0].price)).toFixed(3));
            }

            setAsk(askData);
            setBid(bidData);
        };

        return () => ws.close();
    }, []);

    return (
        <div className="text-white p-4 rounded-lg w-[320px] mx-auto">
            <h1 className="text-center text-lg font-bold mb-2">Order Book</h1>

            <div className="flex justify-between items-center mb-2">
                <select className="bg-gray-800 text-white p-1 text-sm rounded">
                    <option>0.01</option>
                    <option>0.1</option>
                    <option>1</option>
                </select>
                <div className="text-gray-400 text-sm">BTC / USD</div>
            </div>

            <div className="space-y-1">
                {ask.slice(0, 10).map((order, index) => (
                    <div key={index} className="flex justify-between text-sm">
                        <span className="text-red-500">{order.price}</span>
                        <span className="text-gray-300">{order.size}</span>
                        <span className="text-gray-400">{order.n}</span>
                    </div>
                ))}
            </div>

            <p className="text-center text-gray-500 my-2 text-sm">Spread: {spread}</p>

            <div className="space-y-1">
                {bid.slice(0, 10).map((order, index) => (
                    <div key={index} className="flex justify-between text-sm">
                        <span className="text-green-500">{order.price}</span>
                        <span className="text-gray-300">{order.size}</span>
                        <span className="text-gray-400">{order.n}</span>
                    </div>
                ))}
            </div>

            {/* Percentage Bar */}
            <div className="relative mt-4 h-3 bg-gray-700 rounded-full">
                <div className="absolute left-0 h-full bg-green-500" style={{ width: "50%" }}></div>
                <div className="absolute right-0 h-full bg-red-500" style={{ width: "50%" }}></div>
                <div className="absolute inset-0 flex justify-between text-xs text-white px-2">
                    <span>50%</span>
                    <span>50%</span>
                </div>
            </div>
        </div>
    );
};

export default OrderBook;
