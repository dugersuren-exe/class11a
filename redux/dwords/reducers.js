import actions from './actions';

const { DWORDS_LOADING, DWORDS_SUCCESS, DWORDS_ERROR} = actions;

const initialState = {
  list: [],
  loading: false,
  error: null
};

const DWordsReducer = (state = initialState, action) => {
    
  const { type, data, err } = action;
  //console.log('==========>',data)   
  switch (type) {
    case DWORDS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        
      };
    case DWORDS_SUCCESS:   
      return {
        ...state,
        list: data,
        loading: false,
      };     
    case DWORDS_ERROR:
      return {
        ...state,
        error: err,
        loading: false

      };
    
    default:
      return state;
  }
};
export default DWordsReducer;

