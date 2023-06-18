import { Component } from "react";
import Moviecard from "./Moviecard";
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "IRON MAN",
          plot: "Iron Man is a superhero appearing in American comic books published by Marvel Comics. Co-created by writer and editor Stan Lee, developed by scripter Larry ...",
          poster:
            "https://cdn.pixabay.com/photo/2019/10/24/07/03/bluesteel-4573540_640.jpg",
          price: 149,
          rating: 7.9,
          star: 0,
          fav: false,
          cart: false,
        },
        {
          title: "BLACK WIDOW",
          plot: "Black Widow is a 2021 American superhero film based on Marvel Comics featuring the character of the same name. Produced by Marvel Studios and distributed by ...",
          poster:
            "https://cdn.pixabay.com/photo/2022/04/22/11/04/natasha-romanoff-7149465_640.png",
          price: 199,
          rating: 8.5,
          star: 0,
          fav: false,
          cart: false,
        },
        {
          title: "HULK",
          plot: "The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first ...",
          poster:
            "https://cdn.pixabay.com/photo/2015/03/11/01/33/hulk-667988_640.jpg",
          price: 199,
          rating: 6.5,
          star: 0,
          fav: false,
          cart: false,
        },
        {
          title: "THOR",
          plot: "Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount ...",
          poster:
            "https://cdn.pixabay.com/photo/2019/05/24/10/09/thor-4225949_640.jpg",
          price: 199,
          rating: 8.9,
          star: 0,
          fav: false,
          cart: false,
        },
      ],
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
    const { movies } = this.state;
    const index = movies.indexOf(movie);
    movies[index].cart = !movies[index].cart;
    this.setState({
      movies: movies,
    });
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie, index) => (
          <Moviecard
            key={index}
            movie={movie}
            addStar={this.handleIncStar}
            subStar={this.handleDecStar}
            buttonToggleFav={this.handleFav}
            buttonToggleCart={this.handleCart}
          />
        ))}
      </>
    );
  }
}
// Moviecard.defaultProps = {
//     title: "Hello",
// }

export default MovieList;
