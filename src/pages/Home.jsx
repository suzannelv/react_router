import React, { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import { withRouter } from "../hoc";

export class Home extends PureComponent {
    navigateTo(path) {
        const { navigate } = this.props.router;
        navigate(path);
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div className="home-nav">
                    <Link to="/home/recommend">Recommend</Link>
                    <Link to="/home/ranking">Ranking</Link>
                    <button onClick={(e) => this.navigateTo("/home/menu")}>
                        menu
                    </button>
                </div>

                {/* 占位的组件 */}
                <Outlet></Outlet>
            </div>
        );
    }
}

export default withRouter(Home);
