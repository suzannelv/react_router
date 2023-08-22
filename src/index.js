import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <HashRouter>
            {/* 对于懒加载包还没有下来显示出来前，使用suspense, fallback应急方案 */}
            <Suspense fallback={<h3>loading</h3>}>
                <App />
            </Suspense>
        </HashRouter>
    </React.StrictMode>
);
