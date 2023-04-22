import { useState } from 'react'
import { FaEuroSign } from 'react-icons/fa'
import FormInputGroup from './FormInputGroup'

const Form = () => {
	const [carValue, setCarValue] = useState('')
	const [downPayment, setDownPayment] = useState('')
	const [loanAmount, setLoanAmount] = useState('')
	const [interestRate, setInterestRate] = useState('')
	const [loanDurationRate, setLoanDurationRate] = useState('')
	const [monthlyPayment, setMonthlyPayment] = useState('')
	const [residualValue, setResidualValue] = useState('')

	function calculateLoanAmount() {
		const amount = carValue - downPayment - residualValue
		setLoanAmount(amount)
	}

	function calculateMonthlyPayment() {
		function percentageToDecimal(percent) {
			return percent / 12 / 100
		}
		function yearsToMonths(year) {
			return year * 12
		}

		const rate = percentageToDecimal(Number(interestRate))
		const duration = yearsToMonths(Number(loanDurationRate))

		const monthlyPayment = parseFloat(
			(rate * loanAmount) / (1 - Math.pow(1 + rate, -duration))
		).toFixed(2)

		setMonthlyPayment(monthlyPayment)
	}

	const handleRateChange = e => {
		setInterestRate(e.target.value)
	}

	const handleDurationChange = e => {
		setLoanDurationRate(e.target.value)
	}

	return (
		<form className='pt-4 max-w-[400px]' onSubmit={e => e.preventDefault()}>
			<FormInputGroup
				text='Car Price'
				icon={<FaEuroSign />}
				placeholder='Enter the price'
				onKeyUp={calculateLoanAmount}
				value={carValue}
				onInput={e => setCarValue(e.target.value)}
			/>
			<FormInputGroup
				text='Down Payment'
				icon={<FaEuroSign />}
				placeholder='Enter the amount'
				onKeyUp={calculateLoanAmount}
				value={downPayment}
				onInput={e => setDownPayment(e.target.value)}
			/>
			<FormInputGroup
				text='Loan Amount'
				icon={<FaEuroSign />}
				placeholder='Funds needed'
				readOnly={true}
				value={loanAmount}
			/>
			<FormInputGroup
				text='Residual Value'
				icon={<FaEuroSign />}
				placeholder='Enter the amount'
				onKeyUp={calculateLoanAmount}
				value={residualValue}
				onInput={e => setResidualValue(e.target.value)}
			/>

			<div className='flex flex-row py-2 m-1 mb-3'>
				<label
					className='items-center font-bold text-gray-500 space-between md:text-right md:mb-0'
					htmlFor='rate'
				>
					Interest rate %
				</label>
				<select
					className='text-[13px] ml-[38px] w-[80px] border rounded'
					id='rate'
					value={interestRate}
					onChange={handleRateChange}
				>
					<option value='17'>New</option>
					<option value='18'>Used</option>
					<option value='20'>High Risk</option>
				</select>
			</div>
			<div className='flex flex-row py-2 m-1 mb-3'>
				<label
					className='items-center font-bold text-gray-500 space-between md:text-right md:mb-0'
					htmlFor='duration'
				>
					Loan Duration
				</label>
				<select
					className='text-[13px] ml-[40px] w-[80px] border rounded'
					id='duration'
					value={loanDurationRate}
					onChange={handleDurationChange}
				>
					<option value='1'>1 year</option>
					<option value='2'>2 years</option>
					<option value='3'>3 years</option>
					<option value='4'>4 years</option>
					<option value='5'>5 years</option>
				</select>
			</div>
			<FormInputGroup
				text='Monthly Payment'
				icon={<FaEuroSign />}
				placeholder='Monthly Payment'
				value={monthlyPayment}
				readOnly={true}
			/>
			<button
				type='submit'
				className='mt-4 py-2 w-[200px] bg-gradient-to-r from-[#4dac45] to-[#22255f] text-gray-100 focus:outline-none py-2 px-4'
				onClick={calculateMonthlyPayment}
			>
				Calculate
			</button>
		</form>
	)
}
export default Form
