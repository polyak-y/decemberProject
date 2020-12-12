import { Placemark, Clusterer }         from 'react-yandex-maps';
import { createHTMLBaloon }             from '../core/mosRegions';
import pin                              from '../img/pin.svg';

const ClasterAndPlaceMark = ({ coordinatesMap }) => {
    return (
        <Clusterer // обертка для Placemark, при увеличении масштаба объеденяет рядом стоящие Placemark в один кружок
            options={{
                preset: 'islands#redClusterIcons', // название иконки 
                groupByCoordinates: false 
            }}
        >
            {
                coordinatesMap.map(item => { //через цикл вывели много меток PlaceMark
                    return (
                        <Placemark // метка на карте. Чтобы сделать несколько меток Placemark надо поместить в массив
                            key={item.id}
                            geometry={item.coord} // координаты метки
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: pin, //установили в качестве метки свою картинку
                                iconImageSize: [30, 30], // размер нашей картинки
                                hideIconOnBalloonOpen: false, //запрет на скрытие метки по клику на балун
                                balloonOffset: [3, -40]

                            }}
                            modules={[ //чтобы видеть хинты и балуны подключаем данные модули
                                'objectManager.addon.objectsBalloon',
                                'objectManager.addon.objectsHint',
                            ]}
                            properties={{
                                //balloonContentHeader: "Balloon3",
                                balloonContent: createHTMLBaloon(),
                            }}
                        />
                    )
                })
            }
        </Clusterer>
    )
}

export default ClasterAndPlaceMark;