import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { ArticleRateComponent } from '../components/articles/ArticleRateComponent';
import { rateArticle } from '../store/actions/articles';

class RateArticle extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.state = {
      collapse: false,
      article_rate: 0,
      slug: '',
      rating: this.props.rate,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({
      article_rate: nextValue,
      slug: this.props.slug,
    });
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  onSubmit(e) {
    e.preventDefault();
    const article_rate = this.state.article_rate;
    const body = {
      article_rate: article_rate,
    };
    this.props.rateArticle(this.state.slug, body);
  }

  render() {
    return (
      <div>
        <div className="float-right">
          {this.props.authentication ? (
            <Button
              className="float-right"
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: '1rem' }}
            >
              Rate this article
            </Button>
          ) : (
            ''
          )}
          {this.props.rate ? (
            <div className="rate-articles float-right">
              <div className="star-rating float-right">
                <input type="radio" id="5-stars" name="rating" value="1" />
                <label for="5-stars" className="star float-right">
                  &#9733;
                </label>
                <label className="form-label float-right">{this.props.rate}</label>
              </div>
            </div>
          ) : (
            ''
          )}

          <div className="cover-up">
            <Collapse isOpen={this.state.collapse}>
              <center>
                <div className="float-right">
                  <h6>Your Rating</h6>
                  <ArticleRateComponent
                    rating={this.state.article_rate}
                    onStarClick={this.onStarClick}
                  />
                  <button className="btn btn-primary btn-sm" onClick={this.onSubmit}>
                    Submit
                  </button>
                </div>
              </center>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}
RateArticle.propTypes = {
  rateArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  article_rating: state.articles.article_rate,
  authentication: state.authentication.user,
});
export { RateArticle as RateArticleTest };
export default connect(
  mapStateToProps,
  { rateArticle },
)(RateArticle);
