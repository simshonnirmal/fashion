import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {emailvalidator,passwordvalidator} from '../../patternValidator/validations.js';
import {CssBaseline ,Container,FormControl ,TextField ,Button ,FormControlLabel,Checkbox ,Link} from '@material-ui/core';
import PersonPinIcon from '@material-ui/icons/PersonPin';
class ForgotPassword extends React.Component {
  constructor(props){
    super(props)
    this.state={
     mailErr:false
    }
    this.submit = this.submit.bind(this);
  }
  submit(e,username){
    if(username === "" || username.length < 2 || !emailvalidator(username)){
        this.setState({
          mailErr :true
        });
    }
  }
  render() {
    return(
      <React.Fragment>
      <CssBaseline />
       <Container maxWidth="xs">
    <form className="formAlign"  noValidate autoComplete="off">
    <div className="text-center"><PersonPinIcon color="primary" fontSize="large"/></div>
     <div className="MuiFormControl-marginNormal MuiFormControl-fullWidth">
     <TextField id="outlined-basic-email"  value={this.props.username} error={this.state.mailErr} helperText={`${(this.state.mailErr === true)?"please enter valid email address":""}`} label="Email" name="email" onChange={(e) =>this.props.setUserName(e.target.value)}  variant="outlined" fullWidth/>
     </div>
     <div className="MuiFormControl-marginNormal MuiFormControl-fullWidth text-center" >
     <Button variant="contained" color="primary" fullWidth onClick={(e)=>this.submit(e,this.props.username)}>
    submit
  </Button>
     </div>
  </form>
       </Container>
        </React.Fragment>
    );
  }
}

export default ForgotPassword;
