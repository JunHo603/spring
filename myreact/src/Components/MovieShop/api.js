import axios from "axios";

const headers = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzVhNTI3ODhiNTg5ODQwMjNmNDlkODRjMjkyODM1NyIsIm5iZiI6MTcyMTg4NDk1OS4zOTAyMDksInN1YiI6IjY2YTFjZjM5ODYyN2ViYmVmODBjMTE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cHxGsRMi66qRhCDuLKxECdemKIhcpejeJJZAVnFM1s8",
  },
};

export const IMG_PATH = "https://image.tmdb.org/t/p/original";

export function getMoviesNowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    headers
  );
}

export function getPopular() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    headers
  );
}
export function getTopRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1",
    headers
  );
}
export function getUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",
    headers
  );
}

export const genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Abenteuer",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Komödie",
  },
  {
    id: 80,
    name: "Krimi",
  },
  {
    id: 99,
    name: "Dokumentarfilm",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Familie",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "Historie",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Musik",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Liebesfilm",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV-Film",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "Kriegsfilm",
  },
  {
    id: 37,
    name: "Western",
  },
];

export function getGenre(list) {
  let str = "";
  list.forEach((a) => {
    const temp = genre.find((g) => g.id == a);
    str = str + ", " + temp.name;
  });
  return str;
}
