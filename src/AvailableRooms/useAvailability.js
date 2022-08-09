const initialState = {
   guestInfo: {},
   guestInfoSuccess: "To Be Determined...",
	rooms: {},
   roomsInfoSuccess: "To Be Determined...",
	loading: false,
   verdict: "To Be Determined...",
   error: false,
	errorInfo: {},
}

const GET_GUEST_INFO = "GET_GUESTS_INFO"
const GET_ROOMS_INFO = "GET_ROOMS_INFO"
const LOADING = "LOADING"
const VERDICT = "VERDICT"
const ERROR = "ERROR"

export {
   initialState,
   GET_GUEST_INFO,
   GET_ROOMS_INFO,
   LOADING,
   ERROR,
   VERDICT,
}