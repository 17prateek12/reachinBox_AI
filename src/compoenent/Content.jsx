import React from 'react'
import imgmes from '../assest/No Message illustration.svg';

const Content = () => {
    return (
        <div className='w-full h-full xl:w-full lg:w-full navsm:w-full sm:w-full flex justify-center items-center dark:bg-[#000000] bg-white'>
            <div className='w-[832px] h-[392px] flex gap-12 flex-col justify-center items-center navsm:w-full sm:w-full navsm:h-auto sm:h-auto'>
                <img src={imgmes} alt=".." className='w-[280px] h-[230px] object-contain' />
                <div className='flex flex-col justify-center items-center gap-6'>
                    <p className='dark:text-white text-black text-[24px] font-bold text-center leading-9'>
                        It’s the beginning of a legendary sales pipeline
                    </p>
                    <div className='h-[54px] w-[289px] leading-7 text-[18px] font-medium dark:text-[#9E9E9E] text-gray-500 text-wrap text-center'>
                        When you have inbound E-mails you’ll see them here
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Content }