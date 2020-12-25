import React from 'react';
import {useFormik} from 'formik';

const FormWithFormik = ()=> {
    const formik = useFormik({
        initialValues:{
            ID:'',
            NAME:''
        },
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }

    })
        return(
            <div class="card p-3">
                <form onSubmit={formik.handleSubmit}>
                    <h3>Form with Formik Component</h3>
                    <div>
                        <label className="form-label">ID :</label>
                        <input type="number" className="form-control w-50" name="ID"  value={formik.values.ID} onChange={formik.handleChange}/>   
                    </div>
                    <div>
                        <label className="form-label" >Name :</label>
                        <input type="text" className="form-control w-50" name="NAME"  value={formik.values.NAME} onChange={formik.handleChange}/>   
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Create Employee</button>
                </form>
            </div>
        )
}

export default FormWithFormik;