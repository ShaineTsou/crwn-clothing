import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div 
            className={`menu-item ${size}`}
            style={{backgroundImage: `url(${imageUrl})`}}
        >
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span>Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;