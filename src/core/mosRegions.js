const omsuArea =  require("./mo.json");

//функция закрашивает весь мир кроме Московской области
export function otherRegions (result, ymaps, map, setPolygons) {
    let background = new ymaps.Polygon([
        [
            [85, -179.99],
            [85, 179.99],
            [-85, 179.99],
            [-85, -179.99],
            [85, -179.99]
        ]
        ], {}, {
        fillColor: '#ffffff',
        opacity: 0.7,
        strokeWidth: 0,
        // Для того чтобы полигон отобразился на весь мир, нам нужно поменять
        // алгоритм пересчета координат геометрии в пиксельные координаты.
        coordRendering: 'straightPath'
    });

    // Найдём страну по её iso коду.
    var region = result.features.filter(function (feature) { 
        //console.log('feature', feature)
        return feature.properties.iso3166 === 'RU-MOS'; 
    })[0];

    // Добавим координаты этой страны в полигон, который накрывает весь мир.
        // В полигоне образуется полость, через которую будет видно заданную страну.
        var masks = region.geometry.coordinates;
        masks.forEach(function(mask){
            background.geometry.insert(1, mask);
        });

        // Добавим многоугольник на карту.
        map.current.geoObjects.add(background);
        fillColorMosReg(setPolygons)
}

//возвращает центр полигона
const getPolyCenter = (coords, map) => {
    const proj = map.options.get('projection');
    const zoom = map.getZoom();

    let minX = 0,
        maxY = 0,
        maxX = 0,
        minY = 0;

    coords[0].forEach(([x, y]) => {
        if (!minX || x < minX) minX = x;
        if (!maxY || y > maxY) maxY = y;

        if (!maxX || x > maxX) maxX = x;
        if (!minY || y < minY) minY = y;
    });

    const pixels1 = proj.toGlobalPixels([minX, maxY], zoom);
    const pixels2 = proj.toGlobalPixels([maxX, minY], zoom);

    const pixelCenter = [
        pixels1[0] + (pixels2[0] - pixels1[0]) / 2,
        (pixels2[1] - pixels1[1]) / 2 + pixels1[1]
    ];

    return proj.fromGlobalPixels(pixelCenter, zoom)
};

//для формирования массива для отрисовки полигонов МО
export function fillColorMosReg (setPolygons) {
    let polygons = [];

    omsuArea.features.forEach(item => {
        polygons.push({
            id: item.id,
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: item.geometry.coordinates.map((x, ind) => {
                    x.forEach((i) => i.reverse());
                    return x;
                }),
                fillRule: 'nonZero',
            },
            options: {
                fillColor: '#51B0D8', //раскраска регионов от кол-ва обращений
                fillOpacity: 1,
                strokeColor: "#fff",
                strokeWidth: 1,
                zIndex: item.geometry.coordinates.length === 1 ? 99 : 9,
                zIndexHover:item.geometry.coordinates.length === 1 ? 99 : 9,
                //hintLayout: hintLayout(ymaps,i,filterArea),
            }
        })    
    });

    setPolygons(polygons)
}


