import employee from "../model/employee.js"

export const adddata = async(req,res)=>{
    console.log(req.body)
    const {name,age,designation,salary} = req.body //destructuring
    try {
         const exist = await

         employee.findOne({Name:name})
         if(exist)
         {
            res.status(401).json({message:"employee already exist"})
         }
         const newemployee = new employee({Name:name,Age:age,Designation:designation,Salary:salary})
        await newemployee.save()
        res.status(200).json({message:"Data added successfully"})
    } catch (error) {
        res.status(500).json({message:"serever side error"})
        console.log(error)
        
    }

}

export const getdata = async(req,res)=>{
    try{
        const result= await employee.find()
        res.status(200).json({employeedata:result})


    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error)
    }
}

export const deletedata = async(req,res)=>{
    try {
        const id=req.params.id
        const result= await employee.findByIdAndDelete(id)
        if(result)
            {
                res.status(200).json({message:"data deleted successfully"})
            }
        else
        {
            res.status(404).json({message:"data not found"})
        }
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error)
    }
    
}

export const getdatabyid = async(req,res)=>{
    try {
        const id = req.params.id
        const result= await employee.findById(id)
        if (result)
        {
            res.status(200).json({employeedata:result})
        }else{
        res.status(404).json({message:"data not found"})
        }
    } catch (error) {
        res.status(500).json({message:"server side error"})
        console.log(error)
    }
}
export const    editdata = async(req,res)=> {
    console.log(req.body);
    
    try {
        const {name,age,designation,salary} = req.body;
        const id = req.params.id;
        console.log(id);
        
        const result = await employee.updateMany({_id:id},{$set: {Name:name,Age:age,Designation:designation,Salary:salary}})
        console.log(result);
        
        if(result)
        {
            res.status(200).json({message:"data updated successfully"})
        }else{
            res.status(404).json({message:"data not found"})
        }
    } catch (error) {
        res.status(200).json({message:"server side error"})
    }
    
}