import React from 'react';
import { Assets } from '../../constants/Assets';
import './style.scss';

export default ({ onClick, children }) => {
	return (
		<div onClick={onClick} className='secondary-button'>
			{children}
		</div>
	);
};
