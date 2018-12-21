export const commentUrl = ({ slug }) => `articles/${slug}/comments`;

export const filterArticlesUrl = ({ all, title }) => {
  const filters = { ...all, title };
  const query = new URLSearchParams();

  Object.keys(filters)
    .filter(key => filters[key])
    .forEach(key => {
      query.set(key, filters[key]);
    });

  return `articles?${query}`;
};
