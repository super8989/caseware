import React from 'react';
import './style.scss';

export default ({ children }) => {
	return (
		<div className='Header'>
			<span>{children}</span>
		</div>
	);
};
