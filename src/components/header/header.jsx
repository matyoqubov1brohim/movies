import { navbar_links } from '../../constants'
import './header.scss'

const Header = () => {
	return (
		<div className='app__header'>
			<h1 className='app__logo'>
				<a href='#'>
					<img src='/logo.svg' alt='logo' />
					<img src='/logo-text.svg' alt='logo-text' />
				</a>
			</h1>
			<nav className='app__menu'>
				<ul>
					{navbar_links.map(item => (
						<li key={item.label}>
							<a href='#'>{item.label}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Header
