import React, { useState } from 'react';
import "../LandingCss/Footer.css"
import headerImg from '../assets/FooterLogo.png';
import "../LandingCss/Footer.css";
import { ReactComponent as FacebookLogo } from './icons/facebook.svg';
const Footer = () => {

    const [email, setEmail] = useState("");
    return (
      <div>
        <div className='container'>
            <div className='innerBody'>
                <div className='upperFooter'>

                    <div className='uft'>
                        <div className='uftl'>
                            <img
                                src={headerImg}
                                alt="headerImg"
                                style={{ width: "6vw" }}
                            />
                            <div className='uftlr'>Your complete UPSC preparation assistant</div>
                        </div>
                        <div className='utr'>
                            <div className='utrinner'>
                                <div>category</div>
                                <div>category</div>
                                <div>category</div>
                            </div>
                            <div className='utrinner'>
                                <div>category</div>
                                <div>category</div>
                                <div>category</div>
                                <div>category</div>
                                
                            </div>
                            <div className='utrinner'>
                                <div>category</div>
                                <div>category</div>
                                <div>category</div>
                                <div>category</div>
                                <div>category</div>
                            </div>

                        </div>
                    </div>
                   
                    <div className='ufb'>
                        <div style={{ display: 'flex' }}>
                            <div>
                                <form >
                                    <div>
                                        <label htmlFor="email"></label>
                                        <div >
                                            <input
                                                type="email"
                                                name="email"
                                                autoComplete="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="footerEmail"
                                                placeholder='Enter your email ID'
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>

                                <button className="footerBtn"><span className='footerBtnText'>Join Waitlist</span></button>
                            </div>

                        </div>
                        <div className='logoaligner'>
                            <div className='logoback'>
                                <div className='logo'> <FacebookLogo /></div>
                            </div>
                            <div className='logoback'>
                                <div className='logo'> <FacebookLogo /></div>
                            </div>
                            <div className='logoback'>
                                <div className='logo'> <FacebookLogo /></div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='LowerFooter'>2023 © Payper. All rights reserved. Terms and Conditions Applied. Design by madzn.</div>
            </div>

           
        </div>
            <div className="bottom"> </div>
     </div>
    )
}

export default Footer;