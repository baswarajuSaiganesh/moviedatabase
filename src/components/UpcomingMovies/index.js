import {Component} from 'react'

import MovieCard from '../MovieCard'

class UpcomingMovies extends Component {
  state = {UpcomingMoviesList: []}

  componentDidMount() {
    this.getUpcomingMovieDetails()
  }

  getUpcomingMovieDetails = async () => {
    const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const UpcomingMoviesDetails = data.results.map(eachMovie => ({
      id: eachMovie.id,
      title: eachMovie.title,
      voteAverage: eachMovie.vote_average,
      posterPath: eachMovie.poster_path,
    }))

    this.setState({UpcomingMoviesList: UpcomingMoviesDetails})
  }

  render() {
    const {UpcomingMoviesList} = this.state
    return (
      <>
        <ul>
          {UpcomingMoviesList.map(eachMovie => (
            <MovieCard key={eachMovie.id} details={eachMovie} />
          ))}
        </ul>
      </>
    )
  }
}

export default UpcomingMovies
