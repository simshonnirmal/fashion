import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import './neworder.css';
import {Link as RedirectionLink } from "react-router-dom";
import {CssBaseline ,Container,FormControl ,TextField ,Button ,FormControlLabel,Checkbox ,Link} from '@material-ui/core';
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker} from '@material-ui/pickers';
import PersonPinIcon from '@material-ui/icons/PersonPin';
class NewOrder extends React.Component {
  render() {
    return(
      <React.Fragment>
      <CssBaseline />
       <Container maxWidth="sm">
       <div className="jss136"><div className="jss137 jss138" id="demo-u1z9bvafwtm">
    <form className="jss180"  noValidate autoComplete="off">
     <div className="MuiFormControl-root MuiTextField-root">
     <TextField id="outlined-basic-email"    label="customerId" name="email" variant="outlined" fullWidth/>
     </div>
     <div className="MuiFormControl-root MuiTextField-root" >
     <TextField id="outlined-basic-password"   label="customerName"  variant="outlined"  name="customerName" fullWidth />
     </div>
     <div className="MuiFormControl-root MuiTextField-root" >
     <TextField id="outlined-basic-password"   label="productName"  variant="outlined"  name="productName" fullWidth />
     </div>
     <div className="MuiFormControl-root MuiTextField-root" >
     <TextField id="outlined-basic-password"   label="quantity" type="number" variant="outlined"  name="quantity" fullWidth />
     </div>
     <div className="MuiFormControl-root MuiTextField-root" >
     <TextField id="outlined-basic-password"   label="size" type="text" variant="outlined"  name="size" fullWidth />
     </div>
     <div className="MuiFormControl-root MuiTextField-root" >
     <TextField id="outlined-basic-password"   label="venderName" type="text" variant="outlined"  name="venderName" fullWidth />
     </div>
     <div className="MuiFormControl-root MuiTextField-root" >
     <TextField id="outlined-basic-password"   label="status"  variant="outlined"  name="status" fullWidth />
     </div>
     <TextField
   id="datetime-local"
   label="Next appointment"
   type="datetime-local"
   defaultValue="2017-05-24T10:30"
   className="MuiInputBase-input MuiInput-input"
   InputLabelProps={{
     shrink: true,
   }}
 />
     <div className="text-center" >
     <Button variant="contained" color="primary"  onClick={(e)=>this.signIn(e,this.props.username,this.props.password)}>
    confirm
  </Button>
     </div>

  </form>
  </div>
  </div>
       </Container>
        </React.Fragment>
    );
  }
}

export default NewOrder;
