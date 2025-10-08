import { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    imgClassName?: string;
    className?: string;
}

export default function LazyImage({
    src,
    alt,
    className = '',
    imgClassName = '',
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                        observer.disconnect();
                    }
                });
            },
            {
                rootMargin: '100px',
            }
        );

        observer.observe(imgRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={imgRef}
            className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
            {isInView && (
                <>
                    <img
                        src={src}
                        alt={alt}
                        loading="lazy"
                        onLoad={() => setIsLoaded(true)}
                        className={`${imgClassName} ${
                            isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-600 dark:border-t-gray-300 rounded-full animate-spin" />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
