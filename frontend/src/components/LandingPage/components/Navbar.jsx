import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography, 
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';

import { ReactComponent as Logo} from "./icons/Logo.svg"

// rotas
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import styles from '../../../styles/styles';
import { useSelector } from "react-redux";

import NavButton from './NavButton';

import "../LandingCss/Nav.css"


// personalizacao
const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "About",
      to: "/" 
    },
    {
      text: "Contact",
      to: "/about"
    },
    {
        text: "Survey",
        to: "/contact"
    }
];


const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    return (
        <div style={{display:'flex' , justifyContent:'center'}}>
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: '#1A1F71',
            width:'97vw' ,
            borderBottomRightRadius:'20px',
            borderBottomLeftRadius:'20px'
        }}

        elevation={0}
        >
            <StyledToolbar >
                <div
                    // variant="h6"
                    // component="h2"
                className='payperName'

                >
                    Payper
                </div>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(

                            <NavButton name={text}/>
                        )
                    })}
                   
                </ListMenu>
                <div style={{display:'flex'}}>
                   <div className='translator'>
                      <Logo />
                      <div className='transtext'> English</div>
                   </div>
                    <div className={`${styles.noramlFlex}`} style={{marginLeft:'10px'}}> 
                        <div className="relative cursor-pointer mr-[15px]">
                            {isAuthenticated ? (
                                <Link to="/profile" >
                                    {/* <img
                                        src={`${user.avatar.url}`}
                                        className="w-[35px] h-[35px] rounded-full"
                                        alt="Profile Pic"
                                        height="400px" width="400"
                                        color='black'
                                    /> */}
                                    <img
                                        src={`${user?.avatar?.url}`}
                                        className="w-[175px] h-[35px] rounded-full object-cover border-[1px] border-[#FFFFFF]"

                                        alt=""
                                    />
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                                </Link>
                            )}
                        </div>
                    </div>
               </div>

                
            </StyledToolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;
