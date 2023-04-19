import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
	return (
		<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#4dac45] to-[#22255f]'>
			<Image
				className='rounded-xl group-hover:opacity-10'
				src={backgroundImg}
				alt='/'
			/>
			<div className='absolute hidden group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
				<h3 className='text-2xl text-center text-white'>{title}</h3>
				<p className='pt-2 pb-4 text-center text-white'>Next JS</p>
				<Link href={projectUrl}>
					<p className='text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer py3'>
						More Info
					</p>
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem
