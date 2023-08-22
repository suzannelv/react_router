import React, { PureComponent } from "react";
import { withRouter } from "../hoc";

export class HomeMenu extends PureComponent {
    constructor() {
        super();
        this.state = {
            menus: [
                { id: 111, name: "populaire" },
                { id: 112, name: "classique" },
                { id: 113, name: "hot" },
            ],
        };
    }
    NavigateToDetail(id) {
        // console.log(id);
        const { navigate } = this.props.router;
        navigate("/detail" + id);
    }
    render() {
        const { menus } = this.state;
        return (
            <div>
                <h1>Home Menu</h1>
                <ul>
                    {menus.map((item) => {
                        return (
                            <li
                                key={item.id}
                                onClick={(e) => this.NavigateToDetail(item.id)}
                            >
                                {item.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default withRouter(HomeMenu);
