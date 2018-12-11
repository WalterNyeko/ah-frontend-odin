import { pick, isObjectLike, get, zipObject } from 'lodash';
import { getAllArticles } from 'store/actions/articles';

export const mapStateToProps = props => state => {
  if (Array.isArray(props)) return pick(state, props);

  if (isObjectLike(props)) {
    const keys = Object.keys(props);

    const values = keys.map(key => get(state, props[key]));
    return zipObject(keys, values);
  }

  return {};
};

export const getArticles = ({ articles }) => ({ articles: articles.all });

export const fetAllArticles = dispatch => ({ fetchAllArticles: () => dispatch(getAllArticles()) });
export default mapStateToProps;
