import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';

// Reusable Next/Prev Button component
const EmblaCarouselButton = ({
    children,
    onClick,
    disabled,
    className,
}: any) => (
    <button
        className={`absolute z-10 p-3 bg-white/70 hover:bg-white transition-colors rounded-full shadow-lg ${className}`}
        onClick={onClick}
        disabled={disabled}
        aria-label={children === '→' ? 'Next Slide' : 'Previous Slide'}>
        {children}
    </button>
);

export function Carousel({
    featuredWorks,
    closeGallery,
    initialSlide = 0,
}: any) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        startIndex: initialSlide,
    });

    // Custom hook to handle Next/Prev button logic
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const handleClose = useCallback(() => {
        if (closeGallery) closeGallery();
    }, [closeGallery]);

    useEffect(() => {
        const handleKeydown = (event: any) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleKeydown);

        return () => {
            document.removeEventListener('keydown', handleKeydown);
        };
    }, [handleClose]); // Use handleClose as the dependency

    return (
        // 1. Fullscreen Overlay Container
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={handleClose}>
            {/* 2. Main Carousel Area (Prevent clicks from closing the gallery) */}
            <div
                className="relative w-full max-w-5xl aspect-[3/2] mx-auto"
                onClick={(e) => e.stopPropagation()}>
                {/* 3. Embla Viewport */}
                <div className="overflow-hidden h-full" ref={emblaRef}>
                    {/* 4. Embla Container (Handles the sliding) */}
                    <div className="flex h-full">
                        {featuredWorks.map((item: any) => (
                            // 5. Embla Slide
                            <div
                                className="embla__slide flex-shrink-0 w-full h-full min-w-0 px-2"
                                key={item.id}>
                                <div className="flex justify-center items-center h-full">
                                    <img
                                        src={item.image}
                                        alt={item.description}
                                        className="max-h-full max-w-full object-contain shadow-2xl rounded-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. Navigation Buttons */}
                <EmblaCarouselButton
                    className="left-4 top-1/2 -translate-y-1/2"
                    onClick={scrollPrev}>
                    ←
                </EmblaCarouselButton>
                <EmblaCarouselButton
                    className="right-4 top-1/2 -translate-y-1/2"
                    onClick={scrollNext}>
                    →
                </EmblaCarouselButton>

                {/* 7. Close Button */}
                <button
                    className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors"
                    onClick={handleClose}
                    aria-label="Close Gallery">
                    &times;
                </button>
            </div>
        </div>
    );
}
