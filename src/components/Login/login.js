import React from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import './login.css';
import {emailvalidator,passwordvalidator} from '../../patternValidator/validations.js';
import {Link as RedirectionLink } from "react-router-dom";
import {CssBaseline ,Container,FormControl ,TextField ,Button ,FormControlLabel,Checkbox ,Link} from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      mailErr: false,
      passwordErr:false,
      checked:false,
      mismatchErr:false
    }
    this.signIn = this.signIn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
    signIn(e,username,password){
      var localdata;
    let errorExists = false;
    if(username === "" || username.length < 2 || !emailvalidator(username)){
        this.setState({
          mailErr :true
        });
        errorExists = true
    }
    if(password ==="" && !passwordvalidator(password)){
      this.setState({
        passwordErr :true
      });
    }
    if(this.state.checked){
      localStorage.setItem('user', this.props.username);
    }
    if(!errorExists){
   this.props.handleSubmitdata({username:this.props.username,password:this.props.password});
  setTimeout(() => {
    localdata =  this.props.database;
    if(localdata){
    let obj = localdata.find(o =>(o.username === this.props.username && o.password === this.props.password));
    if(obj !== undefined){
      this.props.history.push("/orderlist");
    }
    else{
      this.setState({
        mismatchErr:true
      });
    }
  }
}, 1000);
    }
  }
  handleChange(){
    this.setState({
      checked : !this.state.checked
    })
  }
  render() {
    return(
    <React.Fragment>
    <CssBaseline />
     <Container maxWidth="xs">
  <form className="formAlign"  noValidate autoComplete="off">
    <div>{'Log in'}</div>
  <div className="text-center"><PersonPinIcon color="primary" fontSize="large"/></div>
   <div className="MuiFormControl-marginNormal MuiFormControl-fullWidth">
   <TextField id="outlined-basic-email" error={this.state.mailErr} value={this.props.username} helperText={`${(this.state.mailErr === true)?"please enter valid email address":""}`} label="Email" name="email" onChange={(e) =>this.props.setUserName(e.target.value)}  variant="outlined" fullWidth/>
   </div>
   <div className="MuiFormControl-marginNormal MuiFormControl-fullWidth" >
   <TextField id="outlined-basic-password"  error={this.state.passwordErr} helperText={`${this.state.passwordErr === true ? "password should contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:":""}`} value={this.props.password} label="Password" type="password" variant="outlined"  name="password" fullWidth onChange={(e) => this.props.setPassword(e.target.value)}/>
   </div>
   {this.state.mismatchErr &&
     <div className="MuiFormControl-marginNormal MuiFormControl-fullWidth" >
     <span style={{color:"#f44336"}}>email address and password ismatching , please recheck</span>
    </div>
   }
   <FormControlLabel
          value="end"
          control={<Checkbox checked={this.state.checked}
            onClick={this.handleChange} color="primary" />}
          label="Remember Me"
          labelPlacement="end"
        />
   <div className="MuiFormControl-marginNormal MuiFormControl-fullWidth text-center" >
   <Button variant="contained" color="primary" fullWidth onClick={(e)=>this.signIn(e,this.props.username,this.props.password)}>
  sign in
</Button>
   </div>
   <RedirectionLink to="/forgotpassword" className="forgotLink">
       Forgot Password
     </RedirectionLink>
</form>
     </Container>
      </React.Fragment>
    );
  }
}

export default Login;
