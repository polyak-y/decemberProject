import WrapContent          from '../HOC/WrapContent/WrapContent';
import icon_one             from '../img/icon_one.svg';
import icon_two             from '../img/icon_two.svg';
import icon_three           from '../img/icon_three.svg';
import icon_four            from '../img/icon_four.svg';
import icon_five            from '../img/icon_five.svg';

const WhatNeedKnow = () => {
 
    const data = [
        {title: 'Профилактика', src: icon_one},
        {title: 'Диагностика', src: icon_two},
        {title: 'Лечение', src: icon_three},
        {title: 'Реабилитация', src: icon_four},
        {title: 'Поддержка', src: icon_five}
    ]
    
    return (
        <WrapContent>
            <div className={'WhatNeedKnow'}>
                <h3 className="heading">Что нужно знать об онкологии</h3>

                {
                    data.map((item, ind) => (
                        <div className="iconBlock" key={ind}>
                            <div className="imgBlock">
                                <img src={item.src} alt=""/>
                            </div>
                            <span className="text">{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </WrapContent>
    )
}

export default WhatNeedKnow;