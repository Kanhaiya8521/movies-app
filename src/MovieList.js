import Moviecard from "./Moviecard";
function MovieList(props) {
    const { movies, addStar, subStar, buttonToggleCart, buttonToggleFav } = props;
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
// Moviecard.defaultProps = {
//     title: "Hello",
// }

export default MovieList;
