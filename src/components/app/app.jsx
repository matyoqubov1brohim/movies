import ErrorBoundary from '../error-boundary/error-boundary'
import Footer from '../footer/footer'
import Header from '../header/header'
import Hero from '../hero/hero'
import RowMovies from '../row-movies/row-movies'
import './app.scss'

const App = () => {
	return (
		<div className='app'>
			<Header />
			<ErrorBoundary>
				<Hero />
			</ErrorBoundary>
			<ErrorBoundary>
				<RowMovies />
			</ErrorBoundary>
			<div className='line' />
			<Footer />
		</div>
	)
}

export default App
