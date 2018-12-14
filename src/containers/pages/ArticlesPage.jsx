import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import DefaultLayout from 'containers/layout/DefaultLayout';
import { fetAllArticles, mapStateToProps } from 'store/helpers';
import Articles from 'components/articles/Articles';
import IconPlus from 'components/icons/IconPlus';

class ArticlesPage extends React.Component {
  componentWillMount() {
    this.props.fetchAllArticles();
  }

  render() {
    const { articles, user } = this.props;

    return (
      <DefaultLayout className="indexPage">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2 className="text-center">Articles</h2>
            <div>
              {user && (
                <NavLink to="/articles/create" className="btn btn-primary">
                  <IconPlus />
                  New Article
                </NavLink>
              )}
            </div>
          </div>

          <div className="mt-3">
            <Articles articles={articles} />
          </div>
        </div>
      </DefaultLayout>
    );
  }
}
ArticlesPage.defaultProps = {
  user: null,
};

ArticlesPage.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchAllArticles: PropTypes.func.isRequired,
  user: PropTypes.any,
};
export { ArticlesPage };

export default connect(
  mapStateToProps({ articles: 'articles.all', user: 'authentication.user' }),
  fetAllArticles,
)(ArticlesPage);
