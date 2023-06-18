import { Component } from "react";
import Moviecard from "./Moviecard";
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "IRON MAN",
          plot: "Supernatural powers shown in the movies.",
          poster:
            "https://cdn.pixabay.com/photo/2019/10/24/07/03/bluesteel-4573540_640.jpg",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          title: "BLACK WINDOW",
          plot: "Supernatural powers shown in the movies.",
          poster:
            "https://cdn.pixabay.com/photo/2012/12/09/00/16/abstract-69124_640.jpg",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          title: "HULK",
          plot: "Supernatural powers shown in the movies.",
          poster:
            "https://cdn.pixabay.com/photo/2015/03/11/01/33/hulk-667988_640.jpg",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
        },
        {
          title: "THOR",
          plot: "Supernatural powers shown in the movies.",
          poster:
            "https://cdn.pixabay.com/photo/2019/05/24/10/09/thor-4225949_640.jpg",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: false,
          cart: false,
        },
      ],
    };
  }
  render() {
    const {movies} = this.state;
    return (
      <>
        {movies.map((movie) => (
          <Moviecard movie={movie} />
        ))}
      </>
    );
    
  }
}
Moviecard.defaultProps = {
    title: "Hello",
}

export default MovieList;
