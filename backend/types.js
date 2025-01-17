const { z } = require("zod")


const EmployeeSchema = z.object({
    name: z.string().min(1, "Name is required."),
    age: z.number().positive("Age must be a positive number."),
    citizenship_status: z.string().min(1, "Citizenship status is required."),
    gross_salary: z.number().nonnegative("Gross salary must be a non-negative number."),
  });

module.exports={
    EmployeeSchema
}