// import App from "../App";
import ForgotPasswordContainer from '../components/ForgetPassword/forgotContainer';
import NewOrder from '../components/NewOrder/neworder';
import OrderDetails from '../components/OrderDetails/orderdetails';
import OrderListContainer from '../components/OrderList/orderlistContainer';
import UserCreation from '../components/UserCreation/usercreation';
import LoginContainer from '../components/Login/loginContainer';


const RouterConfig = [
    {
        path: '/',
        component: LoginContainer,
        exact: true,
    },
    {
        path: '/login',
        component: LoginContainer,
        exact: true,
    },
    {
        path: '/forgotpassword',
        component: ForgotPasswordContainer,
        exact: true,
    },
    {
        path: '/neworder',
        component: NewOrder,
    },
    {
        path: '/orderdetails',
        component: OrderDetails,
    },
    {
        path: '/orderlist',
        component: OrderListContainer,
    },
    {
        path: '/usercreation',
        component: UserCreation,
    },
];


export default RouterConfig;
