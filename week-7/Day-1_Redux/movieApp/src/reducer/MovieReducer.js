const initialState = {
  popular: [],
  top_rated: [],
  now_playing: [],
  detailMovie: {},
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        ...state,
        popular: action.payload,
        top_rated: action.payload,
        now_playing: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default MovieReducer;
