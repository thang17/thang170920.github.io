import React, { useState } from "react";
import "./signin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { signin } from "../../api/authAPI";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { authenticated, isAuthenticated } from "../../auth";
const Signin = () => {
  const history = useHistory();
  const {id} = isAuthenticated();
  const {register,handleSubmit , formState: {errors}} = useForm();
    const [error,setError] = useState("");
    const [success, setSuccess] = useState(false);
     const onSubmit = async (data) => {
          try {
            const response = await signin(data);
            authenticated(response.data.user)
            setSuccess(true);
          } catch (error) {
            setSuccess(false);
            setError(error.response.data);
          }
        }
        const redirectUser = () => {
          if(success) {
            if(id == 1) {
              history.push('/admin')
            }else {
              history.push('/')
            }
          }
        }
  return (
   <>
   {redirectUser()}
    <div className="tyty">
      <div className="cont">
      {error && <div className='erroe'>{error}</div>}
        <div className="form">
          <h4 className="hyy">Sign In</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="web1" >
            <span>Email Address</span>
            <input className="kuiii" type="email" name="email" {...register('email')}></input>
          </div>
          <div className="web1" >
            <span>Password</span>
            <input className="kuiii" type="password" name="password" {...register('password')}></input>
          </div>
          <button className="submit submit1" type="submit">
            Sign In
          </button>
          </form>
          <p className="forgot-pass">Forgot Password ?</p>
          <p className="forgot-pass">Do not have an account <Link to='/signup'>Signup</Link></p>
          <div className="social-media">
          <div className="footer__social">
              <a href="#" className="footer__social-item footer_color">
              <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a href="#" className="footer__social-item footer_color ">
              <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a href="#" className="footer__social-item footer_color ">
              <FontAwesomeIcon icon={faGoogle}/>
              </a>
              <a href="#" className="footer__social-item footer_color ">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="sub-cont">
            <div className="gigigi">
                <div className="img-text">
                    <h2>New here?</h2>
                    <p>Sign up and discover great amount of new opportunities!</p>
                </div>
                {/* <div className="img-text">
                    <h2>One of us?</h2>
                    <p>If you already has an account, just sign in. we've missed you!</p>
                </div> */}
            </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Signin;
