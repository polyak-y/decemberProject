import List                     from '@material-ui/core/List';
import ListItem                 from '@material-ui/core/ListItem';
import ListItemIcon             from '@material-ui/core/ListItemIcon';
import ListItemText             from '@material-ui/core/ListItemText';
import InfoIcon                 from '@material-ui/icons/Info';
import NotListedLocationIcon    from '@material-ui/icons/NotListedLocation';
import ListAltIcon              from '@material-ui/icons/ListAlt';

const MobileMenu = ({ toggleDrawer }) => {
    return (
        <div onClick={toggleDrawer(false)} >
            <List className="MobileMenu">
                <ListItem button className="listItem">
                    <ListItemIcon>
                        <InfoIcon className="iconMenu" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={'Об онкологии'} 
                        classes={{
                            primary: 'vp_text'
                        }}
                    /> 
                </ListItem>
                
                <ListItem button className="listItem">
                    <ListItemIcon>
                        <NotListedLocationIcon className="iconMenu" />
                    </ListItemIcon>
                    <ListItemText 
                        classes={{
                            primary: 'vp_text'
                        }}
                        primary={'Куда обратиться'} 
                    />
                </ListItem>
        
                <ListItem button className="listItem">
                    <ListItemIcon>
                        <ListAltIcon className="iconMenu"/>
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: 'vp_text'
                        }}
                        primary={'Список врачей'} 
                    />
                </ListItem>
            </List>
        </div>
    )
}

export default MobileMenu;