import { Component } from "react";

class Moviecard extends Component {


  render() {
    const {movie,addStar, subStar, buttonToggleFav, buttonToggleCart} = this.props;
    const { title, plot, poster, price, rating, star, fav, cart } = this.props.movie;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="poster" />
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">Rs. {price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  alt="decrease"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  onClick={() => subStar(movie)}
                />
                <img
                  alt="star"
                  className="stars"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                />
                <img
                  alt="increase"
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={() => addStar(movie)}
                />
                <span className="starCount">{star}</span>
              </div>
              {fav ? (
                <button
                  className="unfavourite-btn"
                  onClick={() => buttonToggleFav(movie)}
                >
                  Un-favourite
                </button>
              ) : (
                <button
                  className="favourite-btn"
                  onClick={() => buttonToggleFav(movie)}
                >
                  Favourite
                </button>
              )}
              {cart ? (
                <button
                  className="cart-btn"
                  onClick={() => buttonToggleCart(movie)}
                >
                  Remove cart
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() => buttonToggleCart(movie)}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;