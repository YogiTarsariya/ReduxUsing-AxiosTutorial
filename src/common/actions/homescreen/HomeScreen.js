import axios from "axios";
import * as ApiConstants from "../../constants/api/ApiConstants";
import * as CallerConstants from "../../constants/api/CallerConstants";
import { dispatchResponse } from "../ActionDispatch";

export const fetchRandomUserApi = () => {
     let headers = {
          'Content-Type': 'application/json'
     };
     return (dispatch) => {
          return axios
               .get(ApiConstants.RESULT_API, { headers: headers })
               .then(response => {
                    if (response.status === 200) {
                         dispatch(dispatchResponse(response.data, CallerConstants.RANDOM_USER_LIST));
                    }
               })
               .catch((error) => {
                    dispatch(dispatchResponse(error.response.data, CallerConstants.RANDOM_USER_LIST_FAIL));
               });
     };
}

export const resetFetchRandomUserApi = () => {
     return dispatchResponse('', CallerConstants.RESET_RANDOM_USER_LIST);
}