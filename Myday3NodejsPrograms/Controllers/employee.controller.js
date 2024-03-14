import Employee from "../Models/employee.schema.js";

export const createEmployee=async (req, res)=>{

    try {
        // const {} = req.body
        const newEmployee= new Employee(req.body)
        await newEmployee.save();

        res.status(200).json({message:"emp added successfully", data:[newEmployee]})
        
    } catch (error) {
        console.log(error);
    }
}

export const getEmployeeDetail=async(req, res)=>{

    try {
        const employee = await Employee.find()
        res.status(200).json({message:"data fetched successfully",data:employee})
    } catch (error) {
        console.log(error);
    }
}

export const getEmployeeDetailById=async(req, res)=>{

    try {
        const empId= req.params.id
        const employee = await Employee.findById(empId)
        if(!employee){
            return res.status(404).json({message:"Employee not found"})
        }
        res.status(200).json({data:employee})
    } catch (error) {
        console.log(error);
    }
}


export const updateEmployeeById = async(req, res)=>{
    try {
        const {email}= req.params
        console.log("email",email);
        const{firstName, lastName, designation} = req.body

        const result = await Employee.updateOne({email},{firstName,lastName, designation})
        console.log(result);
        if(result.matchedCount === 0){
            return res.status(400).json({message:"emp not found"})
        }
        const updateEmp = await Employee.find({email})
        res.status(200).json({data:updateEmp})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}