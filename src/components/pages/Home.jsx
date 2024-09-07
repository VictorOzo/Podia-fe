import { Link } from 'react-router-dom';
import heroImg from '../images/heroImg.png';
import prod1 from '../images/prod1.png';
import prod2 from '../images/prod2.png';
import prod3 from '../images/prod3.png';

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

			{/* Podia info Section */}
			<div className='info max-w-[1220px] mx-auto'>
				<div className='text-center infoheading'>
					<h1>
						All you have to do is make the product. Podia takes care of
						the details for you.
					</h1>
					<p>
						Podia lets you make your sales page, take payments, and give
						your customers access all in one place. Host and sell your
						products without needing to figure out a handful of new tools.
					</p>
					<div className='flex text-center infoType'>
						<div className='info1'>
							<h2>Checkout and sales are handled for you</h2>
							<p>
								You don’t have to figure out a bunch of tools or website
								embeds. Just connect a payment provider and your Podia
								site takes care of payments for you.
							</p>
						</div>
						<div className='info2'>
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
						<div className='info3'>
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

			{/* Products Section */}
			<div className='products'>
				<div className='prodHeading'>
					<h1>What kinds of products can you sell with Podia?</h1>
					<p>
						Podia gives you the flexibility to sell whatever you want.
						That means you have more ways to grow your creator business.
					</p>
				</div>
				<div className='prod1'>
					<div className='flex prodInfo'>
						<div className='prodText'>
							<p>ONLINE COURSES</p>
							<h2>Beautiful online courses you can build in moments</h2>
							<p>
								Make a beautiful online course for your customers. Podia
								hosts your course. That means all the lessons, files,
								and videos you want handled for you.
							</p>
							<Link>Learn more about courses →</Link>
						</div>
						<div className='prodImg'>
							<img src={prod1} alt='' />
						</div>
					</div>
					<div className='prodTest'>
						<p>
							I’ve wanted to offer e-courses for a while but always felt
							overwhelmed with how to set it up. Podia has made it super
							easy.
						</p>
						<p>— Joy Cho, Oh Joy! Academy</p>
					</div>
				</div>
				<div className='prod2'>
					<div className='flex prodInfo'>
						<div className='prodText'>
							<p>Digital downloads</p>
							<h2>
								Ebooks, templates, and any file type you can think of
							</h2>
							<p>
								Have an ebook to sell? Templates you love? Podia makes
								it easy to spin up a sales page and sell ebooks,
								templates, audio files, video files, spreadsheets, and
								any other file type.
							</p>
							<Link>Learn more about downloads →</Link>
						</div>
						<div className='prodImg'>
							<img src={prod2} alt='' />
						</div>
					</div>
					<div className='prodTest'>
						<p>
							We didn’t have to stress about technical details or custom
							coding. Using Podia made selling our first eBook quick,
							efficient, and fun.
						</p>
						<p>— Matt & Steph, Plant-based food bloggers</p>
					</div>
				</div>
				<div className='prod3'>
					<div className='flex prodInfo'>
						<div className='prodText'>
							<p>Coaching</p>
							<h2>
								One-on-one coaching and consultations, with billing
								managed for you
							</h2>
							<p>
								Sometimes your students want one-on-one attention. Podia
								makes it easy for you to charge for coaching sessions
								and consultations.
							</p>
							<Link>Learn more about coaching →</Link>
						</div>
						<div className='prodImg'>
							<img src={prod3} alt='' />
						</div>
					</div>
					<div className='prodTest'>
						<p>
							Podia just works. It’s easy to use and includes everything
							you need to sell digital products. I’ve tried all the
							alternatives, and Podia is hard to beat.
						</p>
						<p>— Shawn Leamon, Divorce and Your Money</p>
					</div>
				</div>
			</div>

			{/* Call to action section */}
			<div className='callToAction'>
				<h2>Get your free Podia account</h2>
				<p>
					Join the 150,000+ creators who use Podia to create websites, sell
					digital products, and build online communities.
				</p>
				<Link>Sign up free</Link>
			</div>
		</>
	);
};

export default Home;
