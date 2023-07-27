const api_key = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY4NGJiNzU1MzhiOGIwYTEwMmQyNDkyMjkwMzQ0ZCIsInN1YiI6IjYwNTg5ZTRjNmJkZWMzMDA3NWI1NWFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Mox9zrtG4Ygys455UmRaEtD5Cxs6aseRR1Pk7StlJI'

export const getTrendingData = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.themoviedb.org/3/trending/all/day', {
      headers: {
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGY4NGJiNzU1MzhiOGIwYTEwMmQyNDkyMjkwMzQ0ZCIsInN1YiI6IjYwNTg5ZTRjNmJkZWMzMDA3NWI1NWFjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Mox9zrtG4Ygys455UmRaEtD5Cxs6aseRR1Pk7StlJI',
        "accept": 'application/json',
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      resolve(data);
    })
    .catch(e => {
      reject(e);
    })
  })
}

// https://api.themoviedb.org/3/trending/all/day