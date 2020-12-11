const SlideBlockDoctor = ({ item }) => {
    return (
        <div className={'SlideBlockDoctor'}>
            <div className="wrapPhoto">
                <img className="photo" src={item.photo} alt=""/>
            </div>
           <p className="name">{item.name}</p>
           <p className="position">{item.position}</p>
        </div>
    )
}

export default SlideBlockDoctor;