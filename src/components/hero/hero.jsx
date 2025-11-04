import './hero.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__info'>
				<h2>FIND MOVIES</h2>
				<h1>Tv shows and more</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
					fugit illo. Facere, delectus deserunt qui ex, error voluptas modi
					totam minus harum labore iste inventore provident sit? Iusto, sint
					eius!
				</p>
				<button className='btn btn__primary'>Details</button>
			</div>
			<div className='hero__movie'>
				<img src='/image1.svg' alt='img' />

				<div className='hero__movie-descr'>
					<h2>Madellin</h2>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Perferendis nobis sit explicabo ipsam iure ullam perspiciatis
						accusamus, qui cum sapiente odio dicta consequuntur ut adipisci
						harum? Iure ipsa perspiciatis facere!
					</p>
					<div>
						<button className='btn btn__secondary'>Random movies</button>
						<button className='btn btn__primary'>Details</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
