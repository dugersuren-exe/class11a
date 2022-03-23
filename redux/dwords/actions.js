const actions = {
  DWORDS_LOADING: 'DWORDS_LOADING',
  DWORDS_SUCCESS: 'DWORDS_SUCCESS',
  DWORDS_ERROR: 'DWORDS_ERROR',
  DWORD_ADD:'DWORD_ADD',

  dwordsLoading: () => {
    return {
      type: actions.DWORDS_LOADING,
    };
  },

  dwordsSuccess: data => {
    return {
      type: actions.DWORDS_SUCCESS,
      data,
    };
  },

  dwordsError: err => {
    return {
      type: actions.DWORDS_ERROR,
      err,
    };
  },

  dwordAdd: err => {
    return {
      type: actions.DWORD_ADD,
      err,
    };
  },
  

};

export default actions;