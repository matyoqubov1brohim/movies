import './navbar.scss'
import logoText from '/logo-text.svg'
import logo from '/logo.svg'

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar__logo'>
				<a href='#'>
					<img src={logo} alt='Logo' />
					<img src={logoText} alt='Logo Text' />
				</a>
			</div>

			<nav className='navbar__menu'>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>Tv SHows</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
