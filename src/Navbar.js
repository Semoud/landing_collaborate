const Navbar = () => {
	const openMenu = () => {
		const menuWrapper = document.querySelector('#menu-wrapper');
		menuWrapper.classList.remove('-left-full');
		menuWrapper.classList.add('left-0');
	};

	const closeMenu = () => {
		const menuWrapper = document.querySelector('#menu-wrapper');
		menuWrapper.classList.remove('left-0');
		menuWrapper.classList.add('-left-full');
	};

	return (
		<nav className='py-4'>
			<div className='main-container flex items-center justify-between'>
				<div className='flex items-center'>
					<img onClick={openMenu} className='mr-6 max-w-[20px] cursor-pointer lg:hidden' src='./assets/menu-m.svg' alt='menu button' />
					<a href='http://www.semoud.com/portfolio'>
						<img className='max-w-[125px]' src='./assets/logo.svg' alt='WeWork logo' />
					</a>
				</div>
				<div className='flex items-center'>
					<div id='menu-wrapper' className='absolute top-0 -left-full lg:left-0 flex h-full w-full flex-col bg-white px-12 lg:relative lg:mx-0 lg:flex lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:bg-transparent'>
						<div onClick={closeMenu} className='cursor-pointer py-8 lg:hidden'>
							<svg className='w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
								<path d='M224 222.1L407 39.03C416.4 29.66 431.6 29.66 440.1 39.03C450.3 48.4 450.3 63.6 440.1 72.97L257.9 256L440.1 439C450.3 448.4 450.3 463.6 440.1 472.1C431.6 482.3 416.4 482.3 407 472.1L224 289.9L40.97 472.1C31.6 482.3 16.4 482.3 7.029 472.1C-2.343 463.6-2.343 448.4 7.029 439L190.1 256L7.029 72.97C-2.343 63.6-2.343 48.4 7.029 39.03C16.4 29.66 31.6 29.66 40.97 39.03L224 222.1z' />
							</svg>
						</div>
						<a className='nav-link lg:hidden' href='http://www.semoud.com/portfolio'>
							Home
						</a>
						<a className='nav-link' href='http://www.semoud.com/portfolio'>
							Locations
						</a>
						<a className='nav-link' href='http://www.semoud.com/portfolio'>
							Solutions
						</a>
						<a className='nav-link' href='http://www.semoud.com/portfolio'>
							Enterprise
						</a>
						<a className='nav-link' href='http://www.semoud.com/portfolio'>
							Ideas
						</a>
					</div>
					<a className='mr-4 hidden border border-black py-2 px-5 sm:block' href='http://www.semoud.com/portfolio'>
						Login
					</a>
					<a className='hidden border-0 border-blue-700 bg-blue-700 py-2 px-5 text-white sm:block' href='http://www.semoud.com/portfolio'>
						Contact Us
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
