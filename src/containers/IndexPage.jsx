import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultLayout from 'containers/layout/DefaultLayout';
import { getAllArticles } from 'store/actions/articles';
import LatestArticlesSection from 'components/sections/LatestArticlesSection';
import Pagination from 'components/Pagination';
import JoinAuthorsHaven from './layout/JoinPlatiformSection';

class IndexPage extends React.Component {
  componentWillMount() {
    const { match, fetchAllArticles } = this.props;
    const { pageNumber } = match.params;
    if (pageNumber) {
      fetchAllArticles(pageNumber);
    } else {
      fetchAllArticles(1);
    }
  }

  render() {
    const { articles, match } = this.props;
    const { pageNumber } = match.params;
    return (
      <DefaultLayout className="indexPage">
        {articles.results ? (
          <div>
            <LatestArticlesSection articles={articles.results} />
            <div>
              {articles.count > 4 ? (
                <Pagination article={articles} pageNumber={pageNumber} />
              ) : (
                <div />
              )}
            </div>
            <JoinAuthorsHaven />
          </div>
        ) : (
          <span>Loading....</span>
        )}
      </DefaultLayout>
    );
  }
}

IndexPage.propTypes = {
  fetchAllArticles: PropTypes.func.isRequired,
  articles: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles: articles.all });
export const mapActionsToProps = dispatch => ({
  fetchAllArticles: pageNumber => dispatch(getAllArticles(pageNumber)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(IndexPage);