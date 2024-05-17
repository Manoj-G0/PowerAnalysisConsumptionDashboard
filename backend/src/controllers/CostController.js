const Cost = require("../models/Cost")
const addCost = async (req, res, next) => {
   
  const { date, time, units, comments } = req.body;
    // console.log(req.body)
  try {
    // Create a new instance of the Cost model
    const cost = new Cost({
      date,
      time,
      units,
      comments
    });

    // Save the cost document to the database
    await cost.save();

    // Send a success response with the saved cost object
    return res.status(201).json({ cost });
  } catch (err) {
    // If an error occurs, pass it to the error handling middleware
    return next(err);
  }
};

exports.addCost = addCost;
const costGet  = async(req, res, next) =>{
  let costdata
  try{
      costdata = await Cost.find();
      console.log(costdata)
  }
  catch(err){
      console.log(costdata)
      return res.status(400).json("No Data");
  }
  console.log(costdata)
  return res.status(200).json(costdata)
  
}
exports.costGet = costGet;

const deleteCost = async(req,res,next)=>{
    const {id} = req.params;
    console.log(id);
  try{
    const costDelete = await Cost.findOneAndDelete({_id:id});
    if(!costDelete){
      return res.status(400).json({
        success:"false",
        message:"Record not found",
      });
    }
  }
  catch(err){
    return res.status(401).json({
      success:false,
      message:"Internal Server Error",
    })
    console.log(err);
  }
  // const user = await Cost.fingById(date)
  return res.status(200).json("success");
}

exports.deleteCost = deleteCost;

const updateCost = async(req,res,next)=>{
    try{
      const {id} = req.params;

      const {date,time,units, comments} = req.body;
      const costElement = await Cost.findById({_id:id});
      if(!costElement){
        return res.status(400).json({
          success:false,
          message:"transaction not found",
        })
      }
      if(date){
        costElement.date = date;
      }
      if(time){
        costElement.time=time;
      }
      if(units){
        costElement.units=units;
      }
      if(comments){
        costElement.comments = comments;
      }
      await costElement.save();
    }
    catch(err){
      return res.status(401).json({
        success:false,
        message:err.message,
      })
    }
}
exports.updateCost=updateCost;
