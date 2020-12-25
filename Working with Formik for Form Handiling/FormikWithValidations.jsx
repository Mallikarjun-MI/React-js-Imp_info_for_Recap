import React from 'react';
import {useFormik} from 'formik';
import * as yup from 'yup';


const validateEmployeedata = empdata =>{
    const errors = {};

    if(!empdata.NAME){
        errors.NAME = 'Please Enter Employee Name';
    }
    else if (empdata.NAME.length>20){
        errors.NAME = 'Employee Name Should Not Exists 20 Characters';
    }

    return errors;
}

const FormikValidations = ()=> {
    const formik = useFormik({
        initialValues:{
            ID:'',
            NAME:'',
            Email:'',
            Salary:''
        },
        //validate:validateEmployeedata,/* will be Used for Formik library */
        /*validationSchema is using( with the Help of YUP Module/Library) insted of formik Library */
        validationSchema :yup.object({
            NAME :yup.string().max(20,'Employee Name Should Not Exists 20 Characters..YUP Error').required('Please Enter Employee Name..YUP Error')
        }),
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }

    })
        return(
            <div class="card p-3">
                <form onSubmit={formik.handleSubmit}>
                    <h3>Form with Formik Validations</h3>
                    <div>
                        <label className="form-label">ID No :</label>
                        <input className="form-control w-50" name="ID"  {...formik.getFieldProps("ID")}/> {/* Instead of value={} * onChange={} we can Use  formik */} 
                    </div>
                    <div>
                        <label className="form-label" >Name :</label>
                        <input type="text"  className="form-control w-50" name="NAME"  value={formik.values.NAME} onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>  

                        {formik.touched.NAME && formik.errors.NAME ? <span style={{color:'red'}}>{formik.errors.NAME}</span>: null}
                    </div>
                    <div>
                        <label className="form-label" >Email :</label>
                        <input type="email" className="form-control w-50" name="Email"  value={formik.values.Email} onChange={formik.handleChange}/>   
                    </div>
                    <div>
                        <label className="form-label" >Salary :</label>
                        <input type="number" className="form-control w-50" name="Salary"  value={formik.values.Salary} onChange={formik.handleChange}/>   
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Create Employee</button>
                </form>
            </div>
        )
}

export default FormikValidations;