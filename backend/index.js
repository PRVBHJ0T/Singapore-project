const express = require("express");
const bodyParser = require("body-parser");
const { validate } = require("./middleware");
const { EmployeeSchema } = require("./types");
const app = express()


const port = 3000
app.use(bodyParser.json());

//add a new employee
app.post('/employees',validate(EmployeeSchema),(req,res)=>{
    const {name , age , citizenship_status , gross_salary}= req.body;

    try{
        const result = await pool.query 
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })