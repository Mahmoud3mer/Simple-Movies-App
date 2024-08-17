import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './signup.css'
import Title from "../../components/title";


function SignUp() {

    const [userData, setUserData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors , setErrors] = useState({
        nameErr: "",
        usernameErr: "",
        emailErr: "",
        passwordErr: "",
        confirmPasswordErr: ""
    })

    const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ig
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/ig

    const changeData = (event) =>{
        if (event.target.name == 'name') {
            setUserData({
                ...userData,
                name: event.target.value
            })

            setErrors({
                ...errors,
                nameErr: event.target.value == ''&& "Name is requerd."
            })
        }else if (event.target.name == 'email') {
            setUserData({
                ...userData,
                email: event.target.value
            })

            setErrors({
                ...errors,
                emailErr: event.target.value == ''? "Email is requerd." : !emailRegEx.test(event.target.value) && "Email invalid must be xxx@xxxx.com"
            })
        }else if (event.target.name == 'username') {
            setUserData({
                ...userData,
                username: event.target.value
            })

            setErrors({
                ...errors,
                usernameErr: event.target.value == ''? "password is requerd." : event.target.value.includes(" ") && "Must have no spaces!"
            })
        }else if (event.target.name == 'password') {
            setUserData({
                ...userData,
                password: event.target.value
            })

            setErrors({
                ...errors,
                passwordErr: event.target.value == ''? "Username is requerd." : !passwordRegEx.test(event.target.value) && "Password invalid!"
            })
        }else if (event.target.name == 'confirm password') {
            setUserData({
                ...userData,
                confirmPassword: event.target.value
            })

            setErrors({
                ...errors,
                confirmPasswordErr: event.target.value == ''? "Username is requerd." : event.target.value !== userData.password && "Confirm password don't matched with password!"
            })
        }
    }

    //! show and hide password
    const [showPassword , setShowPassword] = useState(false);
    const [showConfirmPassword , setShowConfirmPassword] = useState(false);

    return (
        <>
            <div className="container p-5">
                
                <form className="border rounded-4 p-5">
                    <Title title={"Register"} textColor={"text-white"} textPosition={"text-center"}/><hr/>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input 
                        type="text" 
                        className={`form-control ${errors.nameErr? "border-danger":"border-success"}`} 
                        id="name" 
                        name="name"
                        onChange={(ev) => changeData(ev)}
                        />
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.nameErr}</p>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" 
                        className={`form-control ${errors.emailErr? "border-danger":"border-success"}`}
                        id="exampleInputEmail1" 
                        name="email"
                        onChange={(ev) => changeData(ev)}
                        />
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.emailErr}</p>
                    </div>

                    <div className="mb-3">
                        <label for="userName" className="form-label">User Name</label>
                        <input type="text" 
                        className={`form-control ${errors.usernameErr? "border-danger":"border-success"}`} 
                        id="userName" 
                        name="username"
                        onChange={(ev) => changeData(ev)}
                        />
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.usernameErr}</p>
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <div className="position-relative">
                            <input 
                            type = {showPassword? "text" : "password"}
                            className={`form-control ${errors.passwordErr? "border-danger":"border-success"}`} 
                            id="exampleInputPassword1"
                            name="password"
                            onChange={(ev) => changeData(ev)}
                            />
                            <FontAwesomeIcon icon={showPassword? faEyeSlash : faEye} className="myPassIcon" onClick={() => setShowPassword(!showPassword)}/>
                        </div>
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.passwordErr}</p>
                    </div>
                    {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
                    <div className="mb-3">
                        <label for="ConfirmPassword" className="form-label">Confirm Password</label>
                        <div className="position-relative">
                            <input 
                            type = {showConfirmPassword? "text" : "password"} 
                            className={`form-control ${errors.confirmPasswordErr? "border-danger":"border-success"}`}
                            id="ConfirmPassword"
                            name="confirm password"
                            onChange={(ev) => changeData(ev)}
                            />
                            <FontAwesomeIcon icon={showConfirmPassword? faEyeSlash : faEye} className="myPassIcon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}/>
                        </div>
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.confirmPasswordErr}</p>
                    </div>

                    <button 
                    type="submit" 
                    disabled={errors.nameErr || errors.usernameErr || errors.emailErr || errors.passwordErr || errors.confirmPasswordErr} 
                    className="btn btn-success"
                    >Register</button>
                </form>
            </div>
        </>
    );

}

export default SignUp;