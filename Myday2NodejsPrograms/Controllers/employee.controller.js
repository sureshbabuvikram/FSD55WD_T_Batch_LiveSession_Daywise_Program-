const employees=[
    {id:1, name:"suresh",designation:"FSD"},
    {id:2, name:"sathik",designation:"Python Dev"},
    {id:3, name:"rithik",designation:"Frontend dev"},
    {id:4, name:"renu",designation:"backend dev"}
]


//get call
export const getEmployeeDetail =(req,res)=>{
    res.status(200).json({data:employees})
}
//get call by id
export const getEmployeeDetailById=(req,res)=>{
    const empId = req.params.id;
    console.log(("empId",empId));

    const empDetails= employees.find(emp=>emp.id == empId)
     if(!empDetails){
        return res.status(404).json({message:"Detail not fount in the particular empid"})
     }
     res.status(200).json({message:"emp details", data:empDetails})
     
}



//post call
export const createEmpDetail= (req,res)=>{
    const {name, designation}  =req.body
    const newEmployee= {
        id: employees.length+1,
        name:name ,
        designation:designation
    }
    employees.push(newEmployee)

    res.status(200).json({message:"emp added successfully", data:newEmployee})
}

//Put call
export const editEmployeeDetail= (req,res)=>{
    const empID= req.params.id;
    const {name, designation} = req.body;
    const index= employees.findIndex(emp=>emp.id==empID) // 5 -   0 1 2 3  -1
    if(index === -1){
        return res.status(404).json({message:"emp detail not found"})
    }
    employees[index].name=name;
    employees[index].designation= designation;

    res.status(200).json({message:"updated successfully", data:employees[index]})
} 

//delete call
export const deleteEmpDetailById= (req, res)=>{
    const empId= req.params.id;
    const index= employees.findIndex(emp=>emp.id==empId)
    if(index === -1){
        return res.status(404).json({message:"emp not found"})
    }
    employees.splice(index, 1)
    res.status(200).json({message:"deleted successfully"})
}
