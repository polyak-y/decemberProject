export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
   
    responsive:[
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 670,
            settings: {
                //arrows: false,
                slidesToShow: 1,
                //centerMode: true,
                //centerPadding: '30px',
            }
        }
    ] 
};
