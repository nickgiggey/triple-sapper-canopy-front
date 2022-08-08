import {GET_GUEST_INFO, GET_ROOMS_INFO, LOADING, VERDICT, ERROR} from './useAvailability'

const availableReducer = (state, action) => {
   switch(action.type){
      case GET_GUEST_INFO:
         return{
            ...state,
            guestInfo: action.payload,
            guestInfoSuccess: !action.payload ? false : true,
         }
      case GET_ROOMS_INFO:
         return{
            ...state,
            rooms: action.payload,
         }
      case LOADING:
         return{
            ...state,
            loading: action.payload,
         }
      case VERDICT:
         return{
            ...state,
            verdict: action.payload,
            roomsInfoSuccess: state.rooms <= 0 ? false : true,
         }
      case ERROR:
         return{
            ...state,
            error: !action.payload ? false : true,
            errorInfo: action.payload,
         } 
      }
   }
   


export default availableReducer;