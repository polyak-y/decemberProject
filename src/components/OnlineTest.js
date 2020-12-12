import WrapContent          from '../HOC/WrapContent/WrapContent';
import CustomButton         from './CustomButton/CustomButton';
import  check               from '../img/check.svg';

const OnlineTest = () => {

    return (
        <WrapContent>
            <div className="OnlineTest">
                <div className="contentOnlineTest">
                    <img className="imgCheck" src={check} alt="check"/>

                    <div className="passTest">
                        <h3 className="heading">Пройти онлайн-тест на выявление предрасположенности к раку</h3>
                        <p className="description">Тест на риск развития онкологических заболеваний</p>
                        <CustomButton 
                            title={'Пройти тест'} 
                            width={214}
                        />
                    </div>
                </div>
            </div>
        </WrapContent>
    )
}

export default OnlineTest;