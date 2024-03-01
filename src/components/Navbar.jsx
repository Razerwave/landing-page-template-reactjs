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
// rotas
import { Link ,useNavigate} from 'react-router-dom';
import logo from '../assets/logo.jpg';


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
      text: "Home",
      to: "/" 
    },
    {
      text: "About",
      to: "/about"
    },
    {
        text: "Contact",
        to: "/contact"
    }
];


const Navbar = () => {
  const navigate = useNavigate(); 
    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'orange', 
        }}
        elevation={0}
        >
            <StyledToolbar>
               <div className='w-9 h-9'>
                  <img src={logo} alt='logo' className='rounded-full' onClick={() => navigate('/project')}/>
               <div height="110" width="500">
                <circle
                  cx="50"
                  cy="55"
                  r="45"
                  fill="none"
                  stroke="#F0CE01"
                  strokeWidth="4"
                />
    </div>
               <div height="110" width="500">
      <circle
        cx="50"
        cy="55"
        r="45"
        fill="none"
        stroke="#F0CE01"
        strokeWidth="4"
      />
    </div>
               </div>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton component={Link} to={item.to}
                                sx={{
                                    color: '#fff',
                                    "&:hover": {
                                        backgroundColor: 'transparent',
                                        color: '#1e2a5a',
                                    }
                                }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
