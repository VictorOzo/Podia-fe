import { Link } from 'react-router-dom';
import heroImg from '../images/heroImg.png';
const Home = () => {
	return (
		<>
			{/* Hero Section */}
			<div className='flex px-6 mx-auto heroSection max-w-[1220px] my-[80px]'>
				<div className='heroText w-[100%]'>
					<p className='text-left text-[#9c8881]'>Digital Products</p>
					<h2 className='text-[55px] text-left w-[600px] font-semibold leading-[70px]'>
						Sell online courses, coaching sessions, webinars, workshops,
						ebooks, and anything you can think of on Podia
					</h2>
					<p className='text-[#5c5856] text-left mb-[30px] text-[20px]'>
						Get everything you need in one place that you own. Podia takes
						care of hosting products, taking payments, and getting
						products to your customers. And you always control your own
						work.
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

			{/* Products Section */}
			<div className='products'>
				<div className='text-center prodheading'>
					<h1>
						All you have to do is make the product. Podia takes care of
						the details for you.
					</h1>
					<p>
						Podia lets you make your sales page, take payments, and give
						your customers access all in one place. Host and sell your
						products without needing to figure out a handful of new tools.
					</p>
					<div className='flex text-center prodType'>
						<div className='prod1'>
							<h2>Checkout and sales are handled for you</h2>
							<p>
								You don’t have to figure out a bunch of tools or website
								embeds. Just connect a payment provider and your Podia
								site takes care of payments for you.
							</p>
						</div>
						<div className='prod2'>
							<h2>
								Your customers log in, and your products are there for
								them
							</h2>
							<p>
								Your Podia site handles access to products for you.
								Everything is in one place. When your customers buy a
								product, they get a log in. After that, they can see all
								the products they’ve bought from you.
							</p>
						</div>
						<div className='prod3'>
							<h2>Checkout and sales are handled for you</h2>
							<p>
								You could sell a digital product by this afternoon.
								Podia handles hosting, sales pages, checkout, and
								delivery. All you need is something to sell.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
