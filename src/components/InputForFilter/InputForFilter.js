import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './style';

const InputForFilter = ({ value, changeInput, name, setState }) => {
  const classes = useStyles();
  
    return (
		<Input
            name={name}
            placeholder="Поиск..."
            disableUnderline
            value={value}
            onChange={changeInput}
            endAdornment={
                value.trim() ?
                    <InputAdornment position="end">
                        {
                            <CloseIcon  
                                className={classes.iconClose}
                                onClick={() => setState(prev => ({...prev, [name]: ''}))}
                            /> 
                        }
                    </InputAdornment>: null
            }
            classes={{
                root: classes.vp_root,
                focused: classes.vp_focused
            }}
        />
    )
}

export default InputForFilter;