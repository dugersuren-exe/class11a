const actions = {
  WORDS_LOADING: 'WORDS_LOADING',
  WORDS_SUCCESS: 'WORDS_SUCCESS',
  WORDS_ERROR: 'WORDS_ERROR',
  WORD_ADD:'WORD_ADD',

  wordsLoading: () => {
    return {
      type: actions.WORDS_LOADING,
    };
  },

  wordsSuccess: data => {
    return {
      type: actions.WORDS_SUCCESS,
      data,
    };
  },

  wordsError: err => {
    return {
      type: actions.WORDS_ERROR,
      err,
    };
  },

  wordAdd: err => {
    return {
      type: actions.WORD_ADD,
      err,
    };
  },
  

};

export default actions;