import { NextResponse } from "next/server"
import { URI } from "@/lib/db";
import mongoose, { connect } from "mongoose";

import { CommentModel } from "@/lib/Model/Scheema";



export async function GET(req, res) {
 let data = [];
 let success = true;
 const pipeline = [
  
  {
    $sort: {
      date: -1
    }
  },
  {
    $group: {
      _id: null,
      comments: {
        $push: {
          name: '$name',
          feedback: '$feedback',
          rating:'$rating'
        }
      }
    }
  },
  {
    $unwind: '$comments'
  },
  {
    $limit: 3
  },
  {
    $replaceRoot: {
      newRoot: '$comments'
    }
  }
];

 try {

    
    await mongoose.connect("mongodb://localhost:27017/Spa");
    // console.log("DB Connected")

    try {
      data = await CommentModel.aggregate(pipeline);
      // console.log("aggregate ok");
      
    }
    catch{
      console.log("Aggregate not OK");
    }
    
    
 } catch (error) {
    console.error("ERROR IN CONNECTED TO DB");
    data = { result: 'error' };
    success = false;
 }

 return NextResponse.json({ result: data, success });
}

export async function POST(req,res){
    const payload= await req.json();
    await mongoose.connect("mongodb://localhost:27017/Spa");

   let PostData=new CommentModel(payload);

   const result = await PostData.save();

   return NextResponse.json({result,success:true})

}

