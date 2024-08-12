import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';
import moon from "../assest/moon.svg";
import sun from "../assest/sun.svg";


const ThemeIconbutton = () => {
    const { switchLight, switchDark } = useContext(ThemeContext);

    return (
        <div className='flex items-center justify-center gap-4 py-2 px-4 border dark:border-gray-100 border-black rounded-xl'>
            <button onClick={()=>switchLight()}>
                <img src={sun} alt=".." className='w-4 h-4 object-contain' />
            </button>
            <button onClick={()=>switchDark()}>
                <img src={moon} alt=".." className='w-4 h-4 object-contain' />
            </button>
        </div>
    )
}

export default ThemeIconbutton