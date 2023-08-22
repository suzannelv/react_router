import React, { PureComponent } from "react";
import { Route, Routes, Link, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import HomeRecommend from "./pages/HomeRecommend";
import HomeRanking from "./pages/HomeRanking";
import Category from "./pages/Category";
import Order from "./pages/Order";

export class App extends PureComponent {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <span>Header</span>
                    <div className="nav">
                        <Link to="/home">Accueil</Link>
                        <Link to="/about">A propos</Link>
                        <Link to="/login">Se connecter</Link>
                        <button onClick={(e) => this.navigateTo("/category")}>
                            Catégorie
                        </button>
                        <span onClick={(e) => this.navigateTo("/order")}>
                            Commande
                        </span>
                    </div>
                    <hr />
                </div>
                <div className="content">
                    {/* 映射关系： path=>component */}

                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />}>
                            <Route
                                path="/home"
                                element={<Navigate to="/home/recommend" />}
                            />
                            <Route
                                path="/home/recommend"
                                element={<HomeRecommend />}
                            ></Route>
                            <Route
                                path="/home/ranking"
                                element={<HomeRanking />}
                            ></Route>
                        </Route>
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/order" element={<Order />} />
                    </Routes>
                    <hr />
                </div>
                <div className="footer">footer</div>
            </div>
        );
    }
}

export default App;
