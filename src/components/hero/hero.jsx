import { Component } from 'react'
import MovieService from '../../services/movie-service'
import Error from '../error/error'
import Spinner from '../spinner/spinner'
import './hero.scss'

class Hero extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: {},
			loading: true,
			error: false,
		}
		this.movieService = new MovieService()
		this.getMovie()
	}

	getMovie = () => {
		this.movieService
			.getRandomMovie()
			.then(res => this.setState({ movie: res }))
			.catch(() => this.setState({ error: true }))
			.finally(() => this.setState({ loading: false }))
	}

	render() {
		const { movie, loading, error } = this.state

		const errorContent = error ? <Error /> : null
		const loadingContent = loading ? <Spinner /> : null
		const content = !(error || loading) ? (
			<Content movie={movie} getMovie={this.getMovie} />
		) : null

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
					{errorContent}
					{loadingContent}
					{content}
				</div>
			</div>
		)
	}
}

export default Hero

const Content = ({ movie, getMovie }) => {
	return (
		<>
			<img src={movie.backdrop_path} alt='img' />

			<div className='hero__movie-descr'>
				<h2>{movie.name}</h2>
				<p>
					{movie.description && movie.description.length > 250
						? `${movie.description.slice(0, 250)}...`
						: movie.description}
				</p>
				<div>
					<button className='btn btn__secondary' onClick={getMovie}>
						Random movies
					</button>
					<button className='btn btn__primary'>Details</button>
				</div>
			</div>
		</>
	)
}
