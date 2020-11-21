import React from 'react';
import ReactDOM from 'react-dom';
import './orderlist.css';
import {Link as RedirectionLink } from "react-router-dom";
import orderlistcolumn from './../../configuration/orderlistconfiguration';
import {Container,Button,Link,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core';
// var fruits = ["Banana", "Orange", "Apple", "Kiwi"];
class OrderList extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      // orderResponse : ""
    }
    this.redirect = this.redirect.bind(this);
  }
  componentDidMount() {
    this.props.orderlist();

   //var orderResponse = this.props.orderlistresponse;
 }

 redirect(){
   this.props.history.push("/neworder");
 }
  render() {
    console.log(this.props.orderlistresponse);
    return(
      <React.Fragment>
     <Container>
        <div className="neworder">
           <Button  onClick={this.redirect} className="MuiTableCell-alignRight" variant="contained" color="primary">
           Add Order
           </Button>
           <a  className="sortlinks" onClick={(e)=>this.props.sort("customerName")}>
            Sortby:customerName
           </a>
        </div>
        <TableContainer>
           <Table  aria-label="customized table">
              <TableHead>
                <TableRow>
                {orderlistcolumn.map((obj,i)=>{
                  return <th key={'element_' + i} className="MuiTableCell-root MuiTableCell-head jss230">{obj.headertext}</th>
                })
              }
                </TableRow>
              </TableHead>
              <TableBody>
                 {this.props.orderlistresponse !== undefined ?
                  this.props.orderlistresponse.map((obj)=>{
                    return <TableRow>
                            {orderlistcolumn.map((index,j)=>{
                              return <td key={'data' + j} className="MuiTableCell-root MuiTableCell-body jss164 MuiTableCell-alignRight">{obj[index.key]}</td>
                            })}
                     </TableRow>
                  })
                 :null}
              </TableBody>
           </Table>
        </TableContainer>
     </Container>
  </React.Fragment>
    );
  }
}

export default OrderList;
