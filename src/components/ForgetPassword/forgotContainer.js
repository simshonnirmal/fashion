import { connect } from 'react-redux';
import ForgotPassword from './forgotpassword';

const mapStateToProps = (state) => {
  return {
  username: state.loginReducer.username,
  password: state.loginReducer.password
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  setUserName :(username) => dispatch({type: "SET_USERNAME", username}),
  setPassword :(password) => dispatch({type: "SET_PASSWORD", password}),
  }
}

const ForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

export default ForgotPasswordContainer;
