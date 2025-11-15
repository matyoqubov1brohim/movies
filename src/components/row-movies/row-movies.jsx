import PropTypes from 'prop-types'
import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import MovieService from '../../services/movie-service'
import Error from '../error/error'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import Spinner from '../spinner/spinner'
import './row-movies.scss'

class RowMovies extends React.Component {
	state = {
		movies: [],
		open: false,
		loading: true,
		error: false,
		movieId: null,
		page: 2,
		newItemLoading: false,
	}

	movieService = new MovieService()

	componentDidMount() {
		this.getTrendingMovies()
	}

	onClose = () => this.setState({ open: false })

	onOpen = id => this.setState({ open: true, movieId: id })

	getTrendingMovies = page => {
		this.movieService
			.getTrendingMovies(page)
			.then(res =>
				this.setState(({ movies }) => ({ movies: [...movies, ...res] }))
			)
			.catch(() => this.setState({ error: true }))
			.finally(() => this.setState({ loading: false, newItemLoading: false }))
	}

	getMoreMovies = () => {
		this.setState(({ page }) => ({ page: page + 1, newItemLoading: true }))
		this.getTrendingMovies(this.state.page)
	}

	render() {
		const { open, movies, error, loading, movieId, newItemLoading } = this.state

		const errorContent = error ? <Error /> : null
		const loadingContent = loading ? <Spinner width='100px' /> : null
		const content = !(error || loading) ? (
			<Content movies={movies} onOpen={this.onOpen} />
		) : null

		return (
			<div className='app__rowmovie'>
				<div className='app__rowmovie-top'>
					<div className='app__rowmovie-top__title'>
						<img src='/tranding.svg' alt='' />
						<h1>Trending</h1>
					</div>
					<div className='hr' />
					<a href='#'>See more</a>
				</div>

				{errorContent}
				{loadingContent}
				{content}

				{error ? null : (
					<div className='app__rowmovie-loadmore'>
						<button
							className='btn btn__secondary'
							onClick={this.getMoreMovies}
							disabled={newItemLoading}
						>
							Load More
						</button>
					</div>
				)}

				<Modal open={open} onClose={this.onClose}>
					<MovieInfo movieId={movieId} />
				</Modal>
			</div>
		)
	}
}

export default RowMovies

const Content = ({ movies, onOpen }) => {
	return (
		<div className='app__rowmovie-lists'>
			{movies.map(movie => (
				<RowMoviesItem key={movie.id} movie={movie} onOpen={onOpen} />
			))}
		</div>
	)
}

Content.propTypes = {
	movies: PropTypes.array,
	onOpen: PropTypes.func,
}
