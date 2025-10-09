import { Carousel } from '../components/Carousel';
import { useState } from 'react';
import Image1 from '/glass/PHOTO-2025-09-30-12-07-29 4.jpg';
import Image2 from '/glass/PHOTO-2025-09-30-12-12-07.jpg';
import Image3 from '/glass/PHOTO-2025-09-30-12-12-12.jpg';

export default function Home() {
    const featuredWorks = [
        {
            title: '1920s Design',
            image: Image1,
            description: 'A beautiful stained glass window.',
        },
        {
            title: 'Modern Classic',
            image: Image2,
            description:
                'An intricate design based on classical geometric patterns.',
        },
        {
            title: 'Victorian Window',
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
                                <p className="text-gray-600 font-light text-sm dark:text-white">
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
            <section className="py-16 px-6 bg-gray-50 dark:bg-[#b3b38b] transition-colors">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-gray-600 dark:text-white font-light leading-relaxed">
                        With over a decade of experience in traditional stained
                        glass techniques, each piece is carefully crafted to
                        capture and transform natural light into breathtaking
                        displays of color and form.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:px-6">
                <div className="md:flex md:flex-col md:items-center md:mx-auto">
                    <h2 className="text-3xl md:text-4xl text-center font-light mb-8 dark:text-[#541818]">
                        Get in Touch
                    </h2>
                    <div className="bg-gray-100 dark:bg-[#b3b38b]/80 p-8 flex flex-col gap-4 md:rounded-2xl md:shadow-xl items-center">
                        <div className="flex items-center gap-4 w-full max-w-md">
                            {/* Instagram Icon */}
                            <span className="inline-flex items-center justify-center w-8 h-8">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="3"
                                        y="3"
                                        width="16"
                                        height="16"
                                        rx="5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <circle
                                        cx="11"
                                        cy="11"
                                        r="4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <circle
                                        cx="16.1"
                                        cy="5.9"
                                        r="1"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <a
                                href="https://www.instagram.com/celestialstainedglass"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-500 dark:text-white dark:hover:text-gray-100 transition-colors text-lg font-light">
                                @celestialstainedglass
                            </a>
                        </div>
                        <div className="flex items-center gap-4 w-full max-w-md">
                            {/* Phone Icon */}
                            <span className="inline-flex items-center justify-center w-8 h-8">
                                <svg
                                    viewBox="0 0 22 22"
                                    height="22"
                                    width="22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.11596 12.7268L8.15456 9.08666C8.46255 8.69067 8.61655 8.49267 8.69726 8.27061C8.76867 8.07411 8.79821 7.86486 8.784 7.65628C8.76793 7.42055 8.67477 7.18766 8.48846 6.72187L7.77776 4.94513C7.50204 4.25581 7.36417 3.91116 7.12635 3.68525C6.91678 3.48618 6.65417 3.3519 6.37009 3.29856C6.0477 3.23803 5.68758 3.32806 4.96733 3.50812L3 4.00002C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3122 20.7617 17.952 20.7012 17.6297C20.6478 17.3456 20.5136 17.083 20.3145 16.8734C20.0886 16.6356 19.7439 16.4977 19.0546 16.222L17.4691 15.5878C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4002C15.4877 15.512 15.2854 15.7144 14.8807 16.1191L11.7943 19.1569"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </span>
                            <a
                                href="tel:+447879445112"
                                className="hover:text-gray-500 dark:text-white dark:hover:text-gray-100 transition-colors text-lg font-light">
                                07879 445 112
                            </a>
                        </div>
                        <div className="flex items-center gap-4 w-full max-w-md">
                            {/* Email Icon */}
                            <span className="inline-flex items-center justify-center w-8 h-8">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="3"
                                        y="5"
                                        width="16"
                                        height="12"
                                        rx="3"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M5 7l6 5 6-5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                            <a
                                href="mailto:celestialstainedglass@googlemail.com"
                                className="hover:text-gray-500 text-sm md:text-lg dark:text-white dark:hover:text-gray-100 transition-colors font-light">
                                celestialstainedglass@googlemail.com
                            </a>
                        </div>
                        <div className="w-full max-w-md">
                            <p className="text-base text-gray-700 dark:text-white mt-6 text-center py-3">
                                Call for a free quote on any size job.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
