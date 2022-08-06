import {GET_GUEST_INFO, GET_ROOMS_INFO, LOADING, ERROR} from './useCases'

const availableReducer = (state, action) => {
   switch(action.type){
      case GET_GUEST_INFO:
         console.log('GET_GUEST_INFO is functioning in availableReducer')
         return{

         }
      case GET_ROOMS_INFO:
         console.log('GET_ROOMS_INFO is functioning in availableReducer')
         return{

         }
      case LOADING:
         console.log('LOADING is functioning in availableReducer')
         return{

         }
      case ERROR:
         console.log('ERROR is functioning in availableReducer')
         return{

      }

   }
   
};

export default availableReducer;