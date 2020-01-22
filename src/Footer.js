import React from 'react';
import './App.sass';

const Footer = ({props}) => {
	return(
		<footer className="footer" style={{height: '10%'}}>
		  <div className="content has-text-centered">
		    <p>
		      <strong>A footer content</strong>
		    </p>
		  </div>
		</footer>
	)
}

export default Footer;