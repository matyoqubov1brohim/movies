import React from 'react'
import './footer.scss'

const Footer = () => {
	return (
		<footer className='app__footer'>
			<div className='app__footer-content'>
				<div className='app__footer-top'>
					<ul className='app__footer-links'>
						<li>
							<a href='#'>Trending</a>
						</li>
						<li>
							<a href='#'>Popular</a>
						</li>
						<li>
							<a href='#'>Tv Shows</a>
						</li>
					</ul>

					<div className='app__footer-logo'>
						<img src='/logo.svg' alt='logo' />
						<img src='/logo-text.svg' alt='logo text' />
					</div>
				</div>

				<p className='app__footer-copy'>
					© {new Date().getFullYear()} FindMovies. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
