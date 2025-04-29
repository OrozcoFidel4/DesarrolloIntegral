import { CommonLayout } from "../layouts";
import { Login, Register,  } from "../pages/common";
import Error404 from "../pages/common/Error404";

const routesCommon = [
    {
        path: "/login",
        layout: CommonLayout,
        component: Login,
    },
    {
        path: "/register",
        layout: CommonLayout,
        component: Register,
    },
    {
        path: "*",
        layout: CommonLayout,
        component: Error404,
    },
    
];

export default routesCommon;
