const ObjectId = require('mongodb').ObjectId;
import { connectToDatabase }  from '../../../utils/connectDb';



export default async (req, res) => {
    const { method } = req
  
    switch (method) {
      case 'GET':
        try {
          //const result= await auth(req,res)
          //console.log({result})
          
          let { db } = await connectToDatabase();
          let datas = await db
          .collection('category')
          .find({})
          .sort({ published: -1 })
          .toArray();
            return res.json({
                list: JSON.parse(JSON.stringify(datas)),
                success: true,
            });         
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      case 'POST':
        try {
          //const result= await auth(req,res)
          //console.log({result})
          let { db } = await connectToDatabase();
          const d = await db.collection('category').insertOne(req.body);
        
        return res.json({
            message: d,
            success: true,
        });
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }
  