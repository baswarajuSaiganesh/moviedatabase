import {Component} from 'react'

import MovieDetailsCard from '../MovieDetailsCard'
import CastCard from '../CastCard'

class SingleMovieDetails extends Component {
  state = {movieData: [], castData: []}

  componentDidMount() {
    this.getSingleMovieDetails()
    this.getMovieCastDetails()
  }

  getMovieCastDetails = async () => {
    const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const castDetails = data.cast.map(each => ({
      character: each.character,
      originalName: each.original_name,
      profilePath: each.profile_path,
    }))

    this.setState({castData: castDetails})
  }

  getSingleMovieDetails = async () => {
    const apiKey = 'ae893b70848390bcf7a874a491dbc69b'
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const movieDetails = {
      title: data.title,
      posterPath: data.poster_path,
      voteAverage: data.vote_average,
      runtime: data.runtime,
      genres: data.genres.map(each => ({
        id: each.id,
        name: each.name,
      })),
      releaseDate: data.release_date,
      overview: data.overview,
    }
    this.setState({movieData: movieDetails})
  }

  render() {
    const {movieData, castData} = this.state
    return (
      <div>
        <h1>Movie details section</h1>
        <MovieDetailsCard details={movieData} />
        <h1>Cast details section</h1>
        <CastCard details={castData} />
      </div>
    )
  }
}

export default SingleMovieDetails
