import React from 'react';
import "./Footer.css";


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <p>Email- aed.alattar.2000@gmail.com<br></br>Phone-+972509370017</p>
                    <div className="footer-info">
                        <p>&copy; Eid alattar | 2024 | All rights reserved</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/johan-liebert-50a64a26a/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            <br></br>
                            <a href="https://github.com/aed121" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
