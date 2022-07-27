import React from 'react';
import './about_us.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='about-container'>
            
            <div className='description'>
                <h1>
                    Story behind M(ern)S(tack) Paint
                </h1>
                <span>
                We would like to introduce you to M(ern) S(tack) Paint, a website where you can create beautiful sketches for internet strangers to draw on top of. If you prefer not to start with your own base drawing, you can also post a theme or topic to inspire the artist in others. Our goal is not to create masterpieces, but rather to create art fit for the most visible part of the fridge.
                </span>
            </div>

            <div className='team'>
                <h1>
                    Meet the Team!
                </h1>
                <ul className="team-members">
                    <li>Alex Kern (Team Lead, Flex)
                        <div className='icons'>
                            <a href="https://github.com/vuongcindy/" target=">blank">
                                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-alt-1024.png" id="github" alt="link to Cindy's Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/vuongcindy/" target=">blank">
                                <img src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" id="linkedin" alt="link to Cindy's Linkedin" />
                            </a>
                        </div>
                    </li>
                    <li>Cindy Vuong (Frontend)
                        <div className='icons'>
                            <a href="https://github.com/vuongcindy/" target=">blank">
                                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-alt-1024.png" id="github" alt="link to Cindy's Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/vuongcindy/" target=">blank">
                                <img src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" id="linkedin" alt="link to Cindy's Linkedin" />
                            </a>
                        </div>
                    </li>
                    <li>Danny Wallace (Backend)
                        <div className='icons'>
                            <a href="https://github.com/vuongcindy/" target=">blank">
                                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-alt-1024.png" id="github" alt="link to Cindy's Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/vuongcindy/" target=">blank">
                                <img src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" id="linkedin" alt="link to Cindy's Linkedin" />
                            </a>
                        </div>
                    </li>
                    <li>Peter Romo (Backend)
                        <div className='icons'>
                            <a href="https://github.com/vuongcindy/" target=">blank">
                                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-alt-1024.png" id="github" alt="link to Cindy's Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/vuongcindy/" target=">blank">
                                <img src="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png" id="linkedin" alt="link to Cindy's Linkedin" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutUs;