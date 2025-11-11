class MovieService {
	_apiBase = 'https://api.themoviedb.org/3'
	_apiLng = 'language=en-US'
	_apiKey = 'api_key=bede3a7502714a7bf84c61ace86e8d45'
	_apiImg = 'https://image.tmdb.org/t/p/original'

	getResource = async url => {
		const response = await fetch(url)

		if (!response.ok) {
			throw new Error(`Could not fetch this ${url}, status: ${response.status}`)
		}

		return await response.json()
	}

	getPopularMovies = async () => {
		return this.getResource(
			`${this._apiBase}/movie/popular?${this._apiLng}&${this._apiKey}`
		)
	}

	getTrendingMovies = async () => {
		return this.getResource(
			`${this._apiBase}/movie/top_rated?${this._apiLng}&${this._apiKey}`
		)
	}

	getDetailedMovie = async id => {
		return this.getResource(
			`${this._apiBase}/movie/${id}?${this._apiLng}&${this._apiKey}`
		)
	}

	getRandomMovie = async () => {
		const res = await this.getPopularMovies()
		const movie = res.results[Math.floor(Math.random() * res.results.length)]
		return this._transforMovive(movie)
	}

	_transforMovive = movie => {
		return {
			name: movie.original_title,
			description: movie.overview,
			backdrop_path: `${this._apiImg}${movie.backdrop_path}`,
			poster_path: `${this._apiImg}${movie.poster_path}`,
			id: movie.id,
		}
	}
}

export default MovieService
