import MovieList from './components/MovieList'
import './App.css'
import movies from './assets/movies'
import Timer from './components/Timer'


function App() {
 

  return (
    <div>
      <h1>My first dynamic react application</h1>
      
      <Timer startTime={5}/>

      <MovieList movies={movies} headingText="Movie List" secondaryText="secondart text"/>
    </div>
  )
}

export default App
