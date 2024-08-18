import './login.css'
function Netflixlogin() {
    return (
        <div className="main-netflix-login container-fluid bg-black">
            <div className="log-page-bg d-flex justify-content-center ">
                <div className='login-container my-lg-auto d-flex justify-content-center  '>

                    <div className='login-ltwo mt-4  '>
                        <div>
                        <h1 className='text-white heading-s'>Sign In</h1>
                        </div>
                        <div className='login-creds'>
                            <input type='text' className=' aa form-control  mt-5 rounded-1 py-3 ' id='email-btn' placeholder='Email or mobile number'></input>
                            <input text='password'className=' form-control  my-3 rounded-1 py-3' id='pw-btn' placeholder='Password'></input>
                            <button className='w-100 s-btn py-2 rounded-1 text-white'>Sign In</button>
                        </div>
                        <p className='text-center text-secondary my-3'>OR</p>
                        <div className='sign-code-container'>
                            <button className='w-100 py-2  rounded-1 text-white' id='sign-code-btn'>Use Sign-In code</button>
                        </div>
                        <div className='text-center my-2'>
                        <a className='text-white text-decoration-none my-2'>Forgot Password?</a>
                        </div>
                        <div className='my-4'>
                            <input type='checkbox' className='checkbx'></input><span className='text-white px-2'>Remember Me</span>
                        </div>
                        <div>
                            <p className='text-secondary'>New to Netflix?<a className='text-white text-decoration-none px-2'>Sign up now</a></p>
                        </div>
                        <div className='mb-5 pb-5'>
                            <p className='text-secondary mb-5'>This page is protected by Google reCAPTCHA to ensure you're not a bot<a className='text-primary text-decoration-none'>Learn more.</a></p>
                        </div >
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Netflixlogin;