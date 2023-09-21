import React ,{useState} from 'react';
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import headerImg from '../assets/illustration 1@4x 1.png'
import { ReactComponent as Radio } from "./icons/radio.svg"
import { ReactComponent as Target } from "./icons/target.svg"
import { ReactComponent as Edit } from "./icons/edit.svg"


import "../LandingCss/Header.css"
import "../LandingCss/HeaderBottom.css"
const Header = () => {
    
    const [email, setEmail] = useState();

    const handleEmail=(e)=>{

        console.log("val   ",e.target.value);
        console.log("email   ",email);
        setEmail(e.target.value)
    }

    const itemList = [
        {
            headtext: "Lorem ipsum dolor sit amet  ",
            bodytext:  "Lorem ipsum dolor sit amet  ",
            icon: <Target />,

            to: "/"
        },
        {
            headtext: "Lorem ipsum dolor sit amet  ",
            bodytext: "Lorem ipsum dolor sit amet  ",
            icon: <Edit />,

            to: "/about"
        },
        {
            headtext: "Lorem ipsum dolor sit amet  ",
            bodytext: "Lorem ipsum dolor sit amet  ",
            icon: <Radio />,
            to: "/contact"
        }
    ];

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        // cor de fundo
        backgroundColor: '#EDEDED',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            
        },
    }));


  return  (
      <div style={{ backgroundColor:'#1A1F71'}}>
        <CustomBox component='header'>
            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    // flex: '1',
                    alignItems:'center',
                    justifyContent:'center',
                    paddingTop: '30px',
                    // alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    // flex: '2',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // alignSelf: 'flex-start',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    // marginBottom: -15,
                }}
                />
            </Box>
          <BoxText component='section'>
                  <div className='tittleText'>Get Paid to Prepare for UPSC*</div>
              <Box>
                  <div style={{display:'flex'}}>
                    <div>
                          <form >
                             <div>
                                  {/* <label htmlFor="email"></label> */}
                                  <div >
                                      <input
                                          type="email"
                                          name="email"
                                          autoComplete="email"
                                          required
                                          value={email}
                                              onChange={(e) => setEmail(e.target.value)}
                                          className="headerEmail"
                                          placeholder='Enter your email ID'
                                      />
                                  </div>
                              </div>
                          </form>
                    </div>
                    <div>
                        <div>
                              <button className="headerBtn"><span className='headerBtnText'>Join the Waitlist Now!</span></button>
                        </div>
                        <div className='TandC'>*T&C Apply</div>
                    </div>
                  </div>
              </Box>
              
          </BoxText>
         
        </CustomBox>
        <div className="skill">
           <div className='skillheader'>
            <div className='headerSkill'>
                {itemList.map((item)=>{
                    return (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin:'0px 15px' ,padding:'15px 0px'}}>
                    
                    <div style={{marginRight:'15px'}}>
                            {item.icon}
                    </div>
                        <div >
                            <div className='headtext' >{item.headtext} </div>
                            <div className='bodytext'>{item.bodytext} </div>
                        </div>
                    
                    </div>)
                })}
            </div>

            <div className='skillText'>
                      Lorem ipsum dolor sit amet consectetur. Id tortor elit sed quisque lacus leo. Sagittis tellus etiam cursus dictumst. Tempus purus lectus fermentum mauris. Amet at ultrices molestie leo neque cursus.
            </div>
           </div>
        </div>
    </div>
    )
}

export default Header