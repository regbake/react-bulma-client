import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Users from './users';
import Contact from './contact';
import Notfound from './notfound';
import './App.sass';



const Header = (props) => {
	return (
		<section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            {props.title}
          </h1>
          <h2 className="subtitle">
            {props.subtitle}
          </h2>
        </div>
      </div>
    </section>
	)
}

export default Header;