import { Link } from 'react-router-dom';
import heroImg from '../images/heroImg.png';
const Home = () => {
	return (
		<div className='flex px-6 mx-auto heroSection max-w-[1220px] my-[80px]'>
			<div className='heroText w-[100%]'>
				<p className='text-left text-[#9c8881]'>Digital Products</p>
				<h2 className='text-[55px] text-left w-[600px] font-semibold leading-[70px]'>
					Sell online courses, coaching sessions, webinars, workshops,
					ebooks, and anything you can think of on Podia
				</h2>
				<p className='text-[#5c5856] text-left mb-[30px] text-[20px]'>
					Get everything you need in one place that you own. Podia takes
					care of hosting products, taking payments, and getting products
					to your customers. And you always control your own work.
				</p>
				<Link
					to='/'
					className='p-[20px] text-[20px] bg-[#4b2aad] text-[#fff] rounded-[30px]'>
					Get your free Account
				</Link>
			</div>
			<div className='heroImg w-[100%]'>
				<img src={heroImg} alt='img' className='rounded-[10px]' />
			</div>
		</div>
	);
};

export default Home;
