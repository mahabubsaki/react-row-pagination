import React from 'react';

const PageButtons = ({ index, page, setPage }) => {
    return (
        <button onClick={() => setPage(index)} className={`btn btn-sm btn-secondary ${index === page ? '' : 'btn-outline'}`}>
            {index + 1}
        </button>
    );
};

export default PageButtons;