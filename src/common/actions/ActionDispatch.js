
export const dispatchResponse = (response, apiType) => {
     return {
         type: apiType,
         payload: response
     }
};