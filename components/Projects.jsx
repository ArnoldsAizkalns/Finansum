import EtqImg from '../public/assets/projectsDone/Screenshot (5).png'
import SkaiImg from '../public/assets/projectsDone/Screenshot (6).png'
import MikiyaImg from '../public/assets/projectsDone/Screenshot (7).png'
import EtchImg from '../public/assets/projectsDone/Screenshot (9).png'
import ProjectItem from './ProjectItem'

const Projects = () => {
	return (
		<div id='projects' className='w-full pt-[85px] md:h-screen'>
			<div className='max-w-[1240px] mx-auto px-2 '>
				<p className='text-xl tracking-widest uppercase text-[#4dac45]'>
					Projects
				</p>
				<h2 className='py-4'>What we do!</h2>
				<div className='grid gap-8 md:grid-cols-2'>
					<ProjectItem
						title='ETQ clothing brand'
						backgroundImg={EtqImg}
						projectUrl='/property'
					/>
					<ProjectItem
						title='Skai'
						backgroundImg={SkaiImg}
						projectUrl='/property'
					/>
					<ProjectItem
						title='Mikiya'
						backgroundImg={MikiyaImg}
						projectUrl='/property'
					/>
					<ProjectItem
						title='Etch software'
						backgroundImg={EtchImg}
						projectUrl='/property'
					/>
				</div>
			</div>
		</div>
	)
}

export default Projects
