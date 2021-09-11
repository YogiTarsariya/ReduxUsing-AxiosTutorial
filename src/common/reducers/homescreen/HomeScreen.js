import * as CallerConstants from "../../constants/api/CallerConstants";
import * as ProcessTypes from "../../constants/api/ProcessTypes";

const initialState = {
     _fetchRandomUserProcess: {
          status: ProcessTypes.IDLE,
          data: {}
     }
}

export default function authApi(state = initialState, action) {
     switch (action.type) {
          case CallerConstants.RANDOM_USER_LIST: {
               return {
                   ...state,
                   _fetchRandomUserProcess: {
                       status: ProcessTypes.SUCCESS,
                       data: action.payload
                   }
               }
          }
          case CallerConstants.RANDOM_USER_LIST_FAIL: {
               return {
                   ...state,
                   _fetchRandomUserProcess: {
                       status: ProcessTypes.FAIL,
                       data: action.payload
                   }
               }
          }
          case CallerConstants.RESET_RANDOM_USER_LIST: {
               return {
                   ...state,
                   _fetchRandomUserProcess: {
                       status: ProcessTypes.IDLE,
                       data: state._fetchRandomUserProcess.data
                   }
               }
          }
          default: {
               return state;
          }
     }
}