import React from 'react';

function Footer() {
    return (
        <div className="site-footer">
				<div className="container">
					{/* <div className="subscribe-form">
						<form action="#">
							<input type="text" placeholder="Enter your email to subscribe..." />
							<button type="submit"><img src="images/icon-envelope-white.png" alt="" /></button>
						</form>
					</div> */}
					<div className="social-links">
						<a href="/"><i className="fa fa-facebook"></i></a>
						<a href="/"><i className="fa fa-twitter"></i></a>
						<a href="/"><i className="fa fa-google-plus"></i></a>
						<a href="/"><i className="fa fa-pinterest"></i></a>
					</div>
					<div className="copy">
						<p>Copyright 2014 Company name. Designed by Themeezy. All rights reserved.</p>
					</div>
				</div>
			</div> 

    );
}

export default Footer;
