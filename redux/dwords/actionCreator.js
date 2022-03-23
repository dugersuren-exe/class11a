import actions from './actions';
import axios from 'axios'
import {notification } from 'antd';

const { dwordsLoading, dwordsSuccess, dwordsError } = actions;

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


const getAllDWords = () => {
  
  return async dispatch => {
    try {
      dispatch(dwordsLoading());
      await axios.get("http://localhost:3000/api/dwords")
      .then(({data}) => {          
        dispatch(dwordsSuccess(data.list))
        
      });
    } catch (err) {
      dispatch(dwordsError(err));
    }

  };
};


const addDWord = (word) => {
  
  return async dispatch => {
    try {
      dispatch(dwordsLoading());
      await axios.post("http://localhost:3000/api/words",word )
      .then(({data}) => { 
        dispatch(getAllDWords());
        // dispatch(wordsSuccess(data))
      });
    } catch (err) {
      dispatch(wordsError(err));
    }

  };
};


const delDWord = (word) => {
  
  return async dispatch => {
    try {
      //console.log("===========>",word,"<================")
      dispatch(dwordsLoading());
      await axios.delete("http://localhost:3000/api/words",{data:word} )
      .then(({data}) => { 
        dispatch(getAllDWords());
        //dispatch(wordsSuccess(data.list))
      });
    } catch (err) {
      dispatch(wordsError(err));
    }

  };
};


const editDWord = (word) => {
  
  return async dispatch => {
    try {
      console.log("===========>",word,"<================")
      dispatch(wordsLoading());
      await axios.put("http://localhost:3000/api/words",{data:word} )
      .then(({data}) => { 
        dispatch(getAllDWords());
        //dispatch(wordsSuccess(data.list))
      });
    } catch (err) {
      dispatch(dwordsError(err));
    }

  };
};


export {getAllDWords, addDWord,editDWord , delDWord};

