import { put, takeLatest, call } from 'redux-saga/effects';
import axios from "axios";



 function* orderlistSaga(){
  const orderlist = yield axios.get('../src/orderlist.json');
  if(orderlist.status ===200) {
    var orderresponse = orderlist.data ;
    //console.log(orderresponse,"orderresponse")
  yield put({type: "ORDER_RESPONSE", data:orderresponse})
  } else {
  }
}
 // function* sortsaga(customerName){
 //   const orderlist = yield axios.get('../src/orderlist.json');
 //   if(orderlist.status ===200) {
 //     var orderresponse = orderlist.data
 //      yield put({type: "SORT_DATA", data:orderresponse})
 //   } else {
 //   }
 // }
export function* watchOrderlistSaga(){
    yield takeLatest("ORDER_LIST",orderlistSaga);
    // yield takeLatest("SORT", sortsaga);
}
