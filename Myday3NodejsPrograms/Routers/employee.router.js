import express from 'express'
import { createEmployee, getEmployeeDetail, getEmployeeDetailById, updateEmployeeById } from '../Controllers/employee.controller.js';

const router= express.Router()

router.post('/create-emp', createEmployee)  //http://localhost:5000/api/create-emp
router.get('/get-empdetails', getEmployeeDetail) //http://localhost:5000/api/get-empdetails
router.get('/getempdetails/:id', getEmployeeDetailById) //http://localhost:5000/api/getempdetails/:id
//router.put('/edit-emp/:id', updateEmployeeById)//http://localhost:5000/api/edit-emp/:id
router.put('/edit-emp/:email', updateEmployeeById)//http://localhost:5000/api/edit-emp/:id

export default router;