import arrowTop from '../img/arrow_top.svg'

const Footer = () => {

    return (
        <footer className="footer">
            <p className="copyR">© 2020 — Министерство здравоохранения Московской области. Все права на материалы, <br/> находящиеся на сайте, охраняются в соответствии с законодательством РФ</p>
            <span 
                className="arrowTop"
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    })
                }}
            >
                <img src={arrowTop} alt="arrow_top"/>
            </span>
        </footer>
    )
}

export default Footer;