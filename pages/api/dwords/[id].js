const ObjectId = require('mongodb').ObjectId;
import { connectToDatabase } from '../../../utils/connectDb';


export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    
    case 'GET':
      try {
        let { db } = await connectToDatabase();
        //console.log(" ----------- id --------------", ObjectId(id),req.body)
        const d=await db.collection('dwords')
        .findOne({_id:ObjectId(id)});

        return res.json({
            data: d,
            success: true,
        });


      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT':
      try {
        let { db } = await connectToDatabase();
//console.log(" ----------- id --------------", ObjectId(id),req.body)
        await db.collection('dwords').updateOne(
            {
                _id: new ObjectId(id),
            },
            { $set:req.body} 
        );
        return res.json({
            message: 'Post updated successfully',
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
