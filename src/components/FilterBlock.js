import React                from 'react';
import WrapContent          from '../HOC/WrapContent/WrapContent';
import Fade                 from '@material-ui/core/Fade';
import { Scrollbars }       from 'react-custom-scrollbars';
import useMediaQuery        from '@material-ui/core/useMediaQuery';
 
const FilterBlock = ({ visible }) => {
    const matches = useMediaQuery('(max-width:500px)');

    return (
        <Fade in={visible} timeout={300}>
            <div className={'FilterBlock'} style={{display: !visible ? 'none' : 'block'}}>
                <WrapContent>
                    <Scrollbars
                        autoHeight
                        autoHeightMax={matches ? 320 : 620}
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                        renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                        renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                        renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                        renderView={props => <div style={{paddingRight: 15, ...props.style}} />}
                    > 
                        {
                            Array.from(new Array(3)).map((_, ind) => {
                                return (
                                    <React.Fragment key={ind}>
                                        <div className="infoBlock">
                                            <div className="titleBlock">
                                                Государственное автономное учреждение  здравоохранен ия Московской области «Центральная городская клиническая больница г. Реутов»
                                            </div>
                                            <div className="addressPhone">
                                                <p className="address">г.Реутов, ул. Гагарина, д.4</p>
                                                <p className="phone">8 (903) 722-61-53</p>
                                            </div>
                                        </div>
                    
                                        <div className="infoBlock">
                                            <div className="titleBlock">
                                                Государственное бюджетное учреждение здравоохранения Московской области «Балашихинская областная больница»
                                            </div>
                                            <div className="addressPhone">
                                                <p className="address">143900 г.Балашиха, ш.Энтузиастов д.41</p>
                                                <p className="phone">8 (916) 431-48-47</p>
                                                <p className="phone">8 (915) 451-08-24</p>
                                            </div>
                                        </div>
                    
                                        <div className="infoBlock">
                                            <div className="titleBlock">
                                                Государственное бюджетное учреждение здравоохранения Московской области «Видновская районная клиническая больница»
                                            </div>
                                            <div className="addressPhone">
                                                <p className="address">142700 Ленинский район, г. Видное, пр-т Ленинского комсомола, д.36А</p>
                                                <p className="phone">8 (916) 077-75-74</p>
                                            </div>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                        }
                    </Scrollbars>
                </WrapContent>
            </div>
        </Fade>
    )
}

export default FilterBlock;


