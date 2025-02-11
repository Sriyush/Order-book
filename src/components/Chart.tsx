"use client";
import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

let tvScriptLoadingPromise: Promise<void>;

const TradingViewChart: React.FC = () => {
    const onLoadScriptRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        onLoadScriptRef.current = createWidget;

        if (!tvScriptLoadingPromise) {
            tvScriptLoadingPromise = new Promise((resolve) => {
                const script = document.createElement("script");
                script.id = "tradingview-widget-loading-script";
                script.src = "https://s3.tradingview.com/tv.js";
                script.type = "text/javascript";
                script.onload = () => resolve();
                document.head.appendChild(script);
            });
        }

        tvScriptLoadingPromise.then(() => {
            if (onLoadScriptRef.current) {
                onLoadScriptRef.current();
            }
        });

        return () => {
            onLoadScriptRef.current = null;
        };

        function createWidget() {
            if (document.getElementById("tradingview_chart") && window.TradingView) {
                new window.TradingView.widget({
                    autosize: true,
                    symbol: "CRYPTO:BTCUSD",
                    interval: "1",
                    timezone: "Etc/UTC",
                    theme: "dark",
                    style: "1",
                    locale: "en",
                    enable_publishing: false,
                    allow_symbol_change: true,
                    container_id: "tradingview_chart",
                });
            }
        }
    }, []);

    return <div id="tradingview_chart" className="h-[500px] w-full" />;
};

export default TradingViewChart;
