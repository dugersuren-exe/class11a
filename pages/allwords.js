import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWords , addWord, delWord,editWord} from "../redux/words/actionCreator";
import { getAllDWords , addDWord, delDWord,editDWord} from "../redux/dwords/actionCreator";
import actions from "../redux/words/actions";

import { Form, Input,Table, Tag, Space,Button, Modal } from 'antd';

//Layouts
import MainLayout from '../components/layouts/MainLayout';



function allwords() {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.words.list);
  const [word, setWord]=useState({_id:"","eng":"hi","mon":"hi","comm":"hi"});
  const [isShowModalAdd, setIsShowModalAdd]=useState(false); //Нэмэх, засах Modal цонхыг харуулах эсэх
  const [isShowModalDel, setIsShowModalDel]=useState(false);//Устгах Modal цонхыг харуулах эсэх
  const [isEdit,setIsEdit]=useState(false);

   
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
        title: '№',
        dataIndex: '_id',
        key: '_id'
      },
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
            <Button onClick={()=>{setIsEdit(true); onFillShow(record)}}>Edit</Button>
            <Button onClick={()=>{onDelWord(record)}}>Delete</Button>
            </Space>
          ),
        },
      ];
    //Functions 
      const onFinish = (values) => {
        console.log(values);
        if(isEdit){
          dispatch(editWord(values));
        }else{
          dispatch(addWord(values));
        }
        console.log(values);
        setIsShowModalAdd(false);
      };
    
      const onDelWord = (w) => {
        // form.resetFields();
console.log(w)
setWord(w)
        form.setFieldsValue({
          id:w._id,
          eng: w.eng,
          mon: w.mon,
          comm:w.comm
        });
        setIsShowModalDel(true);

      };
    
      const onFillShow = (w) => {
        setWord({
          _id: w._id,
          eng: w.eng,
          mon: w.mon,
          comm:w.comm
        });
        form.setFieldsValue({
          _id: w._id,
          eng: w.eng,
          mon: w.mon,
          comm:w.comm
        });
        setIsShowModalAdd(true);
      };

  return (
    <MainLayout>
    <Space>
    {JSON.stringify(word)}
    </Space>
    <Space>
    <Button onClick={()=>{dispatch(getAllDWords());}}>Ugs</Button>
    <Button onClick={()=>{setIsEdit(false); onFillShow({eng:'',mon:'',comm:''})}}>Үг нэмэх</Button>
    </Space>
    <Table columns={columns} dataSource={data} />
    <Modal visible={isShowModalAdd} 
            onOk={()=>setIsShowModalAdd(false)} 
            onCancel={()=>setIsShowModalAdd(false)}
            title={isEdit?"Засах":"Нэмэх"}
            footer={null} // Модал цонхны товчыг нуух
  >    
  {JSON.stringify(word)}
    <Form form={form} name="control-hooks" 
        onFinish={onFinish}>
        
        
        <Form.Item
        name="_id">
        <Input hidden/>
        </Form.Item>




      <Form.Item
        name="eng"
        label="English"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="mon"
        label="Mongol"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Input />
      </Form.Item>
      <Form.Item
        name="comm"
        label="Comment"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Input />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Хадгалах
        </Button>
        <Button htmlType="button" 
            onClick={()=>{form.resetFields()}}
        >
          Цэвэрлэх
        </Button>
      </Form.Item>
    </Form>
    </Modal>

    <Modal 
            visible={isShowModalDel} 
            title="Үгийг устгах"
            onOk={()=>setIsShowModalDel(false)} 
            onCancel={()=>setIsShowModalDel(false)}
            footer={null}
            >
    <div>
    {JSON.stringify(word)}
    </div>


      <Form form={form} name="control-hooks"
       onFinish={()=>{dispatch(delWord(word));
                      setIsShowModalDel(false);}}>

      <Form.Item
      name="_id">
      <Input hidden/>
      </Form.Item>


      <Form.Item
        name="eng"
        label="English"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="mon"
        label="Mongol"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Input />
      </Form.Item>
      <Form.Item
        name="comm"
        label="Comment"
        rules={[
          {
            required: true,
          },
        ]}
      >
      <Input />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={()=>{form.resetFields()}}>
          Reset
        </Button>
      </Form.Item>
    </Form>

    </Modal>
    </MainLayout>
  )
}

export default allwords