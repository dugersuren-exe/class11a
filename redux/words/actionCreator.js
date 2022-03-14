import actions from './actions';
import axios from 'axios'
import {notification } from 'antd';

const { wordsLoading, wordsSuccess, wordsError } = actions;

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    className: 'custom-class',
    style: {
      width: 600,
    },
  });
};


const getAllWords = () => {
  
  return async dispatch => {
    try {
      dispatch(wordsLoading());
      await axios.get("http://localhost:3000/api/words").then(({data}) => {          
        dispatch(wordsSuccess(data.list))
        
      });
    } catch (err) {
      dispatch(wordsError(err));
    }

  };
};


const addWord = (word) => {
  
  return async dispatch => {
    try {
      dispatch(wordsLoading());
      await axios.post("http://localhost:3000/api/words",word ).then(({data}) => { 
        dispatch(getAllWords());
        // dispatch(wordsSuccess(data))
      });
    } catch (err) {
      dispatch(wordsError(err));
    }

  };
};



export {getAllWords, addWord };

