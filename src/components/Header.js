import { useState }         from 'react';
import { NavLink }          from 'react-router-dom';
import AppBar               from '@material-ui/core/AppBar';
import Toolbar              from '@material-ui/core/Toolbar';
import IconButton           from '@material-ui/core/IconButton';
import MenuIcon             from '@material-ui/icons/Menu';
import Drawer               from '@material-ui/core/Drawer';
import WrapContent          from '../HOC/WrapContent/WrapContent';
import MobileMenu           from '../components/MobileMenu';
import SearchIcon           from '@material-ui/icons/Search';
import logo                 from '../img/logo.svg';
import useMediaQuery        from '@material-ui/core/useMediaQuery';


const Header = () => {
    const matches = useMediaQuery('(max-width:960px)');
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setOpen(open);
    };
   
    return (
        <AppBar position="static" className="header">
            <WrapContent>
                <Toolbar className="toolbar">
                    <img src={logo} alt="logo" />
                    <div className="logotext"> 
                        ОФИЦИАЛЬНЫЙ ПОРТАЛ <br/> МИНЗДРАВА МОСКОВСКОЙ ОБЛАСТИ <br/> ОБ ОНКОЛОГИЧЕСКИХ ЗАБОЛЕВАНИЯХ
                    </div>
                    <IconButton 
                        edge="start" 
                        className={'iconButton'}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon className="menuIcon" />
                    </IconButton> 

                    <div className="links">
                        <NavLink exact activeClassName="active" to="/">О портале</NavLink>
                        <NavLink activeClassName="active" to="/news">Новости</NavLink>
                        <NavLink activeClassName="active" to="/question_answer">Вопрос-ответ</NavLink>
                        <SearchIcon className="search" />
                    </div>
                </Toolbar> 
            </WrapContent>
            {
                matches ? 
                <Drawer
                    anchor={'left'}
                    open={open}
                    onClose={toggleDrawer(false)}
            
                    classes={{
                        paper: 'vp_drawerPaper'
                    }}
                >
                    <MobileMenu toggleDrawer={toggleDrawer} />
                </Drawer> : null
            }
        </AppBar>
    )
}

export default Header;