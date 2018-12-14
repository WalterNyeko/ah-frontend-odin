import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import store from 'store';
import AuthenticationModals from './authentication/AuthenticationModals';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import CreateArticlePage from './pages/CreateArticlePage';
import ShowArticle from './pages/ShowArticle';
import UnAuthotized from './pages/UnAuthorized';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Notifications />
        <AuthenticationModals />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/articles" exact component={ArticlesPage} />
          <Route path="/articles/create" exact component={CreateArticlePage} />
          <Route path="/articles/:slug" exact component={ShowArticle} />
          <Route path="/unauthorized" exact component={UnAuthotized} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
