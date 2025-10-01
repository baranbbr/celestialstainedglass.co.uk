import { Galleria } from 'primereact/galleria'
import { useRef } from 'react'

export default function Home() {
	const featuredWorks = [
		{
			id: 1,
			title: 'Aurora Window',
			image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
			description: 'Contemporary stained glass design',
		},
		{
			id: 2,
			title: 'Sacred Geometry',
			image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
			description: 'Traditional craftsmanship meets modern art',
		},
		{
			id: 3,
			title: 'Light Prism',
			image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
			description: 'Playing with color and light',
		},
	]
	const itemTemplate = (item: any) => (
		<img
			src={item.image}
			alt={item.description}
			style={{ width: '100%', display: 'block' }}
		/>
	)
	const thumbnailTemplate = (item: any) => (
		<div className='grid grid-nogutter justify-content-center'>
			<img
				src={item.image}
				alt={item.description}
				style={{ display: 'block' }}
			/>
		</div>
	)

	const galleria = useRef<Galleria>(null)

	return (
		<div className='min-h-screen'>
			{/* Hero Section */}
			<section className='pt-32 pb-16 px-6'>
				<div className='max-w-7xl mx-auto'>
					<div className='text-center mb-16'>
						<h1 className='text-5xl md:text-7xl font-light tracking-wide mb-6 dark:text-white'>
							Celestial Stained Glass
						</h1>
						<p className='text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto'>
							Specializing in traditional English styles,
							Victorian, Edwardian, Art Deco, 1930s, 1940s and
							contemporary designs.
						</p>
						{/* bold words */}
						<span className='font-bold'>
							DESIGN, FABRICATION, RESTORATION, INSTALLATION
						</span>
					</div>

					{/* Featured Works Grid */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
						{featuredWorks.map((work) => (
							<div key={work.id} className='group cursor-pointer'>
								<div className='aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4'>
									<img
										src={work.image}
										alt={work.description}
										onClick={() => galleria.current?.show()}
										className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
									/>
								</div>
								<h3 className='text-xl font-light mb-2 dark:text-white'>
									{work.title}
								</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400'>
									{work.description}
								</p>
							</div>
						))}
					</div>
				</div>
				<Galleria
					ref={galleria}
					value={[featuredWorks.map((work) => work.image)]}
					responsiveOptions={[]}
					numVisible={9}
					style={{ maxWidth: '50%' }}
					circular
					fullScreen
					showItemNavigators
					item={itemTemplate}
					thumbnail={thumbnailTemplate}
				/>
			</section>

			{/* About Section */}
			<section className='py-16 px-6 bg-gray-50 dark:bg-gray-800 transition-colors'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-light mb-6 dark:text-white'>
						About the Artist
					</h2>
					<p className='text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-8'>
						With over a decade of experience in traditional stained
						glass techniques, each piece is carefully crafted to
						capture and transform natural light into breathtaking
						displays of color and form.
					</p>
				</div>
			</section>

			{/* Contact Section */}
			<section className='py-16 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-3xl md:text-4xl font-light mb-8 dark:text-white'>
						Get in Touch
					</h2>
					<div className='space-y-4 text-lg text-gray-600 dark:text-gray-300'>
						<p>
							<span className='font-light'>Email:</span>{' '}
							<a
								href='mailto:hello@celestialstainedglass.co.uk'
								className='hover:text-gray-900 dark:hover:text-white transition-colors'>
								hello@celestialstainedglass.co.uk
							</a>
						</p>
						<p>
							<span className='font-light'>Phone:</span>{' '}
							<a
								href='tel:+447879445112'
								className='hover:text-gray-900 dark:hover:text-white transition-colors'>
								07879 445 112
							</a>
						</p>
						<p className='text-sm text-gray-500 dark:text-gray-400 mt-6'>
							Available for commissions and custom projects
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
