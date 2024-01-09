import {Component} from 'react'

import MovieCard from '../MovieCard'

class PopularMovies extends Component {
  state = {popularMoviesList: []}

  componentDidMount() {
    this.getPopularMovieDetails()
  }

  getPopularMovieDetails = async () => {
    const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const popularMoviesDetails = data.results.map(eachMovie => ({
      id: eachMovie.id,
      title: eachMovie.title,
      voteAverage: eachMovie.vote_average,
      posterPath: eachMovie.poster_path,
    }))

    this.setState({popularMoviesList: popularMoviesDetails})
  }

  render() {
    const {popularMoviesList} = this.state
    return (
      <>
        <ul>
          {popularMoviesList.map(eachMovie => (
            <MovieCard key={eachMovie.id} details={eachMovie} />
          ))}
        </ul>
      </>
    )
  }
}

export default PopularMovies
