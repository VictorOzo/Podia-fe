import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div className='container px-4 py-[10px] mx-auto'>
				<div className='flex items-center justify-between nav'>
					<div className='navlinks'>
						<ul className='p-[12px]'>
							<Link to='/'>
								<span>podia</span>
							</Link>
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
			</div>
		</nav>
	);
};

export default Navbar;
