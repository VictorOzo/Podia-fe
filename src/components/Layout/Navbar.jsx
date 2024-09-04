import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className='container px-6 py-7 mx-auto'>
				<div className='flex items-center justify-between nav'>
					<div className='navlinks'>
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
