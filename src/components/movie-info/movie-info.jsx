import PropTypes from 'prop-types'
import { Component } from 'react'
import MovieService from '../../services/movie-service'
import Error from '../error/error'
import Spinner from '../spinner/spinner'
import './movie-info.scss'

class MovieInfo extends Component {
	state = {
		movie: null,
		loading: true,
		error: false,
	}

	movieService = new MovieService()

	componentDidMount() {
		this.updateMovie()
	}

	componentDidUpdate(prevProps) {
		if (this.props.movieId !== prevProps.movieId) {
			this.updateMovie()
		}
	}

	updateMovie = () => {
		const { movieId } = this.props
		if (!movieId) {
			return
		}

		this.setState({ loading: true })

		this.movieService
			.getDetailedMovie(movieId)
			.then(res => this.setState({ movie: res }))
			.catch(() => this.setState({ error: true }))
			.finally(() => this.setState({ loading: false }))
	}

	render() {
		const { movie, loading, error } = this.state

		const errorContent = error ? <Error /> : null
		const loadingContent = loading ? <Spinner /> : null
		const content = !(error || loading || !movie) ? (
			<Content movie={movie} />
		) : null

		return (
			<div className='movieinfo'>
				{errorContent}
				{loadingContent}
				{content}
			</div>
		)
	}
}
MovieInfo.propTypes = {
	movieId: PropTypes.number,
}

export default MovieInfo

const Content = ({ movie }) => {
	return (
		<>
			<div>
				<img src={movie.backdrop_path} alt='img' />
			</div>
			<div className='hero-moive__descr'>
				<h2>{movie.name}</h2>
				<p>{movie.description}</p>
			</div>
		</>
	)
}

Content.propTypes = {
	movie: PropTypes.object,
}
