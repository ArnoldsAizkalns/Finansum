import Image from 'next/image'
import taycanImg from '/public/assets/porscheHD.jpg'

const About = () => {
	return (
		<div id='about' className='flex items-center w-full p-2  md:h-screen'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl tracking-widest text-[#4dac45]'>
						About
					</p>
					<h2 className='py-4'>Our Expertise</h2>
					<p className='py-4 text-gray-600'>//Experience the best with us.</p>
					<p className='py-4 text-gray-600'>
						Our professional team specializes in facilitating vehicle purchases
						for both personal and corporate clients. Take advantage of our
						website to discover the various transport options available for
						purchase. Let us help you acquire the vehicle you desire with ease.
					</p>
					<p className='py-4 text-gray-600'>
						Through our long-term lease options, we at our company have
						simplified the process of car purchasing. Our clients can choose a
						specific period and enjoy the convenience of minimized burden of
						registration and transaction organization.
					</p>
					<p className='py-2 text-gray-600 underline cursor-pointer'>
						Explore our recently sold vehicles
					</p>
				</div>
				<div className='flex items-center justify-center w-full h-auto p-0 m-auto ease-in shadow-xl rounded-xl shadow-gray-400 hover:scale-105 duration-250'>
					<Image
						src={taycanImg}
						alt='/'
						width='650'
						height='230'
						className='py-2 rounded-xl'
					></Image>
				</div>
			</div>
		</div>
	)
}

export default About
