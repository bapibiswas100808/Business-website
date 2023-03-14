import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import "./HeaderTop.css";

const HeaderTop = () => {
    return (
        <Container>
        <div className='header-top clearfix fixed-top'>
            <div className='header-left float-start'>
                <p>684 West College St. Sun City, USA+</p>
            </div>
            <div className='header-right float-end'>
                <div className='header-number'>
                <a href="tel:+(232)456-7890">+(232) 456-7890</a>
                </div>
                <div className='header-email'>
                <a href="mailto:info@example.com">info@example.com</a>
                </div>
                <div className='header-icons'>
                <ul className="nav social-icons  social-circled social-black social-h-own social-bg-transparent social-hbg-transparent"><li className="nav-item">
								<a href="/" className="nav-link social-fb">
									<i Name=" ti-facebook"></i>
								</a>
							</li><li className="nav-item">
								<a href="/" className="nav-link social-twitter">
									<i class=" ti-twitter"></i>
								</a>
							</li><li className="nav-item">
								<a href="/" class="nav-link social-instagram">
									<i className=" ti-instagram"></i>
								</a>
							</li><li class="nav-item">
								<a href="/" className="nav-link social-linkedin">
									<i className=" ti-linkedin"></i>
								</a>
							</li>
                            </ul>
                </div>
            </div>
            
        </div>
        </Container>
    );
};

export default HeaderTop;