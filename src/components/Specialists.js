import React                from 'react';
import WrapContent          from '../HOC/WrapContent/WrapContent';
import Slider               from 'react-slick';
import SlideBlockDoctor     from './SlideBlockDoctor';
import { settings }         from '../core/settingsForSlider';
import doc1                 from '../img/doc1.png'
import doc2                 from '../img/doc2.png'
import doc3                 from '../img/doc3.png'
import doc4                 from '../img/doc4.png'
import doc5                 from '../img/doc5.png'
import doc6                 from '../img/doc6.png'
import doc7                 from '../img/doc7.png'
import doc8                 from '../img/doc8.png'
import doc9                 from '../img/doc9.png'
import doc10                from '../img/doc10.png'
import doc11                from '../img/doc11.png'
import doc12                from '../img/doc12.png'
import doc13                from '../img/doc13.png'

const Specialists = () => {

    const data = [
        {id: 1, name: 'Ошейчик Владимир', position: 'Общий онколог', photo: doc1},
        {id: 2, name: 'Ванушко Владимир', position: 'Онкоэндокринолог', photo: doc2},
        {id: 3, name: 'Ошейчик Владимир', position: 'Клинический нутрициолог', photo: doc3},
        {id: 4, name: 'Ильялов Сергей', position: 'Радиолог', photo: doc4},
        {id: 5, name: 'Ошейчик Владимир', position: 'Общий онколог', photo: doc5},
        {id: 6, name: 'Ванушко Владимир', position: 'Онкоэндокринолог', photo: doc6},
        {id: 7, name: 'Ошейчик Владимир', position: 'Клинический нутрициолог', photo: doc7},
        {id: 8, name: 'Ильялов Сергей', position: 'Радиолог', photo: doc8},
        {id: 9, name: 'Ошейчик Владимир', position: 'Общий онколог', photo: doc9},
        {id: 10, name: 'Ванушко Владимир', position: 'Онкоэндокринолог', photo: doc10},
        {id: 11, name: 'Иванов Артем', position: 'Клинический нутрициолог', photo: doc11},
        {id: 12, name: 'Григорьева Светлана', position: 'Радиолог', photo: doc12},
        {id: 13, name: 'Панченко Ирина', position: 'Общий онколог', photo: doc13},
    ];
    
    return (
        <WrapContent>
            <div className={'Specialists'}>
                <h3 className="heading">Специалисты</h3>
                <div className="wrapSlider">
                    <Slider {...settings}>
                        {
                            data.map(item => {
                                return (
                                    <SlideBlockDoctor item={item} key={item.id} />
                                )
                            })
                        }
                    </Slider>
                </div>
                
            </div>
        </WrapContent>
    )
}

export default Specialists;