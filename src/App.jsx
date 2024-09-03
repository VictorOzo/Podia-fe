import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Examples from './components/pages/Examples';
import Pricing from './components/pages/Pricing';
import Demo from './components/pages/Demo';
import Resources from './components/pages/Resources';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='features' element={<Features />} />
				<Route path='examples' element={<Examples />} />
				<Route path='pricing' element={<Pricing />} />
				<Route path='demo' element={<Demo />} />
				<Route path='resources' element={<Resources />} />
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<Signup />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
