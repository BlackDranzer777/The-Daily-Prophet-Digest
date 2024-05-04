import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import './HamburgerIcon.css';
import categories from '../../data/category';
import SearchInput from '../searchInput/SearchInput';

export default function SwipeableTemporaryDrawer({category, setCategoryHandler, setQueryHandler, handleDateChange, date, sourcesHandler}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className='box left-right-border-large'
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
      paddingLeft={2}
      paddingRight={2}
    >
      <List> 
        <ListItem>
          <h1 className='box-heading'>Categories</h1>
        </ListItem>
      </List>
      {/* <Divider  className='left-right-border-large'/> */}
      
      <SearchInput 
        date={date} 
        handleDateChange={handleDateChange} 
        setCategoryHandler={setCategoryHandler} 
        sourcesHandler={sourcesHandler} 
      />
    
      <hr  className='break-line left-right-border-small'/>
      <List>
        {categories.map((text, index) => (

          <ListItem  className={`list-item-text ${category === text.toLocaleLowerCase() ? ' active' : ''}`} key={text} disablePadding>
            <ListItemButton onClick={() => setCategoryHandler(text)}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              {/* <ListItemText fontSize={'40px'} className='list-item-text' primary={text} /> */}
              <span>{text}</span>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}><MenuIcon fontSize='large' className='hamburger-icon'/></Button>
          <SwipeableDrawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {list('right')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}