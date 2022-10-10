import React from 'react';

const Link = (props) => {
    const {name, link} = props.route;
    return (
        <div>
            <ul className='mr-16'>
                <a className={link}>{name}</a>
            </ul>
        </div>
    );
};

export default Link;