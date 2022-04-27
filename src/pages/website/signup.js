import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import { signup } from '../../api/authAPI';
import { authenticated } from '../../auth';
const Signup = () => {
    const {register,handleSubmit , formState: {errors}} = useForm();
    const [error,setError] = useState("");
    const [success, setSuccess] = useState(false);
     const onSubmit = async (data) => {
          try {
            const response = await signup(data);
            authenticated(response.data.user)
            setSuccess(true);
          console.log(response.data.user);
          } catch (error) {
            setSuccess(false);
            setError(error.response.data);
          }
     }
  return (
    <div className='tikaka'>
      <div className='split-screen'>
         <div className='left'>
            <section className='copy'>
               <h1 className='h1h1'>Explore your creativity</h1>
               <p>Over 1000 courses taught real creativity.</p>
            </section>
         </div>
         <div className='right'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <section className='copy'>
                      <h2 className='h2h2'>Sign up</h2>
                      <div className='login-container'>
                        {error && <div className='erroe'>{error}</div>}
                        {success && <div className='success'>Bạn đã đăng ký thành công,Click vào để <Link className='a1a1' to="/signin"><strong>Log in</strong></Link></div>}
                      </div>
                </section>
                <div className='input-container name'>
                     <label className='phong'>User name</label>
                     <input name='fname' type="text" {...register('name')}></input>
                </div>
                <div className='input-container email'>
                     <label className='phong'>Email</label>
                     <input name='email' type="email" {...register('email')}></input>
                </div>
                <div className='input-container password'>
                     <label className='phong'>Password</label>
                     <input name='password' type="password" {...register('password')}></input>
                </div>
                <div  className='input-container cta phong'>
                     <label className='checkbox-container'>
                     <input name='checkbox' type="checkbox"></input>
                     <span className='checkmark'></span>
                     Sign up for eamil updates
                     </label>
                </div>
                <button className='sign-up' type='submit'>Sign Up</button>
                <section className='copy legal'>
                  <p><span className='smail'>By continuing, you to accept our</span></p>
                </section>
              </form>
         </div>
    </div>
    </div>
  )
}

export default Signup