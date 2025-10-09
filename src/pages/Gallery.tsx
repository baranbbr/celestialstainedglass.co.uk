import { useState } from 'react';
import galleryImages from '../data/manual.json';
import { Carousel } from '../components/Carousel';

const images: GalleryImage[] = galleryImages as GalleryImage[];
export default function Gallery() {
    // Map gallery image objects to gallery item objects
    const base = import.meta.env.BASE_URL || '/';
    const galleryItems: GalleryImage[] = images.map((img: GalleryImage) => ({
        image: `${base}glass/${img.image}`,
        caption: img.caption,
    }));
    console.log('Gallery items:', galleryItems);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [initialSlideIndex, setInitialSlideIndex] = useState(0);
    return (
        <div className="min-h-screen pt-32 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1
                        className="text-4xl md:text-7xl font-light tracking-wide mb-6 dark:text-[rgb(84,24,24)]"
                        style={{
                            fontFamily:
                                'Old English Text MT, Times New Roman, serif',
                        }}>
                        Gallery
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-white font-light max-w-2xl mx-auto">
                        A collection of handcrafted stained glass artworks.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, index) => (
                        <div
                            key={`gallery-item-${index}`} // Added unique key
                            className="group"
                            style={{
                                animationDelay: `${index * 50}ms`,
                            }}>
                            <div className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4 cursor-pointer">
                                <img
                                    src={item.image}
                                    alt={item.caption}
                                    onClick={() => {
                                        setInitialSlideIndex(index);
                                        setIsGalleryOpen(true);
                                        console.log(
                                            'Opening gallery at index:',
                                            index
                                        );
                                    }}
                                    // className="aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            {item.caption && (
                                <div className="mt-4">
                                    <h3 className="text-lg font-light dark:text-white">
                                        {item.caption}
                                    </h3>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {isGalleryOpen && (
                <Carousel
                    images={galleryItems}
                    closeGallery={() => setIsGalleryOpen(false)}
                    initialSlide={initialSlideIndex}
                />
            )}
        </div>
    );
}
