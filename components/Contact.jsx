import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
	return (
		<div id='contact' className='w-full h-screen pt-[85px]'>
			<div className='max-w-[1240px] m-auto px-2 w-full '>
				<p className='text-xl tracking-widest uppercase text-[#4dac45]'>
					Contact
				</p>
				<h2 className='py-4'>Get in Touch</h2>
				<div className='grid gap-8 lg:grid-cols-2'>
					{/* left */}
					<div className='w-full h-full col-span-1 p-4 shadow-xl lg:col-span-1 shadow-gray-400 rounded-xl'>
						<div className='h-full lg:p-4 '>
							<div className='flex justify-center'>
								<Image
									className='duration-300 ease-in rounded-xl hover:scale-105'
									src='/../public/assets/HandsMac.png'
									alt='/'
									width={550}
									height={400}
								/>
							</div>
							<div>
								<h2 className='py-8'>Ruslan</h2>
								<p>Auto Specialist</p>
								<p className='py-4'>
									I am capable of addressing any inquiries you may have.
								</p>
							</div>
							<div>
								<p className='pt-[55px] uppercase'>Connect with me</p>
								<div className='flex items-center justify-between py-9'>
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
					{/* right */}
					<div className='h-auto col-span-1 shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form>
								<div className='grid w-full gap-4 py-2 md:grid-cols-2'>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>Name</label>
										<input
											className='flex p-3 border-2 border-gray-300 rounded-lg'
											type='text'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='py-2 text-sm uppercase'>
											Phone number
										</label>
										<input
											className='flex p-3 border-2 border-gray-300 rounded-lg'
											type='text'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>E-mail</label>
									<input
										className='flex p-3 border-2 border-gray-300 rounded-lg'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Subject</label>
									<input
										className='flex p-3 border-2 border-gray-300 rounded-lg'
										type='text'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='py-2 text-sm uppercase'>Message</label>
									<textarea
										className='p-3 border-2 border-gray-300 rounded-lg'
										rows='10'
									/>
								</div>
								<button className='w-full mt-[30px] p-4 text-gray-100 from-[#4dac45] to-[#22255f] '>
									Send message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<div className='p-5 duration-200 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
							<HiOutlineChevronDoubleUp size={30} className='text-[#4dac45]' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Contact
