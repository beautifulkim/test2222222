import React from 'react';

export default function About( props ) {
    return (
        <div style={{ height: 800 }} className='pt-5'>
            <h2 className='pt-5 mt-5 text-center'>{ props.title }</h2>
        </div>
    );
}
