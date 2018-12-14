import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DefaultLayout from 'containers/layout/DefaultLayout';
import { fetchArticleBySlug } from 'store/actions/articles';
import ArticleWithDetails from 'components/articles/ArticleWithDetails';
import { mapStateToProps } from 'store/helpers';

class ShowArticle extends React.Component {
  componentDidMount() {
    // we will fetch the article with a slug in the url
    const { fetchSingleArticle, match } = this.props;

    fetchSingleArticle(match.params.slug);
  }

  render() {
    const { selectedArticle, loading } = this.props;
    return (
      <DefaultLayout>
        <div className="container">
          {selectedArticle && <ArticleWithDetails article={selectedArticle} />}
          {!selectedArticle && !loading && <h2 className="text-center">Article Not found</h2>}
        </div>
      </DefaultLayout>
    );
  }
}

ShowArticle.defaultProps = {
  selectedArticle: null,
};

ShowArticle.propTypes = {
  match: PropTypes.object.isRequired,
  fetchSingleArticle: PropTypes.func.isRequired,
  selectedArticle: PropTypes.any,
  loading: PropTypes.bool.isRequired,
};

export const mapActionsToProps = dispatch => ({
  fetchSingleArticle: slug => dispatch(fetchArticleBySlug(slug)),
});

export { ShowArticle };

export default connect(
  mapStateToProps({ selectedArticle: 'articles.single', loading: 'ui.loading' }),
  mapActionsToProps,
)(ShowArticle);
