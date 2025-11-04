import { Component } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { movies } from '../../constants'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import './row-movies.scss'

class RowMovies extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
	}

	onToggleOpen = () => {
		this.setState(({ open }) => ({ open: !open }))
	}

	render() {
		const { open } = this.state

		return (
			<div className='rowmovies'>
				<div className='rowmovies__top'>
					<div className='rowmovies__top-title'>
						<img src='/tranding.svg' alt='trending' />
						<h1>Trending</h1>
					</div>
					<div className='hr' />
					<a href='#'>See more</a>
				</div>
				<div className='rowmovies__lists'>
					{movies.map((movie, idx) => (
						<RowMoviesItem
							key={idx}
							movie={{ ...movie, index: idx }}
							onToggleOpen={this.onToggleOpen}
						/>
					))}
				</div>

				<Modal open={open} onClose={this.onToggleOpen}>
					<MovieInfo />
				</Modal>
			</div>
		)
	}
}

export default RowMovies
