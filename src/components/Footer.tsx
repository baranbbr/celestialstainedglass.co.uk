const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p>
                    &copy; {new Date().getFullYear()} Celestial Stained Glass.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
