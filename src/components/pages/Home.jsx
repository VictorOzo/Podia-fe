import { Link } from 'react-router-dom';
import heroImg from '../images/heroImg.png';
import prod1 from '../images/prod1.png';
import prod2 from '../images/prod2.png';
import prod3 from '../images/prod3.png';
import cart from '../images/cart.png';
import login from '../images/login.png';
import upload from '../images/upload.png';

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
			<div className='info max-w-[1220px] mx-auto mb-[120px]'>
				<div className='text-center infoheading'>
					<h1 className='w-[750px] mx-auto font-semibold text-4xl '>
						All you have to do is make the product. Podia takes care of
						the details for you.
					</h1>
					<p className='text-[#5c5856] text-[18px] w-[870px] mx-auto leading-[35px] mb-[100px]'>
						Podia lets you make your sales page, take payments, and give
						your customers access all in one place. Host and sell your
						products without needing to figure out a handful of new tools.
					</p>
					<div className='flex text-center infoType '>
						<div className='mx-auto info1'>
							<div className='infoimg flex items-center justify-center w-[50px] h-[50px]  bg-[#f5efeb] rounded-[50%] mx-auto'>
								<img src={cart} alt='' className='w-[20px] ' />
							</div>
							<h2 className='w-[300px] text-[18px] mb-[30px] font-semibold leading-6 mx-auto '>
								Checkout and sales are handled for you
							</h2>
							<p className='text-[#5c5856] w-[269px]'>
								You don’t have to figure out a bunch of tools or website
								embeds. Just connect a payment provider and your Podia
								site takes care of payments for you.
							</p>
						</div>
						<div className='mx-auto info2'>
							<div className='infoimg infoimg flex items-center justify-center w-[50px] h-[50px]  bg-[#f5efeb] rounded-[50%] mx-auto'>
								<img src={login} alt='' className='w-[20px] ' />
							</div>
							<h2 className='w-[270px] text-[18px] mb-[30px] font-semibold leading-6 mx-auto '>
								Your customers log in, and your products are there for
								them
							</h2>
							<p className='text-[#5c5856] w-[269px]'>
								Your Podia site handles access to products for you.
								Everything is in one place. When your customers buy a
								product, they get a log in. After that, they can see all
								the products they’ve bought from you.
							</p>
						</div>
						<div className='mx-auto info3'>
							<div className='infoimg infoimg flex items-center justify-center w-[50px] h-[50px]  bg-[#f5efeb] rounded-[50%] mx-auto'>
								<img src={upload} alt='' className='w-[20px] ' />
							</div>
							<h2 className='w-[270px] text-[18px] mb-[30px] font-semibold leading-6 mx-auto '>
								Checkout and sales are handled for you
							</h2>
							<p className='text-[#5c5856] w-[269px]'>
								You could sell a digital product by this afternoon.
								Podia handles hosting, sales pages, checkout, and
								delivery. All you need is something to sell.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Products Section */}
			<div className='products max-w-[1220px] mx-auto mb-[120px]'>
				<div className='text-center prodHeading'>
					<h2 className=' w-[780px] mx-auto font-semibold text-4xl mb-[20px]'>
						What kinds of products can you sell with Podia?
					</h2>
					<p className='text-[#5c5856] text-[20px] w-[870px] mx-auto leading-[35px] mb-[100px]'>
						Podia gives you the flexibility to sell whatever you want.
						That means you have more ways to grow your creator business.
					</p>
				</div>
				<div className=' prod1'>
					<div className='flex prodInfo'>
						<div className='prodText'>
							<p className='text-[#5c5856] text-[0.666667rem] tracking-[.1rem] font-semibold'>
								ONLINE COURSES
							</p>
							<h2 className='text-[20px] font-semibold leading-[1.5rem]'>
								Beautiful online courses you can build in moments
							</h2>
							<p className='w-[450px] text-[#5c5856] text-[16px] leading-[1.8rem]'>
								Make a beautiful online course for your customers. Podia
								hosts your course. That means all the lessons, files,
								and videos you want handled for you.
							</p>
							<div className='prodLink w-[250px] text-[#4b2aad] font-semibold text-[1rem]'>
								<Link>Learn more about courses →</Link>
							</div>
						</div>
						<div className='prodImg '>
							<img
								src={prod1}
								alt=''
								className=' w-[540px] rounded-[15px]'
							/>
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
