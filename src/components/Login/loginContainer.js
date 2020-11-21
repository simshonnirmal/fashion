import { connect } from 'react-redux';
import Login from './login';

const mapStateToProps = (state) => {
  return {
    username: state.loginReducer.username,
    password: state.loginReducer.password,
    database: state.loginReducer.database
    // emailValidation: state.userLogin.userEmailValidate,
    // forgotPassworddata:state.userLogin.forgotPassworddata || ""
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // userLogin: (userLoginData) => dispatch({type: "LOGIN_INIT", userLoginData}),
    // validateEmail: (email) => dispatch({type: "VALIDATE_EMAIL", email}),
    // spectateUser: (params) => dispatch({type: "SPECTATE_USER", params}),
    // forgotPassword :(email)=>dispatch({type:"FORGOT_PASSWORD",email})
    setUserName :(username) => dispatch({type: "SET_USERNAME", username}),
    setPassword :(password) => dispatch({type: "SET_PASSWORD", password}),
    handleSubmitdata: (logindata) => dispatch({type:"HANDLE_SUBMIT",...logindata})
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
