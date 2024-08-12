import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assest/Logo 12.png";
import sym from "../assest/Logo 12 - Copy.png";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import ThemeIconbutton from './ThemeIconbutton';


const Header = ({ isAuthorized }) => {
    return (
        <>
            {isAuthorized ? (
                <div className='w-full top-0 fixed flex items-start'>
                    <div className='w-[56px] h-[100vh] dark:bg-[#101113] bg-[#cbcbcd] border-r border-[#343A40]'>
                        <div className='w-full h-full flex flex-col items-center justify-between pb-4'>
                            <div className='w-full h-[70px] flex justify-center items-center top-0'>
                                <img src={sym} alt=".." className='w-6 h-6 object-contain' />
                            </div>
                            <div className='w-full h-[546px] gap-8 -mt-40 flex flex-col items-center justify-center'>
                                <Link to="/">
                                    <RiHome5Fill className='dark:text-white text-black text-[28px]' />
                                </Link>
                                <Link to="/">
                                    <RiUserSearchLine className='dark:text-white text-black text-[28px]' />
                                </Link>
                                <Link to="/">
                                    <RiMailFill className='dark:text-white text-black text-[28px]' />
                                </Link>
                                <Link to="/">
                                    <IoIosSend className='dark:text-white text-black text-[28px]' />
                                </Link>
                                <Link to="/">
                                    <SiElasticstack className='dark:text-white text-black text-[28px]' />
                                </Link>
                                <Link to="/main">
                                    <FaInbox className='dark:text-white text-black text-[28px]' />
                                </Link>
                                <Link to="/">
                                    <IoStatsChartSharp className='dark:text-white text-black text-[28px]' />
                                </Link>
                            </div>
                            <div className='w-full h-[56px] bottom-0 flex justify-center items-center'>
                                <div className='w-[48px] h-[48px] rounded-[50%] flex justify-center items-center text-[30px] text-white bg-green-900'>
                                    PS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[64px] dark:bg-[#1F1F1F] border-b border-[#343A40] bg-gray-100 flex justify-between items-center px-4'>
                        <p className='text-base font-bold text-black dark:text-white pl-8'>Onebox</p>
                        <div className='flex justify-center items-center gap-6'>
                            <ThemeIconbutton />
                            <div className='flex justify-center items-center gap-3'>
                                <p className='text-base font-bold text-black dark:text-white'>
                                Tim’s Workspace
                                </p>
                                <MdKeyboardArrowDown className='text-xl text-black dark:text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-full h-16 bg-[#25262B] top-0 fixed border-b z-[100]'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <img src={logo} alt="..." className='w-[156px] h-[28px]' />
                    </div>
                </div>
            )}
        </>
    );
}

export { Header };
