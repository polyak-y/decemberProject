import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    button: {
        width: props => props.width || 156,
        height: 43,
        background: theme.violet,
        boxShadow: '0px 15px 20px -15px #86B6E6',
        borderRadius: 100,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        textTransform: 'none',
        transition: 'all .3s',

        '&:hover': {
            background: '#668ED8',
            boxShadow: 'none'
        }
    },
}));
