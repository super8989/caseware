import React from 'react';
import { Assets } from '../../constants';
import './style.scss';

function Success() {
	return (
		<div className='Success'>
			<div className='Success__icon'>
				<img src={Assets.icons.checkCircle.default} alt='success icon' />
			</div>
			<div className='Success__text-main'>Thank you!</div>
			<div className='Success__text-sub'>Your payment has been accepted.</div>
		</div>
	);
}

export default Success;
