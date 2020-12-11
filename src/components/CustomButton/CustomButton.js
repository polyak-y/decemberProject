import React            from 'react';
import Button           from '@material-ui/core/Button';
import { useStyles }    from './style';

const CustomButton  = ({ title }) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} disableElevation>
            {title}
        </Button> 
    )
}

export default CustomButton;
