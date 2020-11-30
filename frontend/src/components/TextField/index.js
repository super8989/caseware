import React from 'react';
import { Assets } from '../../constants';
import './style.scss';

export default ({
	label,
	name,
	type,
	value,
	onChange,
	placeholder,
	pattern,
	maxLength,
	inputmode,
	icon,
	error,
}) => {
	return (
		<div className={error ? 'text-field error' : 'text-field'}>
			<label>
				{label}
				{icon && <img className='icon' src={icon} alt='icon' />}
				<input
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					pattern={pattern}
					maxLength={maxLength}
					inputMode={inputmode}
				/>
			</label>
			{/* <div className='text-field__error-message'>
				<img
					className='alert-triangle'
					src={Assets.icons.alertTriangle.default}
				/>
				<span>Card number is required.</span>
			</div> */}
		</div>
	);
};
