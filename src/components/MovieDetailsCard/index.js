import './index.css'

const MovieDetailsCard = props => {
  const {details} = props
  const {
    title,
    posterPath,
    runtime,
    voteAverage,

    releaseDate,
    overview,
  } = details
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`
  return (
    <div>
      <img className="image1" src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <p>Rating: {voteAverage}</p>
      <p>Runtime: {runtime}</p>
      <p>Release Date: {releaseDate}</p>
      <p>Overview: {overview}</p>
    </div>
  )
}

export default MovieDetailsCard
