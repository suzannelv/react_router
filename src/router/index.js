import Home from "../pages/Home";
// import About from "../pages/About";
// import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import HomeRecommend from "../pages/HomeRecommend";
import HomeRanking from "../pages/HomeRanking";
import Category from "../pages/Category";
import Order from "../pages/Order";
import HomeMenu from "../pages/HomeMenu";
import Detail from "../pages/Detail";
import User from "../pages/User";
import { Navigate } from "react-router-dom";
import React from "react";

// 懒加载，import本质上是webpack特性，所以webpack遇到import函数时，会进行单独的打包，import函数返回的是promise，对其打包时会进行分包处理
const About = React.lazy(() => import("../pages/About"));
const Login = React.lazy(() => import("../pages/Login"));

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: "/home",
                element: <HomeRecommend />,
            },
            {
                path: "/home/recommend",
                element: <HomeRecommend />,
            },
            {
                path: "/home/ranking",
                element: <HomeRanking />,
            },
            {
                path: "/home/menu",
                element: <HomeMenu />,
            },
        ],
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/category",
        element: <Category />,
    },
    {
        path: "/order",
        element: <Order />,
    },
    {
        path: "/detail/:id",
        element: <Detail />,
    },
    {
        path: "/user",
        element: <User />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
];

export default routes;
