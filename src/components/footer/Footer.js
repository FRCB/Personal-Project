import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';


function Footer(){
    return(
        
        <footer className = 'footer'>
                <div className = 'footer_section'>
                    <div className = 'footer_section_header'>
                        <h2> Home </h2>
                            <div className = 'footer_links'>
                                <Link to = '/dashboard'> <div> Popular Shows </div> </Link>
                            </div>
                    </div>
                </div>
                <div className = 'footer_section'>
                    <div className = 'footer_section_header'>
                        <h2> Shows </h2>
                            <div className = 'footer_links'>
                                <Link to = '/shows'> <div> Search for Shows </div> </Link>
                            </div>
                    </div>
                </div>
                <div className = 'footer_section'>
                    <div className = 'footer_section_header'>
                        <h2> Cart </h2>
                            <div className = 'footer_links'>
                                <Link to = '/cart'> <div> View Your Shows </div> </Link>
                            </div>
                    </div>
                    
                    <div className = 'copyright'> ShowMania, Copyright &copy; 2018 </div>
                </div>
                <div className = 'footer_section'>
                    <div className = 'footer_section_header'>
                        <h2> Ratings </h2>
                            <div className = 'footer_links'>
                                <Link to = '/ratings'> <div> Compare Shows </div> </Link>
                            </div>
                    </div>
                </div>
                <div className = 'footer_section'>
                    <div className = 'footer_section_header'>
                        <h2> Orders </h2>
                            <div className = 'footer_links'>
                                <Link to = '/order'> <div> View Your Orders </div> </Link>
                            </div>
                    </div>
                </div>
                <div className = 'footer_section'>
                    <div className = 'footer_section_header'>
                        <h2> Leaving? </h2>
                            <div className = 'footer_links'>
                                <a href = {process.env.REACT_APP_LOGOUT_REDIRECT}> <div> Logout </div> </a>
                            </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer;
