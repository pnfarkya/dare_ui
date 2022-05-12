import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NextLink, { LinkProps } from  'next/link';

const pages = [
  {
    image:
      "https://image.shutterstock.com/image-photo/old-well-used-clipboard-new-600w-777481483.jpg",
    desc: "Primary Markets",
    id: "primaryMarkets"
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/old-well-used-clipboard-new-600w-777481483.jpg",
    desc: "Secondary Markets",
    id: "secondaryMarkets"
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/old-well-used-clipboard-new-600w-777481483.jpg",
    desc: "Dare Index",
    id: "dareIndex"
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/old-well-used-clipboard-new-600w-777481483.jpg",
    desc: "P2P",
    id: "peerToPeer"
  }
];
const settings = ['Profile', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>            
            <Typography variant="h6"
                        noWrap component="a" href="/" 
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none'}} >  
              DARE
            </Typography>


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit" >
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{ 
                      display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                      <NextLink href={`/${page.id}`}>
                      <a>
                        <Button key={page.id} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }} >
                          {page.desc}
                        </Button>
                      </a>
                    </NextLink>
                    ))}
              </Menu>
            </Box> 
          
            <Typography variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                          mr: 2,
                          display: { xs: 'flex', md: 'none' },
                          flexGrow: 1,
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
              DARE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NextLink href={`/${page.id}`}>
                  <a>
                    <Button key={page.id} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} >
                      {page.desc}
                    </Button>
                  </a>
                </NextLink>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
};

export default Header;