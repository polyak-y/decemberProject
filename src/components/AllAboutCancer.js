import React                from 'react';
import WrapContent          from '../HOC/WrapContent/WrapContent';
import heartPeople          from '../img/heartPeople.svg';
import check                from '../img/check.svg';

const AllAboutCancer = () => {
    
    const arrList = ['Методы диагностики и лечения', 'Список ведущих медцентров', 'Лечащие врачи и специалисты', 'ЗОЖ и профилактика заболеваний']
  
    return (
        <WrapContent>
            <div className={'AllAboutCancer'}>
                <div className="leftContent">
                    <h3>Все об онкологии в Подмосковье</h3>

                    <div className="list">
                        {
                            arrList.map((item, ind) => (
                                <p className="item" key={ind}>
                                    <img src={check} alt="check"/>
                                    <span>{item}</span>
                                </p>
                            ))
                        }
                    </div>
                </div>

                <div className="rightContent">
                    <img className="img" src={heartPeople} alt="heartPeople"/>
                </div>
            </div>
        </WrapContent>
    )
}

export default AllAboutCancer;
