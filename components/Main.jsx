import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Main = () => {
	return (
		<div id='home' className='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='text-sm tracking-widest text-gray-600 uppercase'>
						Are you planning to buy a car?
					</p>
					<h1 className='py-4 font-bold text-gray-700'>
						We are <span className='text-[#4dac45]'>Finansum.lv</span>
					</h1>
					<p className='py-4 text-sm tracking-widest text-gray-600 uppercase'>
						Let us help you get behind the wheel of your dream car
					</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='p-5 duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110 '>
							<AiOutlinePhone />
						</div>
						<div className='p-5 duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<AiOutlineMail />
						</div>
						<div className='p-5 duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<FaInstagram />
						</div>
						<div className='p-5 duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<FaFacebook />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
