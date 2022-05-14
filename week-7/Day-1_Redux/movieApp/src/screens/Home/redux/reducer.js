const initialState = {
  listTab: ['Popular', 'Top Rated', 'Now Playing'],
  popular: [],
  top_rated: [],
  now_playing: [],
  detailMovie: {},
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        ...state,
        popular: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default HomeReducer;
