const initialState = {
	rooms: [],
	loading: true,
	guestInfo: {},
	errorInfo: {},
}

const GET_GUEST_INFO = "GET_GUESTS_INFO"
const GET_ROOMS_INFO = "GET_ROOMS_INFO"
const LOADING = "LOADING"
const ERROR = "ERROR"

export {
   initialState,
   GET_GUEST_INFO,
   GET_ROOMS_INFO,
   LOADING,
   ERROR,
}