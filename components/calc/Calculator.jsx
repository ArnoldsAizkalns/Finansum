import Form from './Form.jsx'

const Calculator = () => {
	return (
		<div id='contact' className='w-full h-[60vh] mt-[150px]'>
			<div className='max-w-[1240px] m-auto px-2 w-full '>
				<div>
					<p className='text-xl tracking-widest uppercase text-[#4dac45]'>
						Calculator
					</p>
					<Form />
				</div>
			</div>
		</div>
	)
}

export default Calculator
