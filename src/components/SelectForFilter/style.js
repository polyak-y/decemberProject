import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    vpAutocompleteRoot: {
        '& .MuiFormControl-root': {
            margin: 0
        }
    },
    vp_filedRoot: {
        background: '#fff!important',
        border: `2px solid ${theme.lightBlue}`,
        borderRadius: 10,
        cursor: props => props.readonly ? 'pointer' : 'text',
        paddingTop: props => props.readonly ? '0!important' : null,
        paddingLeft: props => props.readonly ? '0!important' : null,

        '&:hover': {
            background: '#fff'
        },

        '& input': {
            boxSizing: props => props.readonly && 'border-box',
            height: props => props.readonly && 45,
            cursor: props => props.readonly ? 'pointer' : 'text',
            paddingLeft: props => props.readonly && '12px!important',
            paddingTop: props => props.readonly && '23px!important',

            '&::selection': {
                background: 'transparent'
            }
        }
    },
    vp_labelRootTwoLine: {
        color: '#8A929D',
        fontSize: 14,
        marginTop: -5,
        width: '85%'
    },
    vp_labelRoot: {
        color: `${theme.darkViolet}!important`,
        fontWeight: 600,
        fontSize: 16,
        paddingTop: 1
    },
    vp_shrink: {
        color: '#8A929D!important'
    },
    vp_focused: {
        backgroundColor: '#fff!important',
        borderColor: theme.violet
    },
    vp_popper: {
        '& li': {
            color: 'tomato',
            fontSize: 15,
            textShadow: 'none',
            transition: 'all .25s',

            '&:hover': {
                background: '#BDCFFD'
            }
        }
    },
    vp_errorFiled: {
        border: '1px solid tomato'
    },

}));