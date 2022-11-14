import { Formik } from "formik"
import React from "react"
import * as Yup from "yup"
import { motion, SwitchLayoutGroupContext } from "framer-motion"
import Swal from 'sweetalert2';


const Signup = () => {
    // step-1 : create function for submission
    const userSubmit = async (formdata, { resetForm, setSubmitting }) => {
        setSubmitting(true)

        // setTimeout(() => {
        console.log(formdata)

        //for sending request to backend
        //1.url
        //2.request method
        //3.data
        //4.data format-json
        const response = await fetch('http://localhost:5000/user/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //reading response status
        console.log(response.status);
        if(response.status===200){
            Swal.fire({
                icon:'sucess',
                title:'Registered',
                text:'User registered sucessfully'
            })
        }
        setSubmitting(false);
        resetForm();
    }

        const myValidation = Yup.object().shape({
            username: Yup.string().min(3, "Too short").max(10, "Too Long").required("Username Required"),
        })

        return (
            <div
                className="col-md-6 mx-auto pt-5">
                <div className="card">
                    <div className="card-body">
                        <h3 className="text-center">Signup Here</h3>
                        <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={userSubmit} validationSchema={myValidation}>
                            {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
                                <form onSubmit={handleSubmit}>
                                    <label>Username</label>
                                    <input type="text" className="form-control" name="username" value={values.username} onChange={handleChange} />
                                    <p className="mb-3 message">{errors.username}</p>

                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" value={values.email} onChange={handleChange} />

                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" value={values.password} onChange={handleChange} />

                                    <button disabled={isSubmitting} type="submit" className="btn btn-primary mt-5">
                                        {isSubmitting ? <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : ""}
                                        &nbsp;&nbsp;Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
    export default Signup