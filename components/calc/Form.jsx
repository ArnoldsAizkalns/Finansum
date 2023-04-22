import {useState} from 'react'
import {FaEuroSign} from 'react-icons/fa'
import FormInputGroup from './FormInputGroup'

const defaultRate = '17' // можешь менять как тебе надо, на любое значение из option
const defaultDuration = '1' // можешь менять как тебе надо, на любое значение из option


/*
* In computer science, we use the word clamp as a way to restrict a number between two other numbers.
* When clamped, a number will either keep its own value if living in the range imposed by the two other values,
* take the lower value if initially lower than it, or the higher one if initially higher than it.
* */
function clamp(number, min, max) {
	return Math.min(Math.max(number, min), max)
}

// Same as above but works with string numbers
function clampInputValue(value, min, max) {
	if (value === '') {
		return ''
	}
	if (min === '') {
		min = value // set no minimum
	}
	if (max === '') {
		max = Infinity // set no maximum
	}
	return clamp(Number(value), Number(min), Number(max)).toString(10)
}

const Form = () => {
	const [carValue, setCarValue] = useState('')
	const [downPayment, setDownPayment] = useState('')
	const [interestRate, setInterestRate] = useState(defaultRate)
	const [loanDurationRate, setLoanDurationRate] = useState(defaultDuration)
	const [monthlyPayment, setMonthlyPayment] = useState('')
	const [residualValue, setResidualValue] = useState('')

	// We don't want to show negatives: Math.max(-x, 0) handles that -> it will return result, or 0 if result is less.
	// Also, for inputs we can use similar approach in onChange handler to disallow out of bound values depending on logic.
	// There is example for Down Payment & Car Price fields.
	const loanAmount = Math.max(carValue - downPayment - residualValue, 0)

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

	// Hint! You can even delete "Calculate" button as all calculation can happen automatically as below:
	// const monthlyPayment = calculateMonthlyPayment() // !IMPORTANT! But delete old monthlyPayment, setMonthlyPayment from this file for this to work, and add "return monthlyPayment" as the last line in "calculateMonthlyPayment".

	const handleRateChange = e => {
		setInterestRate(e.target.value)
	}

	const handleDurationChange = e => {
		setLoanDurationRate(e.target.value)
	}

	return (
		<form className='pt-4 max-w-[400px]' onSubmit={e => e.preventDefault()}>
			<FormInputGroup
				text="Car Price"
				icon={<FaEuroSign/>}
				placeholder="Enter the price"
				required={true}
				value={carValue}
				onBlur={() => {
					// BELOW IS OPTIONAL:
					// If car value and down payment are both set - we ensure that down payment is not more than car value
					// -> we reset it to car value if its bigger
					// You CAN delete it as it might not even be needed, but just wanted to show as an example how it can be done.
					setDownPayment(clampInputValue(downPayment, downPayment, carValue))
				}}
				onChange={({target: {value}}) => {
					setCarValue(clampInputValue(value, 0, Infinity)) // clamp is set to disallow negative values
				}}
			/>
			<FormInputGroup
				text="Down Payment"
				icon={<FaEuroSign/>}
				placeholder="Enter the amount"
				required={true}
				value={downPayment}
				onBlur={() => {
					// BELOW IS OPTIONAL:
					// We set down payment to be equal or less car value when user click outside the field.
					// You CAN change/delete it as it might not even be needed, but just wanted to show as an example.
					setDownPayment(clampInputValue(downPayment, downPayment, carValue))
				}}
				onChange={e => {
					setDownPayment(clampInputValue(e.target.value, 0, Infinity)) // clamp is set to disallow negative values
				}}
			/>
			<FormInputGroup
				text="Residual Value"
				icon={<FaEuroSign/>}
				placeholder="Enter the amount"
				required={true}
				value={residualValue}
				onChange={e => setResidualValue(e.target.value)}
			/>
			<FormInputGroup
				text="Loan Amount"
				icon={<FaEuroSign/>}
				placeholder="Funds needed"
				readOnly={true}
				value={loanAmount}
			/>

			<div className="flex flex-row py-2 m-1 mb-3">
				<label
					className="items-center font-bold text-gray-500 space-between md:text-right md:mb-0"
					htmlFor="rate"
				>
					Interest rate %
				</label>
				<select
					className="text-[13px] ml-[38px] w-[80px] border rounded"
					id="rate"
					value={interestRate}
					onChange={handleRateChange}
				>
					<option value="17">New</option>
					<option value="18">Used</option>
					<option value="20">High Risk</option>
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
