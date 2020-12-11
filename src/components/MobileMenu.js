import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

const MobileMenu = ({ toggleDrawer }) => {
    return (
        <div onClick={toggleDrawer(false)} >
            <List className="MobileMenu">
                <ListItem button className="listItem">
                    <ListItemIcon>
                        <MailIcon className="iconMenu" />
                    </ListItemIcon>
                    <ListItemText 
                        primary={'О портале'} 
                        classes={{
                            primary: 'vp_text'
                        }}
                    /> 
                </ListItem>
                
                <ListItem button className="listItem">
                    <ListItemIcon>
                        <MailIcon className="iconMenu" />
                    </ListItemIcon>
                    <ListItemText 
                        classes={{
                            primary: 'vp_text'
                        }}
                        primary={'Новости'} 
                    />
                </ListItem>
        
                <ListItem button className="listItem">
                    <ListItemIcon>
                        <MailIcon className="iconMenu"/>
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: 'vp_text'
                        }}
                        primary={'Вопрос-ответ'} 
                    />
                </ListItem>
            </List>
        </div>
    )
}

export default MobileMenu;