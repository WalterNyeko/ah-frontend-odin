export default mapActionsToProps => {
  const dispatch = jest.fn();
  const actions = mapActionsToProps(dispatch);

  Object.keys(actions).forEach(action => actions[action]({}));

  expect(dispatch).toHaveBeenCalledTimes(Object.keys(actions).length);
};
