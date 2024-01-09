import {Component} from 'react'

import MovieCard from '../MovieCard'

class TopRatedMovies extends Component {
  state = {TopRatedMoviesList: []}

  componentDidMount() {
    this.getTopRatedMovieDetails()
  }

  getTopRatedMovieDetails = async () => {
    const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const TopRatedMoviesDetails = data.results.map(eachMovie => ({
      id: eachMovie.id,
      title: eachMovie.title,
      voteAverage: eachMovie.vote_average,
      posterPath: eachMovie.poster_path,
    }))

    this.setState({TopRatedMoviesList: TopRatedMoviesDetails})
  }

  render() {
    const {TopRatedMoviesList} = this.state
    return (
      <>
        <ul>
          {TopRatedMoviesList.map(eachMovie => (
            <MovieCard key={eachMovie.id} details={eachMovie} />
          ))}
        </ul>
      </>
    )
  }
}

export default TopRatedMovies
