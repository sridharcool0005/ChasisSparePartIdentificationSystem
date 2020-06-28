const sparePartsModel= require('../models/sparePartsModel');

module.exports.createSpareParts= async (req, res) => {
    const {year,model,sparePart} = req.body;
  
    const item = new sparePartsModel({
        year: year,
        model: model,
        sparePart: sparePart,
        location: 'mumbai'
    });
  
    return await item.save()
      .then((result) => {
        res.status(200).send({status: 'sucess',message:'sparePart added successfully'});
      })
      .catch((err) => {
        console.log('err in uploading', err);
        res.status(400).send({status: 'error',message:err.message})
      });
  };
  

  module.exports.getSpareParts=async (req,res)=>{
    const {model,year}=req.body;
    query={
        model:model,
        year:year
    }
    await sparePartsModel.find(query,{_v:0}).then((result)=>{
      if (!result.length)  {
        res.status(200).send({status:'false' ,message: 'no data Found' });
      }else{
        res.status(200).send(result)
      }
        
    }).catch((err)=>{
        res.status(400).send(err);
    })
  }


  module.exports.getLocation=async (req,res)=>{
    const {location}=req.body;
    await sparePartsModel.find({location:location},{location:1}).then((result)=>{
      if (!result.length)  {
        res.status(200).send({status:'false' ,message: 'location Not Found' });
        return;
      }else{
        res.status(200).send({result:result,message:'location added successfully'})
      }
      
    }).catch((err)=>{
      res.status(400).status({status:'error',message:'location not found'});
    })
  }