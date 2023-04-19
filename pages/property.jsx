import Image from 'next/legacy/image'
import Link from 'next/link'
import { RiRadioButtonFill } from 'react-icons/ri'
import styleImg from '/public/assets/projectsDone/Screenshot (5).png'

const property = () => {
	return (
		<div className='w-full'>
			<div className='w-screen h-[50vh] lg:h-[60vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[50vh] lg:h-[60vh] bg-black/80 z-10'></div>
				<Image
					className='absolute z-1'
					layout='fill'
					objectFit='cover'
					src={styleImg}
					alt='/'
				/>
				<div className='absolute top-[70%] max-w-[1240px] w-full left-[51%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2'>
					<h2 className='py-2'>Style is our everything</h2>
					<h3>React/js/tailwind</h3>
				</div>
			</div>

			<div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
				<div className='col-span-4'>
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						In today's world, where appearances matter more than ever, style has
						become a critical aspect of our lives. Style is no longer just about
						how we dress, but it also extends to our home decor, the way we
						speak, and the way we present ourselves on social media. It is an
						expression of who we are, and it can make a significant impact on
						how we are perceived by others.
					</p>
					<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
					<button className='px-8 py-2 mt-4'>Code</button>
				</div>
				<div className='col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
					<div className='p-2'>
						<p className='pb-2 font-bold text-center'>Technologies</p>
						<div className='grid grid-cols-3 md:grid-cols-1'>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> React
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Next
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> JavaScript
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> Tailwind
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> HTML/CSS
							</p>
							<p className='flex items-center py-2 text-gray-600'>
								<RiRadioButtonFill className='pr-1' /> TypeScript
							</p>
						</div>
					</div>
				</div>
				<Link scroll={false} href='/#projects'>
					<p className='underline cursor-pointer'>Back</p>
				</Link>
			</div>
		</div>
	)
}

export default property
