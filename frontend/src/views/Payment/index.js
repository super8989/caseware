import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
	Header,
	PrimaryButton,
	SecondaryButton,
	TextField,
	Selection,
} from '../../components';
import { Assets } from '../../constants';
import './style.scss';

function Payment() {
	const history = useHistory();
	const [cardInfo, setCardInfo] = useState({
		number: '',
		name: '',
		month: null,
		year: null,
		cvv: '',
	});

	const [error, setError] = useState(false);

	// const checkCardType = (digit) => {
	// 	console.log(digit);
	// 	const firstDigit = digit.charAt(0);
	// 	switch (firstDigit) {
	// 		case '3':
	// 			setCardType('amex');
	// 			break;
	// 		case '4':
	// 			setCardType('visa');
	// 			break;
	// 		case '5':
	// 			setCardType('master');
	// 			break;
	// 		case '6':
	// 			setCardType('discover');
	// 			break;
	// 		default:
	// 			setError(true);
	// 	}
	// };

	const verifyNumeric = (input) => {
		const num = /^[0-9]+$/;
		if (input === '' || num.test(input)) return true;
	};

	const handleCardNumberInput = (number) => {
		if (verifyNumeric(number.target.value))
			setCardInfo({ ...cardInfo, number: number.target.value });
	};

	const handleCardNameInput = (name) => {
		setCardInfo({ ...cardInfo, name: name.target.value });
	};

	const handleMonthInput = (month) => {
		setCardInfo({ ...cardInfo, month: Number(month.target.value) });
	};

	const handleYearInput = (year) => {
		setCardInfo({ ...cardInfo, year: Number(year.target.value) });
	};

	const handleCvvInput = (digit) => {
		if (verifyNumeric(digit.target.value))
			setCardInfo({ ...cardInfo, cvv: digit.target.value });
	};

	const isFormComplete = () => {
		if (
			cardInfo.number === null ||
			cardInfo.number === 0 ||
			cardInfo.name === '' ||
			cardInfo.month === null ||
			cardInfo.month === 0 ||
			cardInfo.year === null ||
			cardInfo.year === 0 ||
			cardInfo.cvv === null ||
			cardInfo.cvv === 0
		) {
			setError(true);
			return false;
		}

		setError(false);
		return true;
	};

	const handleSubmit = async () => {
		try {
			const body = { cardInfo };

			const response = await fetch('http://localhost:5000', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			}).then((result) => {
				history.push('/success');
			});
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<div className='Payment'>
			<Header>
				<img
					className='dollar-sign'
					src={Assets.icons.dollarSign.default}
					alt='Dollar Sign'
				/>
				Complete your payment
			</Header>
			<div className='Payment__left'>
				<div className='Payment__left--amount'>
					<span className='Payment__left--amount--text'>Amount Due</span>
					<span className='Payment__left--amount--price'>$249.00</span>
				</div>
				<div className='Payment__left--order'>
					<span className='Payment__left--order--text'>Order Number</span>
					<span className='Payment__left--order--number'>1524851</span>
				</div>
				<div className='Payment__left--back'>
					<SecondaryButton onClick={() => history.push('/')}>
						<img
							className='arrow-left'
							src={Assets.icons.arrowLeft.default}
							alt='Left Arrow'
						/>
						<span className='Payment__left--back--text'>Back</span>
					</SecondaryButton>
				</div>
			</div>
			<div className='Payment__right'>
				<div className='Payment__right--credit-cards'>
					<img
						className='visa'
						src={Assets.cards.visaDisabled.default}
						alt='VISA'
					/>
					<img
						className='discover'
						src={Assets.cards.discoverDisabled.default}
						alt='Discover'
					/>
					<img
						className='amex'
						src={Assets.cards.amexDisabled.default}
						alt='AMEX'
					/>
					<img
						className='master'
						src={Assets.cards.masterDisabled.default}
						alt='Master Card'
					/>
				</div>
				<div className='Payment__right--card-info'>
					<div className='Payment__right--card-info--number'>
						<TextField
							label='Card Number'
							placeholder='#### #### #### ####'
							type='text'
							maxLength='16'
							icon={Assets.icons.creditCard.default}
							value={cardInfo.number}
							onChange={handleCardNumberInput}
						/>
					</div>
					<div className='Payment__right--card-info--name'>
						<TextField
							label='Cardholder Name'
							placeholder='Name on the card'
							type='text'
							value={cardInfo.name}
							icon={Assets.icons.user.default}
							onChange={handleCardNameInput}
						/>
					</div>
					<div className='Payment__right--card-info--expiry'>
						<Selection
							label='Expiry Date'
							onMonthChange={handleMonthInput}
							onYearChange={handleYearInput}
						/>
					</div>
					<div className='Payment__right--card-info--cvv'>
						<TextField
							label='CVV'
							type='tel'
							maxLength='4'
							value={cardInfo.cvv}
							onChange={handleCvvInput}
						/>
					</div>
				</div>
				<div className='Payment__submit'>
					<PrimaryButton onClick={handleSubmit}>Submit</PrimaryButton>
				</div>
			</div>
		</div>
	);
}

export default Payment;
