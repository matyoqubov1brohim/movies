import './movie-info.scss'

const MovieInfo = () => {
	return (
		<div className='movieinfo'>
			<img src='/image1.svg' alt='movie' />
			<div className='movieinfo__descr'>
				<h1>Movie Title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor
					officia fugiat odio unde architecto laboriosam facere harum soluta
					vero nobis aliquid quis omnis illum veniam modi tempora, quam porro!
				</p>
			</div>
		</div>
	)
}

export default MovieInfo
