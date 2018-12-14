import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { take } from 'lodash';
import DefaultLayout from 'containers/layout/DefaultLayout';
import JoinSection from 'containers/layout/JoinPlatiformSection';
import Articles from 'components/articles/Articles';
import { mapStateToProps, fetAllArticles } from 'store/helpers';

class IndexPage extends React.Component {
  componentWillMount() {
    this.props.fetchAllArticles();
  }

  render() {
    const { articles } = this.props;

    return (
      <DefaultLayout className="indexPage">
        <div className="container">
          <h2 className="text-center">Latest Articles</h2>
          <div className="mt-3">
            <Articles articles={take(articles, 4)} />
          </div>
        </div>
        <JoinSection />
      </DefaultLayout>
    );
  }
}

IndexPage.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchAllArticles: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps({ articles: 'articles.all' }),
  fetAllArticles,
)(IndexPage);
