const Cost = require("../models/Cost");
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
module.exports=costGet