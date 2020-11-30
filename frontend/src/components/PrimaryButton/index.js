import React from 'react';
import './style.scss';

export default ({ onClick, children }) => {
	return (
		<div onClick={onClick} className='primary-button'>
			{children}
		</div>
	);
};
