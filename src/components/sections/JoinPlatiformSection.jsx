import React from 'react';
import { NavLink } from 'react-router-dom';

const JoinPlatiformSection = () => (
  <section className="p-3 bg-primary text-white">
    <div className="container-fluid">
      <h3>Join Authors Haven</h3>
      <p className="mt-3">
        A Social platform for like-minded authors to foster inspiration and innovation by leveraging
        the modern web to enable authors share original content, target articles to an audience that
        finds them relevant and more.
      </p>
      <div className="d-flex justify-content-end">
        <NavLink className="btn join-button" to="/register">
          Sign Up
        </NavLink>
      </div>
    </div>
  </section>
);

export default JoinPlatiformSection;
