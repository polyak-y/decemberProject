import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    vp_root: {
        width: '100%',
        border: `2px solid ${theme.lightBlue}`,
        borderRadius: 10,
        paddingLeft: 20,
        height: 50,        
        opacity: 1,
        transition: 'all .3s',

        '& input': {
            fontWeight: 600,
            fontSize: 18,
            color: theme.darkViolet,
            caretColor: theme.red,
            
            '&::-webkit-input-placeholder': {
                color: theme.darkViolet,
                fontWeight: 500,
                fontSize: 18,
                opacity: 1,
            },

            '&::-moz-placeholder': {
                color: theme.darkViolet,
                fontWeight: 500,
                fontSize: 18,
                opacity: 1,
            },

            '&:-moz-placeholder': {
                color: theme.darkViolet,
                fontWeight: 500,
                fontSize: 18,
                opacity: 1,
            },

            '&:-ms-input-placeholder': {
                color: theme.darkViolet,
                fontWeight: 500,
                fontSize: 18,
                opacity: 1,
            }
        }
    },
    vp_focused: {
        borderColor: theme.violet
    },
    iconClose: {
        color: theme.red,
        position: 'relative',
        right: 12,
        cursor: 'pointer'
    }
}));
