import React from 'react';
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {movies} from './moviesData';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].star >= 5) return;
    movies[index].star += 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleDecStar = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].star <= 0) return;
    movies[index].star -= 0.5;
    this.setState({
      movies: movies,
    });
  };
  handleFav = (movie) => {
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].fav = !movies[index].fav;
    this.setState({
      movies: movies,
    });
  };
  handleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const index = movies.indexOf(movie);
    if (movies[index].cart) {
      cartCount = cartCount - 1;
    } else {
      cartCount += 1;
    } 
    movies[index].cart = !movies[index].cart;
    this.setState({
      movies: movies,
      cartCount: cartCount,
    });
  };
  render() {
    return (
      <div className="App">
        <Navbar cartCount={this.state.cartCount}/>
        <MovieList movies={this.state.movies}
                   addStar={this.handleIncStar}
                   subStar={this.handleDecStar}
                   buttonToggleFav={this.handleFav}
                   buttonToggleCart={this.handleCart}
        />
      </div>
    );
  }
}

export default App;
