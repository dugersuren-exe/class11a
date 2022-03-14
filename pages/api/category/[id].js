const ObjectId = require('mongodb').ObjectId;
import { connectToDatabase } from '../../../utils/connectDb';


export default async (req, res) => {
  const {
    query: { id },
    method
  } = req

  switch (method) {
    
    case 'PUT':
      try {
        let { db } = await connectToDatabase();
console.log(" ----------- id --------------", ObjectId(id),req.body)
        await db.collection('category').updateOne(
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
