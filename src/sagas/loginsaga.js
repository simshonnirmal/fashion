import { put, takeLatest, call } from 'redux-saga/effects';
import axios from "axios";

function*  requestAutoCompleteApi() {
 //  const data =yield fetch(
 //    '../src/mock.json'
 //  ).then(function(response){
 //   return response.json()
 // }).then(function(data){
 //   console.log(data);
 //   return data
 // })
 // console.log(data)
 //return axios.get('../src/mock.json')
}

 function* handleSubmitSaga(parameters){
   console.log(parameters)
  const data = yield axios.get('../src/mock.json');
   if(data.status ===200) {
     var response = data.data;
   yield put({type: "DATABASE", data:response})
   } else {
   }
}

export function* watchLoginSaga(){
    yield takeLatest("HANDLE_SUBMIT",handleSubmitSaga);
  //yield takeLatest("HANDLE_SUBMIT",requestAutoCompleteApi);
}
