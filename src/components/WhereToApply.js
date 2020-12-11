import { useState }         from 'react';
import WrapContent          from '../HOC/WrapContent/WrapContent';
import Tabs                 from '@material-ui/core/Tabs';
import Tab                  from '@material-ui/core/Tab';
import FilterBlock          from './FilterBlock';
import YandexMap            from './YandexMap';
import SelectForFilter      from '../components/SelectForFilter/SelectForFilter';
import InputForFilter       from '../components/InputForFilter/InputForFilter';


const WhereToApply = () => {

    const [value, setValue] = useState(0);
    const [state, setState] = useState({
        filterInput: ''
    });

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    const changeInput = (event) => {
        const { value, name } = event.target;
        setState(prev => ({...prev, [name]: value}))
    }

   /*  const renderTabPage = () => {
        switch(value) {
            case 0: 
                return <YandexMap />

            case 1:
                return <FilterBlock />

            default:
                return null;
        }
    } */

    return (
       
        <div className={'WhereToApply'}>
            <h3 className="heading">Куда обратиться?</h3>
            
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                centered
                classes={{
                    indicator: 'vp_indicator',
                    root: 'vp_tabsRoot'
                }}
            >
                <Tab 
                    label="Карта" 
                    disableRipple 
                    classes={{
                        wrapper: 'vp_wrapper',
                        root: 'vp_root'
                    }}
                />
                <Tab 
                    label="Список" 
                    disableRipple 
                    classes={{
                        wrapper: 'vp_wrapper',
                        root: 'vp_root'
                    }}
                />
            </Tabs>

            <WrapContent>
                <div className="filtersBlock">
                    <div className="inputFilter">
                        <InputForFilter 
                            value={state.filterInput}
                            setState={setState}
                            name={'filterInput'}
                            changeInput={changeInput}
                        />
                    </div>

                    <div className="filterFirstLine twoFilter">
                        <SelectForFilter 
                            readonly
                            label={'Специализация'}
                        />
                    </div>
                    
                    <div className="filterFirstLine">
                        <SelectForFilter
                            readonly
                            label={'Методы лечения'}
                        />
                    </div>
                </div>
            </WrapContent>

            <YandexMap visible={value === 0} />
            <FilterBlock visible={value === 1} />
        </div>
    )
}

export default WhereToApply;