import React, { useEffect , useState} from 'react';
import { Container } from 'react-bootstrap';
import NavBars from './components/NavBars';
import MoviesList from './components/MovieList';
import axios from 'axios';
import { Route , BrowserRouter , Routes} from 'react-router-dom';
import MovieDetails from './components/MovieDetails';


function App() {

  const [movies, setMovies] = useState([])
    const [pageCounts, setPageCount] = useState(0)


  const getAllMovies = async () => {
      const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=1")
      setMovies(res.data.results);
      setPageCount(res.data.total_pages)
    }
  const getPage = async (numPage) => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${numPage}`)
      setMovies(res.data.results);
    }

  const search = async (word) => {
    if(word === ''){
      getAllMovies();
    }else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setMovies(res.data.results);
    }
    }

    useEffect(() => {
      getAllMovies();
    },[])

  return (
    <div className="font color-body">
      <NavBars search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<MoviesList movies = {movies} getPage={getPage} pageCounts={pageCounts}/>}/>
              <Route path='movie/:id' element={ <MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
