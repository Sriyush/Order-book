import Blocks from "@/components/Blocks";
import TradingViewChart from "@/components/Chart";
import Options from "@/components/Options";
import OrderBook from "@/components/OrderBook";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-around min-h-screen">
        <div className="flex flex-col"> 
          <Blocks/>
          <div className="mt-4">
            <TradingViewChart/>
          </div>
        </div>
        <OrderBook/>
        <Options/>
      </div>
    </>
  );
}
