// import { Formik } from "formik";
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import Swal from 'sweetalert2';


// import "./styles.css";

// function Login() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const loginSubmit = async (formdata, { resetForm }) => {
//     console.log(formdata)
//     // resetForm()

//     const response = await fetch('http://localhost:5000/user/authenticate', {
//       method: 'POST',
//       body: JSON.stringify(formdata),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.status === 200) {
//       Swal.fire({
//         icon: 'success',
//         title: 'Success',
//         text: 'Loggedin Successfully'
//       })
//     } else if (response.status === 401) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Failed',
//         text: 'Loggedin Failed'
//       })
//     } else {
//       console.log('unknown error occured');
//     }

//   }

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };


//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">

//       <Formik initialValues={{ email: "", password: "" }} onSubmit={loginSubmit}>
//         {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
//           <form onSubmit={handleSubmit}>
//             <div className="input-container">
//               <label>Username </label>
//               <input type="text" name="uname" required />
//               {renderErrorMessage("uname")}
//             </div>
//             <div className="input-container">
//               <label>Password </label>
//               <input type="password" name="pass" required />
//               {renderErrorMessage("pass")}
//             </div>
//             <div className="button-container">
//               <input type="submit" />
//             </div>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );

//   return (
//     <div className="app">
//       <div className="login-form">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
//       </div>
//     </div>
//   );
// }

// export default Login;