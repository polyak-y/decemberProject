import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './style';


const optionsFtt = [
    {id: 1, title: 'The Shawshank Redemption', year: 1994 },
    {id: 2, title: 'The Godfather', year: 1972 },
    {id: 3, title: 'The Godfather: Part II', year: 1974 }
];



const SelectForFilter = ({label, twoLineLabel, options, handleValueSelect, value, readonly, disabled, errorData}) => {

    const classes = useStyles({readonly});

    return (
        <>
            <Autocomplete
                popupIcon={<ExpandMoreIcon style={{color: '#F54E5A'}}/>}
                disabled={disabled}
                noOptionsText={'Не найдено'}
                disableClearable
                value={value}
                options={optionsFtt}
                onChange={handleValueSelect}
                getOptionLabel={(option) => option.title}
				getOptionSelected={(option, value) => value.id === option.id} //помогает избежать варнингов в консоле
                style={{ width: '100%' }}
                classes={{
                    root: classes.vpAutocompleteRoot,
                }}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        error={Boolean(errorData)}
                        label={label}
                        variant="filled"
                        margin="dense"//делает ниже
                        InputLabelProps={{
                            classes: {
                                root: twoLineLabel ? classes.vp_labelRootTwoLine : classes.vp_labelRoot,
                                shrink: classes.vp_shrink,
                                error: classes.vp_errorLabel
                            }
                        }}
                        InputProps={{
                            ...params.InputProps,
                            disableUnderline: true, //пропадает нижняя линия
                            classes: {
                                root: classes.vp_filedRoot,
                                focused: classes.vp_focused,
                                error: classes.vp_errorFiled,
                            },
                            readOnly: Boolean(readonly),
                        }}
                    />
                }
            />
        </>
    )
};

export default SelectForFilter;