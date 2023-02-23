import React, {useState} from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import styles from "./signup.module.css"

function SignUp() {
  const [identifier, setIdentifier] = useState(false)
  const [formData, setformData] = useState({
    email: "",
    password: "",
    name: ''
  })
    function handleChange(e){
      setformData(prevData=>{
        return {...prevData,
        [e.target.name]: e.target.value
        }
      })
    }
const formSubmitHandler = (e)=>{
e.preventDefault()
console.log(formData)
setformData({
  email: '',
  password: '',
  name: ''
})
}

function signInHandler(){
  setIdentifier(false)
}
function signUpHandler(){
setIdentifier(true)
}
  return (
    <>
    <div className={`${styles.container} ${identifier && styles['right-panel-active']}`}>
        <div className={`${styles['form-container']} ${styles['signUp-container']}`}>
          <form action="#" onSubmit={formSubmitHandler}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" onChange={handleChange} value={formData.name} name='name' />
            <input type="email" placeholder="Email" onChange={handleChange} value={formData.email} name='email' />
            <input type="password" placeholder="Password" onChange={handleChange} value={formData.password} name='password' />
            <span>OR</span>
            <div className={`${styles['social-container']}`}>
              <a href="#" className="social"><FaFacebook /></a>
              <a href="#" className="social"><FcGoogle /></a>
              <a href="#" className="social"><BsLinkedin /></a>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`${styles['form-container']} ${styles['signIn-container']}`}>
          <form action="#" onSubmit={formSubmitHandler}>
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" onChange={handleChange} value={formData.email} name='email' />
            <input type="password" placeholder="Password" onChange={handleChange} value={formData.password} name='password' />
            <span>OR</span>
            <div className={`${styles['social-container']}`}>
              <a href="#" className="social"><FaFacebook /></a>
              <a href="#" className="social"><FcGoogle /></a>
              <a href="#" className="social"><BsLinkedin /></a>
            </div>
            <button>Sign In</button>
            <a href="#">Forgot your password?</a>
          </form>
        </div>
        <div className={`${styles['overlay-container']}`}>
          <div className={styles.overlay}>
            <div className={`${styles['overlay-details']} ${styles['overlay-left']}`}>
              <h1>Hello, Friend! </h1>
              <p>Enter your personal details and start journey with us</p>
              <button className={styles.switchBtn} onClick={signInHandler}>Log In</button>
            </div>
            <div className={`${styles['overlay-details']} ${styles['overlay-right']}`}>
              <h1>Welcome Back!</h1>
              <p>To access your account, please log in with your personal info</p>
              <button className={styles.switchBtn} onClick={signUpHandler}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default SignUp
