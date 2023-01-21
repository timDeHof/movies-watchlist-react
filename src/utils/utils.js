export const basicURL = "https://www.omdbapi.com/?apikey=6ac7378f"

export const fetchMovies = async (searchTerm) => {
  try {
    let movieArray = []
    const response = await fetch(`${basicURL}&s=${searchTerm}`)
    const data = await response.json()
    if (data.Response === "True") {
      for (const movie of data.Search) {
        const response = await fetch(`${basicURL}&i=${movie.imdbID}`)
        const movieData = await response.json()
        movieArray.push(movieData)
      }
    }
    return movieArray
  } catch (error) {
    console.error(error)
  }
}
