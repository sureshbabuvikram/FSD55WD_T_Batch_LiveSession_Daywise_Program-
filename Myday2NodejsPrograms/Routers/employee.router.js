import express from 'express';
import { createEmpDetail, deleteEmpDetailById, editEmployeeDetail, getEmployeeDetail, getEmployeeDetailById } from '../Controllers/employee.controller.js';

const router= express.Router()

router.get('/get-empdetails', getEmployeeDetail) 
router.get('/getempdetails/:id', getEmployeeDetailById)
router.post('/create-emp', createEmpDetail)
router.put('/edit/:id', editEmployeeDetail)
router.delete('/delete/:id', deleteEmpDetailById)


export default router;