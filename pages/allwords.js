

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWords , addWord} from "../redux/words/actionCreator";
import actions from "../redux/words/actions";

import { Table, Tag, Space,Button, Modal } from 'antd';

//Layouts
import MainLayout from '../components/layouts/MainLayout'






function allwords() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.words.list);
  const [word, setWord]=useState({"eng":"hi","mon":"hi","comm":"hi"});
  const [isShowModalAdd, setIsShowModalAdd]=useState(false);

   
  //Functions
    const showModalFunc=(record)=>{
        setWord(record);
        setIsShowModalAdd(true);
    }


    useEffect(() => {
      dispatch(getAllWords());
    }, []);

    const columns = [
        {
          title: 'English',
          dataIndex: 'eng',
          key: 'eng'
        },
        {
          title: 'Монгол',
          dataIndex: 'mon',
          key: 'mon',
        },
        {
          title: 'Comment',
          dataIndex: 'comm',
          key: 'comm',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
            <Button onClick={()=>{showModalFunc(record)}}>Edit</Button>
            <Button>Delete</Button>
            </Space>
          ),
        },
      ];
    


  return (
    <MainLayout>
    <Space>
    <Button onClick={()=>{dispatch(addWord(word))}}>Үг нэмэх</Button>
    </Space>
    <Table columns={columns} dataSource={data} />
    <Modal visible={isShowModalAdd}>
    
    </Modal>

    <Modal>
    
    </Modal>
    </MainLayout>
  )
}

export default allwords