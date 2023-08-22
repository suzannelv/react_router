import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from "react-router-dom";
// 在类中使用hook
// 高阶组件：函数
function withRouter(WrapperComponent) {
    return function (props) {
        // 1.导航
        const navigate = useNavigate();
        // 2. 动态路由的参数：/detail/:id
        const params = useParams();
        // 3. 查询字符串的参数: /user?name=why&age=17
        const location = useLocation();
        console.log(location);
        const [searchParams] = useSearchParams();
        const query = Object.fromEntries(searchParams);
        // console.log(searchParams);
        // console.log(searchParams.get("name"));
        // console.log(searchParams.get("age"));
        // for(const item of searchParams.entries()){

        // }
        const router = { navigate, params, location, query };
        return <WrapperComponent {...props} router={router} />;
    };
}
export default withRouter;
