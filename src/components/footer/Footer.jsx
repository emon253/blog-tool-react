import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="brand-logo">CARBARN</h1>
                    <p className="brand-desc">Carbarn is conveniently located in Lidcombe, NSW. View their vehicles for sale, get directions or call Carbarn at rvsforsale.com.au.</p>
                </div>
                <div className="col-md-4">
                    <div className="footer-menu">
                        <ul className="text-center">
                            <li className="menu-item">Home</li>
                            <li className="menu-item">Blog</li>
                            <li className="menu-item">About</li>
                            <li className="menu-item">Services</li>
                            <li className="menu-item">Photo Gallery</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-center">Contact us</h5>
                    <div className="icon-footer">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <br />
                    <div className="text-center">
                        <p><i className="bi bi-house-door me-2"></i>New South WalesNSW 2141, Australia</p>
                        <p><i className="bi bi-envelope-open me-2"></i>carnbarn-aus@carbar.au.com</p>
                    </div>
                </div>
            </div>
            <p className="text-left">&copy;copyright reserved by Trip Agency </p>
        </div>
    );
};

export default Footer;