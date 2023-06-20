import { Component } from "react";
import Moviecard from "./Moviecard";
import {movies} from './moviesData';
class MovieList extends Component {
  render() {
    console.log("this.props.addstar", this.props);

    const { movies, addStar, subStar, buttonToggleCart, buttonToggleFav } = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <Moviecard
            key={index}
            movie={movie}
            addStar={addStar}
            subStar={subStar}
            buttonToggleFav={buttonToggleFav}
            buttonToggleCart={buttonToggleCart}
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
