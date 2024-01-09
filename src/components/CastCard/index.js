const CastCard = props => {
  const {details} = props
  const {character, originalName, profilePath} = details
  const imageUrl = `https://image.tmdb.org/t/p/w500${profilePath}`

  return (
    <div>
      <img src={imageUrl} alt={originalName} />
      <p>{originalName}</p>
      <p>{character}</p>
    </div>
  )
}

export default CastCard
