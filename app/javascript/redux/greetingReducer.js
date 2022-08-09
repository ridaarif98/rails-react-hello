import greetingsFromApi from './api';
const GET_GREETINGS_REQUEST = 'RAILS-REACT-HELLO/greetings/GET_REQUEST';
const GET_GREETINGS_SUCCESS = 'RAILS-REACT-HELLO/greetings/GET_SUCCESS';
const GET_GREETINGS_FAILURE = 'RAILS-REACT-HELLO/greetings/GET_FAILURE';
const initialState = {
  loading: false,
  greeting: {},
  error: '',
};

function greetingRequest() {
    return {
      type: GET_GREETINGS_REQUEST,
    };
  }
function greetingSuccess(greeting) {
    return {
      type: GET_GREETINGS_SUCCESS,
      payload: greeting,
    };
  }
function greetingFailure(error) {
    return {
      type: GET_GREETINGS_FAILURE,
      payload: error,
    };
  }

export function getGreeting() {
    return (dispatch) => {
      dispatch(greetingRequest());
      greetingsFromApi()
        .then((greeting) => {
          dispatch(greetingSuccess(greeting));
        })
        .catch((error) => {
          dispatch(greetingFailure(error.message));
        });
    };
}
  
  const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_GREETINGS_REQUEST:
        return { ...state, loading: true };
      case GET_GREETINGS_SUCCESS:
        return {
          loading: false,
          greeting: action.payload,
          error: '',
        };
      case GET_GREETINGS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default greetingReducer;