import React from 'react';
import {connect} from 'react-redux';
import Login from './components/Login/login.js';
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUser: (userObj) => {
            dispatch({type: "SET_USER", payload: userObj})
        }
    }
}
class App extends React.Component {
    componentDidMount = () => {
        const user = {
            name: 'Lusu',
        }
        this.props.setUser(user)
    }
 render() {
  return(
   <div>
    <Login/>
   </div>
  );
 }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
