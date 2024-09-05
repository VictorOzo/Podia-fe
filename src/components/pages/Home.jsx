import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className='px-6 mx-auto heroSection'>
			<div className='heroText '>
				<p>Digital Products</p>
				<h2>
					Sell online courses, coaching sessions, webinars, workshops,
					ebooks, and anything you can think of on Podia
				</h2>
				<p>
					Get everything you need in one place that you own. Podia takes
					care of hosting products, taking payments, and getting products
					to your customers. And you always control your own work.
				</p>
				<Link to='/'>Get your free Account</Link>
			</div>
			<div className='heroImg'></div>
		</div>
	);
};

export default Home;
