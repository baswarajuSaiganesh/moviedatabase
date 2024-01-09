import {Link} from 'react-router-dom'

const MovieCard = props => {
  const {details} = props
  const {title, posterPath, voteAverage, id} = details
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`

  return (
    <li>
      <img src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <p>Rating: {voteAverage}</p>
      <Link to={`/movie/${id}`}>
        <button type="button">View Details</button>
      </Link>
    </li>
  )
}

export default MovieCard
