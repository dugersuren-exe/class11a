const ObjectId = require('mongodb').ObjectId;
import { connectToDatabase }  from '../../../utils/connectDb';



export default async (req, res) => {
    const { method } = req
  
    switch (method) {
      case 'GET':
        try {          
          let { db } = await connectToDatabase();
          let datas = await db
          .collection('dwords')
          .find({})
          .sort({ eng: 1 })
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
          console.log("----test--- ", req.body);
          let { db } = await connectToDatabase();
          const d = await db.collection('dwords')
                    .insertOne(req.body);        
        return res.json({
            data: d,
            success: true,
        });
        } catch (error) {
          res.status(400).json({message:"Алдаа гарлаа", success: false })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  }
  