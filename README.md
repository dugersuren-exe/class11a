<details open>
<summary>1. Шинээр app үүсгэх</summary>

Commandline эсвэл git bash  дээр дараах кодыг бичиж app-ийг үүсгэнэ.

**Жишээ нь:**
```
npx create-next-app mem
```
Үүсгэсэн файлын Visual studio code-ийн тусламжтайгаар нээх ёстой.

Ингэхдээд дараах зүйлийг анхаарах хэрэгтэй.
Visual studio code -ийн  File->Open Folder...(Ctrl+K, Ctrl+O) командын тусламжтайгаарр уг файлыг нээж үүссэн project-ийн үндсэн фолдерийг зааж өгнө. Хэрвээ үндсэн фолдерын гадна талын, эсвэл дотор талын фолдер нээсэн тохиолдолд уг project нь ажиллахгүй.
</details>

---

<details>
<summary>2. Нэмэлт сангуудаа суулгах</summary>
a) MongoDb -тэй ажиллах үүрэгтэй санг суулгах

Энэ сангийн тусламжтайгаар MongoDB -ийн бааз руу хандах, өгөгдөл нэмэх, засах, устгах гэх мэт үйлдлүүдийг хийх боломж үүсэнэ

```
npm i mongodb

```
б) Redux -тай холбоотой сан

Энэ сангийн тусламжтайгаар өгөгдлийг client орчинд нь удирдах боломжийг олгодог. 

Жишээ нь: 
* Өгөгдлийн баазын серверээс өгөглийг авчрах үүрэгтэй redux-thunk
* redux -ийн үндсэн үйлдлүүдийг удирдах үүрэгтэй redux сан
* react болон redux-ийг холбох үүрэгтэй react-redux сан
* redux -ийн өгөгдлүүдийг хадгалах, тэдгээр хадгалагдсан мэдээллийг компонентуудад дамжуулах үүрэгтэй next-redux-wrapper
* redux-ийг өгөгдөл, тэдгээрийн өөрчлөлтийг харах үүрэгтэй redux-devtools-extension
* Веб browser дээр өгөгдлийн хадгалах, удирдан зохион байгуулах үүрэгтэй redux-persist
* redux дээр хийгдэж байгаа бүхий л үйлдлүүдийг харах хянах боломжийг олгох үүрэгтэй redux-logger
* .................

```
npm i react-redux next-redux-wrapper redux redux-devtools-extension redux-logger redux-persist redux-thunk
```

в) Ant.design -тай холбоотой сан

front end-ийг загвар түүнийг хялбар аргаар зохион байгуулах үүрэг бүхий  ant.design -ийн сан
```
npm i antd @ant-design/icons
```
г) axios-ийг суулгах

веб сайтын тусламжтайгаар дурын API-ийг дуудан ажиллуулах үүрэгтэй өөрөөр хэлбэл POSTMAN-ийн үүргийг гүйцэтгэх боломжийг олгодог.
```
npm i axios
```

</details>

---

<details>
<summary> Project-ийг шалгаж үзэх </summary>

Жишээ нь:

**package.json** файлын dependencies хэсгээс нийт суусан сангуудын жагсаалтыг харах боломжтой байдаг.  

```
{
  "name": "mem",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@ant-design/icons": "^4.7.0",
    "antd": "^4.19.2",
    "axios": "^0.26.1",
    "mongodb": "^4.4.1",
    "next": "12.1.0",
    "next-redux-wrapper": "^7.0.5",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-redux": "^7.2.6",
    "redux": "^4.1.2",
    "redux-devtools-extension": "^2.13.9",
    "redux-logger": "^3.0.6",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.4.1"
  },
  "devDependencies": {
    "eslint": "8.11.0",
    "eslint-config-next": "12.1.0"
  }
}

```

Мөн **scripts** хэсгээ нь тухайн прожектийг ажиллуулах командуудыг харах боломжтой байдаг.

* **npm run dev** -ийн тусламжтайгаар прожектийг хөгжүүлэгчид зориулан ажиллуулдаг.
* **npm run build** -ийн тусламжтайгаар прожектийг production  горим руу хөрвүүлэн шахах үүрэгтэй
* **npm run start** -ийн тусламжтайгаар прожектийг production  горим руу хөрвүүлсэн файлыг сервер дээр дуудаж ажиллуулах үүрэгтэй
* **npm run lint** -ийн тусламжтайгаар прожектийг алдааг шалгах

**Санамж**

Прожектод өөрчлөлт оруулах бүрдээ жишээ нь **npm run dev** командыг өгч алдаа гарсан эсэхийг шалгаж байх хэрэгтэй.



</details>



---

<details>
<summary> 4. .env -файлыг үүсгэх </summary>

Үндсэн фолдер дотор .env.local файлыг үүсгэж дотор нь дараах хувьсагчдыг үүсгэж утга олгоно.

* MONGO_SRV - MongoDB-ийн холболтын мөр connectionstting-ийг
* DB_NAME - баазын нэрийг

**Жишээ нь:**
```
MONGODB_URI=mongodb+srv://mem:Ab123456+@cluster0.l27e0.mongodb.net/MemDb?retryWrites=true&w=majority
DB_NAME=MemDb

```
</details>

---



<details>
<summary> 5. MongoDb -тэй холбогдох файл </summary>

Үндсэн фолдер дотор utils/connectDb.js файл үүсгэнэ.

```
utils/connectDb.js
```

**Файлын доторх агуулга:**
```

import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}


```

</details>

---

<details>
<summary> 6. API-ийг үүсгэх </summary>
Жишээ нь:



pages/api фолдер дотор 
   * words.js

**words.js**

```
const { connectToDatabase } = require('../../utils/connectDb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getPosts(req, res);
        }

        case 'POST': {
            return addPost(req, res);
        }

        case 'PUT': {
            return updatePost(req, res);
        }

        case 'DELETE': {
            return deletePost(req, res);
        }
    }
}

// Getting all posts.
async function getPosts(req, res) {
    try {
        let { db } = await connectToDatabase();
        let words = await db
            .collection('words')
            .find({})
            .sort({ published: -1 })
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(words)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Adding a new post
async function addPost(req, res) {
    try {
        let { db } = await connectToDatabase();
        console.log("hi----->",req.body);
        await db.collection('words').insertOne(req.body);
        
        return res.json({
            message: 'Post added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// Updating a post
async function updatePost(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('words').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'Post updated successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).meзүssage,
            success: false,
        });
    }
}

// deleting a post
async function deletePost(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('words').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'Post deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}



```



</details>

---

<details>
<summary> API -ийг тестлэх </summary>

Тухайн сайт нь өгөглийн баазтай зөв холбосон бол дараах холбоосоор орж шалгах ажиллаж байгаа эсэхийг нь шалгаж үзээрэй.
Үүгийг веб броузерээс бол зөвхөн get-ээр дуудан ажиллуулах боломжтой байдаг. 

Иймд GET, PUT, POST, DELETE method-оор дуудан тест хийж үзэхийн тулд **POSTMAN** програмыг ашиглаж болно.

**Жишээ нь:**

GET method -оор  броузер дээр ажиллуулан шалгаж болдог учир дараах холбоосыг броузерийн addressbar дээр бичиж ажиллуулж үзээрэй:    
```
http://localhost:3000/api/words
```
Үүнийг ажиллуулахад өгөгдлийн бааз дахь өгөгдлүүдийн жагсаалт нь JSON форматаар дуудагдан харагдах боломжтой байдаг.

</details>

---


<details>
<summary> Redux-ийг холбох </summary>

Үндсэн фолдер дотор redux фолдер бүхий агуулгуудыг үүсгэж холбох

**Жишээ нь:**
өмнөх хичээл дээр ашиглаж байсан redux - фолдерийг үндсэн фолдер дотор хуулаад тэндээ тохиргоо хийж болно. Өмнө нь үүсгэсэн redux фолдер нь дараах бүтэцтэй байгаа.

* redux/pupil/actionCreator.js
* redux/pupil/actions.js
* redux/pupil/reducers.js
* redux/rootReducer.js
* redux/store.js

Энд өмнө нь pupil redux нь JSON файлаас өгөгдөл уншиж чаддаг байдлаар зохион байгуулалт хийж байсан.

Үүний холболтыг _app.js файл дотор холбон тохируулж өгөх шаардлагатай байдаг.

Жишээ нь: 
**_app.js файл дотор дараах агуулга орсон байх**
```
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";

import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
} 

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

 

export default wrapper.withRedux(MyApp);
```

</details>

---
<details>
<summary> redux фолдер дотор words-ийг холбож оруулж ирэх </summary>

redux фолдер дотор words фолдерийг үүсгэж дотор нь дараах 3 файлыг үүсгэнэ.
* actions.js
* actionCreator.js
* reducers.js


 
**Жишээ нь:**

actions.js файлын агуулга
```
const actions = {
  WORDS_LOADING: 'WORDS_LOADING',
  WORDS_SUCCESS: 'WORDS_SUCCESS',
  WORDS_ERROR: 'WORDS_ERROR',

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
  

};

export default actions;

```

actionCreator.js
```
import actions from './actions';
import axios from 'axios'

const { wordsLoading, wordsSuccess, wordsError } = actions;


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



export {getAllWords };


```


reducers.js
```
import actions from './actions';

const { WORDS_LOADING, WORDS_SUCCESS, WORDS_ERROR} = actions;

const initialState = {
  list: [],
  loading: false,
  error: null
};

const WordsReducer = (state = initialState, action) => {
    
  const { type, data, err } = action;
  //console.log('==========>',data)   
  switch (type) {
    case WORDS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        
      };
    case WORDS_SUCCESS:   
      return {
        ...state,
        list: data,
        loading: false,
      };     
    case WORDS_ERROR:
      return {
        ...state,
        error: err,
        loading: false

      };
    
    default:
      return state;
  }
};
export default WordsReducer;




```

</details>

---


<details>
<summary> Layout үүсгэх </summary>

Үндсэн фолдер дотор **/components/layouts/MainLayout.js**  -ийг үүсгэх
Энэ нь тухайн хуудасны гадна талаар тойрон байрлах учир энэ хуудсан дэээр голдуу үндсэн цэс болон хуудас бүр дээр байдаг агуулгуудыг оруулах нь тохиромжтой байдаг.

Жишээ нь ant.design-ийн Layout-ийг ашиглан загварчласан жишээг доор үзүүллээ.

**Жишээ нь:**
```
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Children } from 'react';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function MainLayout({children}) {
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
        
        
        {children}
        
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}

export default MainLayout
```
</details>

---



<details>
<summary> pages/allwords.js файлыг үүсгэх </summary>

Энэ нь уг веб броузерийн мөрөн дээр http://localhost:3000/words гэж ажиллуулахад дуудагдахан ажиллах үүрэгтэй
Мөн энэ хуудсыг дуудахад гадна талаараа өмнөх алхамд үүсгэсэн MainLayout -ийг дуудаж ажиллуулахаар тохиргоог давхар хийж үзье.

**Жишээ нь:**
```
import { Table, Tag, Space,Button } from 'antd';

import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pupilJsonDatas } from "../redux/pupil/actionCreator";
import { getAllWords } from "../redux/words/actionCreator";
import actions from "../redux/pupil/actions";


//Layouts
import MainLayout from '../components/layouts/MainLayout'


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
          <a>Edit {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];



function allwords() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.words.list);
  
   
  
    useEffect(() => {
      dispatch(getAllWords());
    }, []);




  return (
    <MainLayout>
    <Space>
    <Button>Үг нэмэх</Button>
    </Space>
    <Table columns={columns} dataSource={data} />
    
    </MainLayout>
  )
}

export default allwords


```
</details>

---

<details>
<summary> API-ийг нэмж оруулна </summary>

pages/api фолдер дотор 

тухайн фолдер дотор шинэ фордер үүсгээд дотор нь index.js, [id].js -ийг үүсгэж өгнө

**Жишээ нь:** дараах файлуудыг үүсгэнэ. өгөгдлийг өөрчлөх
```
pages/api/dwords/index.js
pages/api/dwords/[id].js
```
</details>

---
<details>
<summary> redux-ийг үүсгэх </summary>

redux фолдер дотор өөрийн үүсгэх redux -ийн нэр бүхийх фолдерийг үүсгэнэ


**Жишээ нь:** дараах файлуудыг үүсгэх
```
redux/dwords/actions.js
redux/dwords/reducers.js
redux/dwords/actionCreater.js

```

**Жишээ нь:** actionCreater.js -ийн кодын хэсгийг хавсаргавал
```
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



```



</details>

---
<details>
<summary> Үүсгэсэн redux-ийг rootReducer-тэй холбох </summary>

????

**Жишээ нь:**
```
import  WordsReducer  from "./words/reducers";
import  PupilReducer  from "./pupil/reducers";
import DWordsReducer from "./dwords/reducers";  //Энэ хэсэгт import оор оруулж ирэх

export default combineReducers({
  words: WordsReducer,
  Ugs:DWordsReducer, // Энэ хэсэг нэгтгэх үйлдлийг хийж өгөх
  pupil:PupilReducer,
});

```
</details>

---
<details>
<summary> redux-ийг дуудаж ажиллуулахдаа </summary>

????

**Жишээ нь:**
```
import { getAllDWords } from "../redux/dwords/actionCreator";
...................
...................
<Button onClick={()=>{dispatch(getAllDWords());}}>Ugs</Button>

```
</details>

---
<details>
<summary> ????? </summary>

????

**Жишээ нь:**
```
???
```
</details>

---
<details>
<summary> ????? </summary>

????

**Жишээ нь:**
```
???
```
</details>

---
<details>
<summary> ????? </summary>

????

**Жишээ нь:**
```
???
```
</details>

---


