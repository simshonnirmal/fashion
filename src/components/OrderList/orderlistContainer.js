import { connect } from 'react-redux';
import OrderList from './orderlist';

const mapStateToProps = (state) => {
  console.log(state.orderlistReducer.orderresponse)
  return {
   orderlistresponse:state.orderlistReducer.orderresponse
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orderlist:() => dispatch({type:"ORDER_LIST"}),
    sort :(sortvalue) => dispatch({type: "SORT",sortvalue})
  }
}

const OrderListContainer = connect(mapStateToProps, mapDispatchToProps)(OrderList);

export default OrderListContainer;
