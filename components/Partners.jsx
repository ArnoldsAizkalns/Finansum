import Image from 'next/image'
import maponImg from '/public/assets/partners/MaponNew1.png'
import mollerImg from '/public/assets/partners/Moller.png'
import sherlogImg from '/public/assets/partners/Sherlog.png'
import skandiImg from '/public/assets/partners/SkandiMotors.png'
import autobravaImg from '/public/assets/partners/autoBrava.png'
import porscheImg from '/public/assets/partners/porsche.png'

const Partners = () => {
	return (
		<div id='partners' className='w-full h-screen '>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				<p className=' text-xl uppercase tracking-widest text-[#4dac45]'>
					Partners
				</p>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'></div>

				<div className='grid items-center justify-center gap-4 md:grid-cols-3'>
					<div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
						<a href='https://porsche.lv/'>
							<div className='flex h-[65px] flex-col items-center justify-center m-auto'>
								<Image src={porscheImg} alt='/' width='200' height='200' />
							</div>
						</a>
					</div>
					<div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
						<a href='https://www.skandimotors.lv/'>
							<div className='flex h-[65px] flex-col items-center justify-center h-m-[25px] m-auto'>
								<Image src={skandiImg} alt='/' width='150' height='200' />
							</div>
						</a>
					</div>
					<div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
						<a href='https://mollerauto.lv/'>
							<div className='flex h-[65px] flex-col items-center justify-center m-auto'>
								<Image src={mollerImg} alt='/' width='200' height='200' />
							</div>
						</a>
					</div>
					<div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
						<a href='https://www.sherloglatvia.com/'>
							<div className='flex flex-col items-center justify-center h-[65px] m-auto'>
								<Image src={sherlogImg} alt='/' width='150' height='150' />
							</div>
						</a>
					</div>
					<div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
						<a href='https://www.autobrava.lv/'>
							<div className='flex h-[65px] flex-col items-center justify-center m-auto'>
								<Image src={autobravaImg} alt='/' width='200' height='200' />
							</div>
						</a>
					</div>
					<div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
						<a href='https://www.mapon.com/lv'>
							<div className='flex h-[65px] flex-col items-center justify-center m-auto'>
								<Image src={maponImg} alt='/' width='150' height='200' />
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
