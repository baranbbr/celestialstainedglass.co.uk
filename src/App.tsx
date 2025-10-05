import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-[rgb(200,200,175)] transition-colors">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
}

export default App;
