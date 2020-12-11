
import React                from 'react';
import WrapContent          from '../HOC/WrapContent/WrapContent';
import CustomButton         from './CustomButton/CustomButton';
import info_icon1           from '../img/info_icon1.svg';
import info_icon2           from '../img/info_icon2.svg';
import info_icon3           from '../img/info_icon3.svg';


const UsefulInformation = () => {
     
    return (
        <WrapContent>
            <div className={'UsefulInformation'}>
                <h3 className="heading">Полезная информация</h3>

                <div className="wrapBlocks">
                    <div className="blockInfo">
                        <h3>Вопрос-ответ <img src={info_icon1} alt="info_icon1"/></h3>
                        <p className="previewText">Заблуждения и мифы</p>
                        <p className="previewText">Обезболивание</p>
                        <CustomButton title={'Перейти'}/>
                    </div>

                    <div className="blockInfo">
                        <h3>Новости <img src={info_icon2} alt="info_icon2"/></h3>
                        <p className="previewText">Последние новости <br/>из мира онкологии</p>
                        <CustomButton title={'Перейти'}/>
                    </div>

                    <div className="blockInfo">
                        <h3>Сервисы <img src={info_icon3} alt="info_icon3"/></h3>
                        <p className="previewText">Статьи</p>
                        <p className="previewText">Сайты и сервисы</p>
                        <CustomButton title={'Перейти'}/>
                    </div>
                </div>
            </div>
        </WrapContent>
    )
}

export default UsefulInformation;