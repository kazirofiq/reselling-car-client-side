import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {userLogin} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail);
    const location = useLocation();
    // const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

        // if(token){
        //     navigate(from, {replace: true});
        // }
    

    const handleLogin = data =>{
    console.log(data);
    setLoginError();
    userLogin(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user)
        setLoginUserEmail(data.email);
       
    })
    .catch(error => {
        console.log(error.message)
        setLoginError(error.message)
    });
}
    return (
        <div className='h-[800px]  mx-auto flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-xl text-center font-bold'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email", {required: "Email Address is required" })} className="input input-bordered w-full max-w-xs " />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {required: "Password is Required",
                        minLength:{value: 6, message: 'Password must be 6 character'}
                    })}
                     className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login'/>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </form>
                    <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p> 
                    <div className="divider">OR</div>
                    <button className='uppercase btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                 </div>
             </div>
    );
};

export default Login;