function FormInputGroup({
	text,
	icon,
	placeholder,
	value,
	onInput,
	onKeyUp,
	readonly = false,
}) {
	return (
		<div className='mb-3 input-group '>
			<span className=' inline-block m-1 w-[150px] input-group-text '>
				<div className='flex flex-row items-center  w-[210px] font-bold text-gray-500 md:text-right md:mb-0'>
					{text}
					{icon}
				</div>
			</span>
			<input
				className='w-[240px] px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
				value={value}
				placeholder={placeholder}
				type='number'
				onInput={onInput}
				onKeyUp={onKeyUp}
				readOnly={readonly}
			/>
		</div>
	)
}

export default FormInputGroup
