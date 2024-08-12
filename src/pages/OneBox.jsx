import React from 'react';
import { Content } from '../compoenent/Content';
import { MainPage } from '../compoenent/MainPage';
import { useLocation } from 'react-router-dom';

const OneBox = () => {
    const location = useLocation();

    return (
        <div className='max-w-full h-[100vh]'>
            {location.pathname === '/' && <Content />}
            {location.pathname === '/main' && <MainPage />}
        </div>
    );
}

export { OneBox };
