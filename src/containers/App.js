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
import SearchComponent from './pages/SearchComponent';
import SocialButtons from '../components/authentication/SocialButtons';
import ProfilesContainer from './profiles/profilesContainer';
import CompleteReset from './authentication/CompleteReset';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Notifications />
        <AuthenticationModals />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" exact component={SearchComponent} />
          <Route path="/articles" exact component={ArticlesPage} />
          <Route path="/articles/create" exact component={CreateArticlePage} />
          <Route path="/articles/:slug" exact component={ShowArticle} />
          <Route path="/articles/:slug/bookmark" exact component={ShowArticle} />
          <Route path="/unauthorized" exact component={UnAuthotized} />
          <Route path="/profile/:username" exact component={ProfilesContainer} />
          <Route path="/social" exact component={SocialButtons} />
          <Route path="/complete_reset" exact component={CompleteReset} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
