import { useEffect, useState } from "react";
import Title from "../../components/title";


function LogIn(props) {

    const [userData, setUserData] = useState({
        email: "aya",
        password: "Developer"
    })

    const [errors, setErrors] = useState({
        emailErr: "",
        passwordErr: ""
    })

    const emailRegEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/ig

    const changeData = (event) => {
        if (event.target.name == 'email') {
            setUserData({
                ...userData,
                email: event.target.value
            })

            setErrors({
                ...errors,
                emailErr: event.target.value.length == 0 ? "Email is required." : !emailRegEx.test(event.target.value) && "Email invalid must be xxx@xxxx.com" 
            })

        }else{
            setUserData({
                ...userData,
                password: event.target.value
            })

            setErrors({
                ...errors,
                passwordErr: event.target.value.length == 0 ? "Password is required." : event.target.value.length < 8 && "Password less than 8 character" 
            })
        }

    }


    // 
    const submitData = (event) =>{
        if (!errors.emailErr || !errors.passwordErr) {
            event.preventDefault()

            props.history.push('/') // Navigate to home page
        }
    }

    return (
        <>
            <div className="container p-5" onSubmit={(ev) => submitData(ev)}>
                <form className="border rounded-4 p-5">
                    <Title title={"Login"} textColor={"text-white"} textPosition={"text-center"}/><hr/>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" 
                        className={`form-control ${errors.emailErr ? "border-danger" : "border-success"}`} 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name="email"
                        onChange={(e) => changeData(e)}
                        />
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.emailErr}</p>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" 
                        className={`form-control ${errors.passwordErr ? "border-danger" : "border-success"}`} 
                        id="exampleInputPassword1"
                        name="password"
                        onChange={(e) => changeData(e)}
                        />
                        <p className="bg-danger mt-2 w-50 rounded-5 text-center mx-auto">{errors.passwordErr}</p>
                    </div>
                    <button type="submit" disabled = {errors.emailErr || errors.passwordErr} className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </>
    );

}

export default LogIn;