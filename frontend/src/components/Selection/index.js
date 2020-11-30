import React from 'react';
import { Assets, Months, Years } from '../../constants';
import './style.scss';

export default ({ error, label, name, value, onMonthChange, onYearChange }) => {
	return (
		<div className={error ? 'selection error' : 'selection'}>
			<label>
				{label}
				<select
					className='selection__month'
					// name={name}
					// value={value}
					onChange={onMonthChange}
				>
					<option value='' disabled selected hidden>
						MM
					</option>
					{Months.map((month) => (
						<option key={month.value} value={month.value}>
							{month.name}
						</option>
					))}
				</select>
				<select
					className='selection__year'
					// name={name}
					// value={value}
					onChange={onYearChange}
				>
					<option value='' disabled selected hidden>
						YYYY
					</option>
					{Years.map((year) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</label>

			{/* <div className='selection__error-message'>
				<img
					className='alert-triangle'
					src={Assets.icons.alertTriangle.default}
				/>
				<span>Expiry date is required.</span>
			</div> */}
		</div>
	);
};
