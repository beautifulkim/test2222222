import React from 'react';
import { Link } from 'react-router-dom';

const Navi = () => {
    return (
        <header id="hd" className='border-bottom py-3 fixed-top bg-white'>
            <div className="container d-md-flex justify-content-between align-items-center">
                <h1>
                    <Link to='/' className='text-decoration-none'>로고</Link>
                </h1>
                <ul id="gnb" className='d-flex'>
                    <li className='px-2'>
                        <Link to='/about' className='text-decoration-none'>뇌새김</Link>
                    </li>
                    <li className='px-2'>
                        <Link to='/study' className='text-decoration-none'>학습프로세스</Link>
                    </li>
                    <li className='px-2'>
                        <Link to='/gift' className='text-decoration-none'>사은품</Link>
                    </li>
                    <li className='px-2'>
                        <Link to='/contact' className='text-decoration-none'>문의</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navi;