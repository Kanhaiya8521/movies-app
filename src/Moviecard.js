import { Component } from "react";

class Moviecard extends Component {
  

  addStar = () => {
    //setState form 1
    this.setState({
      stars: this.state.stars + 0.5,
    });
    // form 11
    // this.setState((prevState) => {
    //     return {
    //         stars: this.state.stars + 0.5
    //     }
    // })
  };
  minusStar = () => {
    //setState form 1
    this.setState({
      stars: this.state.stars - 0.5,
    });
  };
  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };
  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  }
  render() {
    console.log(this.props.movie);
    const { title, plot, poster, price, rating, stars, fav, cart } = this.props.movie;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src={poster}
              alt="poster"
            />
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
                  onClick={this.minusStar}
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
                  onClick={this.addStar}
                />
                <span className="starCount">{stars}</span>
              </div>
              {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-favourite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )}
              {cart ? (
                <button className="cart-btn" onClick={this.handleCart}>
                  Add to cart
                </button>
              ) : (
                <button className="cart-btn" onClick={this.handleCart}>
                  Remove cart
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