import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, PrimaryButton } from '../../components';
import { Assets } from '../../constants';
import './style.scss';

function Order() {
	const history = useHistory();

	return (
		<div className='Order'>
			<Header>Your Order:</Header>
			<div className='Order__image'>
				<img alt='chair' src={Assets.images.chair.default} />
			</div>
			<div className='Order__description'>
				<div className='Order__description--item'>
					<span className='Order__description--item-title'>Wing Chair</span>
					<span className='Order__description--item-category'>
						Furniture &gt; Seating
					</span>
				</div>
				<div className='Order__description--price'>$249.00</div>
			</div>
			<div className='Order__payment-button'>
				<PrimaryButton onClick={() => history.push('/payment')}>
					Proceed to Payment
				</PrimaryButton>
			</div>
		</div>
	);
}

export default Order;
