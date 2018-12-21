import React, { Component } from 'react';

class ArticleRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rate,
    };
  }

  render() {
    return (
      <div>
        <div>
          <div className="rate-articles float-right">
            <div className="star-rating float-right">
              <input type="radio" id="5-stars" name="rating" value="1" />
              <label for="5-stars" className="star float-right">
                &#9733;
              </label>
              <label className="form-label float-right">{this.state.rating}</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleRate;
