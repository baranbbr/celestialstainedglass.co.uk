import { Carousel } from '../components/Carousel';
import { useState } from 'react';
import Image1 from '/glass/A7153D65-E9B9-4821-BE63-E2D51E5E6F2E.jpeg';
import Image2 from '/glass/36519E40-2771-40BD-9081-3E5F0F66500E.jpeg';
import Image3 from '/glass/7EA66149-7A57-402D-8471-2BDA24F26A44.jpeg';

export default function Home() {
    const featuredWorks = [
        {
            title: 'Aurora Window',
            image: Image1,
            description:
                'A beautiful stained glass window depicting the Aurora Borealis.',
        },
        {
            title: 'Sacred Geometry',
            image: Image2,
            description:
                'An intricate design based on sacred geometric patterns.',
        },
        {
            title: 'Light Prism',
            image: Image3,
            description:
                'A stunning display of light and colour through glass.',
        },
    ];
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [initialSlideIndex, setInitialSlideIndex] = useState(0);
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h1
                            className="text-5xl md:text-7xl font-light tracking-wide mb-6 dark:text-[rgb(84,24,24)]"
                            style={{
                                fontFamily:
                                    'Old English Text MT, Times New Roman, serif',
                            }}>
                            Celestial Stained Glass
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-white font-light max-w-2xl mx-auto">
                            Specialising in traditional English styles,
                            Victorian, Edwardian, Art Deco, 1930s, 1940s and
                            contemporary designs.
                        </p>
                        {/* bold words */}
                        <span className="font-bold">
                            DESIGN, FABRICATION, RESTORATION, INSTALLATION
                        </span>
                    </div>

                    {/* Featured Works Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {featuredWorks.map((work, index) => (
                            <div
                                key={work.title}
                                className="group cursor-pointer">
                                <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        onClick={() => {
                                            setInitialSlideIndex(index);
                                            setIsGalleryOpen(true);
                                        }}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-xl font-light mb-2 dark:text-[rgba(84,24,24)]">
                                    {work.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 font-light text-sm dark:text-white">
                                    {work.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                {isGalleryOpen && (
                    <Carousel
                        images={featuredWorks}
                        closeGallery={() => setIsGalleryOpen(false)}
                        initialSlide={initialSlideIndex}
                    />
                )}
            </section>

            {/* About Section */}
            <section className="py-16 px-6 bg-gray-50 dark:bg-[rgb(200,185,175)] transition-colors">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-600 dark:text-white font-light leading-relaxed mb-8">
                        With over a decade of experience in traditional stained
                        glass techniques, each piece is carefully crafted to
                        capture and transform natural light into breathtaking
                        displays of color and form.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-8 dark:text-[rgba(84,24,24)]">
                        Get in Touch
                    </h2>
                    <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                        {/* <p>
                            <span className="font-light">Email:</span>{' '}
                            <a
                                href="mailto:hello@celestialstainedglass.co.uk"
                                className="hover:text-gray-900 dark:hover:text-white transition-colors">
                                hello@celestialstainedglass.co.uk
                            </a>
                        </p> */}
                        <p>
                            <span className="font-light dark:text-white">
                                Instagram:
                            </span>{' '}
                            <a
                                href="https://www.instagram.com/celestialstainedglass"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-900 dark:text-white dark:hover:text-gray-100 transition-colors">
                                @celestialstainedglass
                            </a>
                        </p>
                        <p>
                            <span className="font-light dark:text-white">
                                Phone:
                            </span>{' '}
                            <a
                                href="tel:+447879445112"
                                className="hover:text-gray-900 dark:text-white dark:hover:text-gray-100 transition-colors">
                                07879 445 112
                            </a>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-white mt-6">
                            Call for a free quote on any size job.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
