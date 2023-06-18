import { Component } from "react";

class Moviecard extends Component {
    constructor() {
        super();
        this.state = {
            title: "The Avengers",
            plot: "Supernatural powers shown in the movies.",
            price: 199,
            rating: 8.9,
            stars: 0,
        }
    }

    addStar = () => {
        //setState form 1
        this.setState({
            stars: this.state.stars + 0.5,
        })
        // form 11
        // this.setState((prevState) => {
        //     return {
        //         stars: this.state.stars + 0.5
        //     }
        // })
    }
    minusStar = () => {
        //setState form 1
        this.setState({
            stars: this.state.stars - 0.5,
        })
    }
    render() {
        const { price, rating, stars} = this.state;
        return (
          <div className="main">
            <div className="movie-card">
              <div className="left">
                <img
                  src="https://cdn.marvel.com/content/2x/mlou2_imax_oversize_1-sht_v2_online_lg_rev.jpg"
                  alt="poster"
                />
              </div>
              <div className="right">
                <div className="title">{this.state.title}</div>
                <div className="plot">
                  {this.state.plot}
                </div>
                <div className="price">Rs. {price}</div>
                <div className="footer">
                  <div className="rating">{rating}</div>
                  <div className="star-dis">
                    <img alt="decrease" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" onClick={this.minusStar} />
                    <img alt="star" className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                    <img alt="increase" className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={this.addStar} />
                    <span className="starCount">{stars}</span>
                    
                  </div>
                  <button className="favourite-btn">Favourite</button>

                  <button className="cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Moviecard;