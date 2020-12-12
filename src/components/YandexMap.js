import { useRef, useState }                                 from 'react';
import Fade                                                 from '@material-ui/core/Fade';
import ClasterAndPlaceMark                                  from './ClasterAndPlaceMark';
import { YMaps, Map, ObjectManager }                        from 'react-yandex-maps';
import { otherRegions }                                     from '../core/mosRegions';

const coordinatesMap =  [
    {id:1, coord: [55.755631225161885,36.73869543037936]},
    {id:2, coord: [55.712238781529436, 38.98539953194186]},
    {id:3, coord: [55.1457,38.7884]},
    {id:4, coord: [56.00573781017211, 35.97514562569186]},
    {id:5, coord: [56.40986061161565, 37.496752071004344]},
  ]

const YandexMap = ({ visible }) => {
    const map = useRef(null);
    const [polygons, setPolygons]= useState([]);

    return (
        <Fade in={visible} timeout={300}>
            <div className={'YandexMap'} style={{display: !visible ? 'none' : 'block'}}>
                <YMaps //обертка для карты
                    query={{ // для подключения апи ключа. load: 'package.full' - используем все пакеты
                        ns: 'use-load-option',
                        apikey: 'af28acb6-4b1c-4cd1-8251-b2f67a908cac',
                        load: 'package.full',
                    }}
                >
                    <Map //сама карта
                        className="vp_mapContainer" //задали класс через который я проставил ширину и высоту.
                        state={{
                            center: [55.751574, 37.573856], //центр карты
                            zoom:8, //масштаб
                            controls: ['zoomControl'] //контролы. Оставили кнопки для увеличения и кнопку полного экрана
                        }}
                        options={{
                            suppressMapOpenBlock: true, //скрываем метку "Открыть в яндекс картах"
                            //restrictMapArea: [[50.36748005199618,20.69233963585486],[59.81415239322392,54.44233963585485]] // Ограничим область карты.
                        }}
                        instanceRef={yaMap => {
                            if(yaMap) {
                                //console.log(yaMap)
                                map.current = yaMap;
                                yaMap.controls.get('zoomControl').options.set({size: 'small'});
                                yaMap.behaviors.disable('scrollZoom');  //отключили zoom на колесико мыши
                            }
                        }}
                        onLoad={ymaps => {
                            //console.log('yamaps', ymaps.ready) //ymaps.ready(init); - ymaps тот же что и в обычном жс
                            ymaps.borders.load('RU', {
                                lang: 'ru',
                                quality: 2
                            }).then((result) => {
                                otherRegions(result, ymaps, map, setPolygons);
                            });
                        }}
                    >
                        { 
                            polygons.length ?
                                <ObjectManager
                                    instanceRef={ref => {
                                        if(ref) {
                                            ref.objects.events.add('mouseenter',function(e) {
                                                const objectId = e.get('objectId');

                                                ref.objects.setObjectOptions(objectId, {
                                                    opacity: 0.6
                                                });
                                            })

                                            ref.objects.events.add('mouseleave',function(e) {
                                                const objectId = e.get('objectId');

                                                ref.objects.setObjectOptions(objectId, {
                                                    opacity: 1
                                                });
                                            })
                                        }
                                    }}
                                    features={{
                                        type: 'FeatureCollection',
                                        features: [...polygons]
                                    }}
                                /> : null
                        }

                        <ClasterAndPlaceMark coordinatesMap={coordinatesMap} />
                        
                    </Map>
                </YMaps>
            </div>
        </Fade>
    )
}

export default YandexMap;