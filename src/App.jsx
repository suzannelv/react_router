import React from "react";
import {
    Route,
    Routes,
    Link,
    Navigate,
    useNavigate,
    useRoutes,
} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";
// import HomeRecommend from "./pages/HomeRecommend";
// import HomeRanking from "./pages/HomeRanking";
// import Category from "./pages/Category";
// import Order from "./pages/Order";
// import HomeMenu from "./pages/HomeMenu";
// import Detail from "./pages/Detail";
// import User from "./pages/User";
import routes from "./router";

export function App(props) {
    const navigate = useNavigate();
    function navigateTo(path) {
        navigate(path);
    }
    return (
        <div className="app">
            <div className="header">
                <span>Header</span>
                <div className="nav">
                    <Link to="/home">Accueil</Link>
                    <Link to="/about">A propos</Link>
                    <Link to="/login">Se connecter</Link>
                    <button onClick={(e) => navigateTo("/category")}>
                        Catégorie
                    </button>
                    <span onClick={(e) => navigateTo("/order")}>Commande</span>
                    <Link to="/user?name=why&age=18">User</Link>
                </div>
                <hr />
            </div>
            <div className="content">
                {/* 映射关系： path=>component */}

                {/* <Routes>
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
                        <Route path="/home/menu" element={<HomeMenu />}></Route>
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/user" element={<User />} />
                </Routes> */}
                {useRoutes(routes)}
            </div>
            <div className="footer">footer</div>
        </div>
    );
}

export default App;
