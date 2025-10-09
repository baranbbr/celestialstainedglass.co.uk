import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const currentPage = location.pathname.includes('/gallery')
        ? 'gallery'
        : 'home';

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[rgb(200,200,175)]/80 backdrop-blur-sm transition-colors">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="md:flex md:items-center md:justify-between">
                    <Link
                        to="/"
                        className="hidden md:inline text-xl font-light tracking-wider hover:opacity-70 transition-opacity dark:text-white"
                        style={{
                            fontFamily:
                                'Old English Text MT, Times New Roman, serif',
                        }}>
                        Celestial Stained Glass
                    </Link>
                    <div className="flex gap-8 justify-between">
                        <Link
                            to="/"
                            className={`text-sm tracking-wide transition-opacity dark:text-white ${
                                currentPage === 'home'
                                    ? 'opacity-100 font-medium'
                                    : 'opacity-50 hover:opacity-100'
                            }`}>
                            Home
                        </Link>
                        <Link
                            to="/gallery"
                            className={`text-sm tracking-wide transition-opacity dark:text-white ${
                                currentPage === 'gallery'
                                    ? 'opacity-100 font-medium'
                                    : 'opacity-50 hover:opacity-100'
                            }`}>
                            Gallery
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
