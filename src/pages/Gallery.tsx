import LazyImage from '../components/LazyImage'

export default function Gallery() {
	const galleryItems = [
		{
			id: 1,
			title: 'Aurora Window',
			image: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&q=80',
			year: '2024',
		},
		{
			id: 2,
			title: 'Sacred Geometry',
			image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80',
			year: '2024',
		},
		{
			id: 3,
			title: 'Light Prism',
			image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80',
			year: '2023',
		},
		{
			id: 4,
			title: 'Celestial Dance',
			image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80',
			year: '2023',
		},
		{
			id: 5,
			title: 'Morning Light',
			image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
			year: '2023',
		},
		{
			id: 6,
			title: 'Ethereal Patterns',
			image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&q=80',
			year: '2022',
		},
		{
			id: 7,
			title: 'Rainbow Cathedral',
			image: 'https://images.unsplash.com/photo-1551732998-9d98c4d6d6b5?w=800&q=80',
			year: '2022',
		},
		{
			id: 8,
			title: 'Prismatic Dreams',
			image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
			year: '2022',
		},
		{
			id: 9,
			title: 'Stained Reflections',
			image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&q=80',
			year: '2021',
		},
		{
			id: 10,
			title: 'Luminous Mosaic',
			image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&q=80',
			year: '2021',
		},
		{
			id: 11,
			title: 'Color Symphony',
			image: 'https://images.unsplash.com/photo-1557672199-6ba4b7b5f5e0?w=800&q=80',
			year: '2021',
		},
		{
			id: 12,
			title: 'Glass Poetry',
			image: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?w=800&q=80',
			year: '2020',
		},
	]

	return (
		<div className='min-h-screen pt-32 pb-16 px-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-light tracking-wide mb-4 dark:text-white'>
						Gallery
					</h1>
					<p className='text-lg text-gray-600 dark:text-gray-300 font-light'>
						A collection of handcrafted stained glass artworks
					</p>
				</div>

				{/* Masonry-style Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{galleryItems.map((item, index) => (
						<div
							key={item.id}
							className='group cursor-pointer'
							style={{
								animationDelay: `${index * 50}ms`,
							}}>
							<LazyImage
								src={item.image}
								alt={item.title}
								className='aspect-[3/4] group-hover:shadow-2xl transition-shadow duration-300'
							/>
							<div className='mt-4'>
								<h3 className='text-lg font-light dark:text-white'>
									{item.title}
								</h3>
								<p className='text-sm text-gray-500 dark:text-gray-400'>
									{item.year}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
