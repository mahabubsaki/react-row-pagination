import React from 'react';

const TabButtons = ({ type, orderType, setOrderType, children, setPage }) => {
    return (
        <button className={`btn ${orderType === type ? 'btn-info' : ' btn-outline'}`} onClick={() => {
            setPage(0);
            setOrderType(type);
        }}>{children}</button>
    );
};

export default TabButtons;