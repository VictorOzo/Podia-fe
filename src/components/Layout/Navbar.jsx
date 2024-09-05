import { Link } from 'react-router-dom';
import { useState } from 'react';
import hamburger from '../images/hamburger.png';
import '../styles/navbar.css';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav>
			<div className='container px-6 mx-auto py-7'>
				<div className='flex items-center justify-between nav '>
					<div className='navlinks '>
						<ul>
							<Link to='/'>podia</Link>
							<Link to='features'>Features</Link>
							<Link to='examples'>Examples</Link>
							<Link to='pricing'>Pricing</Link>
							<Link to='demo'>Demo</Link>
							<Link to='resources'>Resources</Link>
						</ul>
					</div>
					<div className='navbtn'>
						<Link to='login'>Login</Link>
						<Link to='signup'>Sign Up </Link>
					</div>
					<div className='lg:hidden hamburger'>
						<img src={hamburger} className='w-[20px]' />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
