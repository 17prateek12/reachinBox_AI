import React from 'react'
import { Header } from '../compoenent/Header';
import google from "../assest/Frame.svg"
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
    const token = localStorage.getItem('token')
    if (token) {
        Navigate('/')
    } else {
        Navigate('/login')
    }

    const handleGoogleLogin = () => {
        window.location.href = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${process.env.REACT_APP_BASE}`
    }

    return (
        <div className='max-w-full h-[100vh] bg-[#25262B]'>
            <Header isAuthorized={false}/>
            <div className='w-full h-full flex justify-center items-center px-4'>
                <div className='w-[460px] sm:w-full h-[312px] sm:h-auto bg-[linear-gradient(138.97deg,#111214,#121212)] border rounded-2xl border-[#343A40]'>
                    <div className='w-full h-full pt-6 px-10 pb-10 flex flex-col justify-center items-center gap-12 sm:px-4'>
                        <div className='w-[380px] h-[103px] flex flex-col items-center justify-center gap-6 sm:w-full'>
                            <div className='w-full h-[36px] flex justify-center items-center leading-8 text-[20px] text-white text-wrap font-semibold font-sans'>
                                Create a new account
                            </div>
                            <button className='w-full h-[48px] flex justify-center items-center gap-3'
                                onClick={handleGoogleLogin}>
                                <img src={google} alt="google" className='w-4 h-5 object-contain' />
                                <p className='text-[#CCCCCC] text-base font-normal leading-7'>Sign Up with Google</p>
                            </button>
                        </div>
                        <div className='w-[380px] h-24 flex flex-col items-center justify-center gap-6 sm:w-full'>
                            <Link href='/'>
                                <button className='w-[195px] h-[48px] bg-[linear-gradient(91.73deg,#4B63DD,#0524BF)] flex justify-center items-center
                            text-sm font-semibold text-[#FFFFFF]'>
                                    Create an Account
                                </button>
                            </Link>
                            <p className='text-[16px] leading-6 text-center font-normal text-[#909296]'>
                                Already have an account?{" "}
                                <Link href='/'>
                                    <span className='text-[#C1C2C5]'>
                                        Sign In
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-8 border-t bg-[#121212] flex justify-center items-center fixed bottom-0'>
                <p className='text-[12px] leading-4 text-[#5C5F66] font-normal'>
                    © 2023 Reachinbox. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export { Login };