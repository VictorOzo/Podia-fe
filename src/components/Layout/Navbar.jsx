import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='nav flex '>
			<div className='navlinks'>
				<Link to='/'>
					<span>PODIA</span>
				</Link>
				<ul>
					<Link to='features'>Features</Link>
					<Link to='examples'>Examples</Link>
					<Link to='pricing'>Pricing</Link>
					<Link to='demo'>Demo</Link>
					<Link to='resources'>Resources</Link>
				</ul>
			</div>
			<div className='navbtn'>
				<Link to='login'>
					<button>Login</button>
				</Link>
				<Link to='signup'>
					<button>Sign Up</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
