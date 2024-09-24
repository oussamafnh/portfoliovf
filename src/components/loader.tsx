import '../style/loader.css';

const Loader = () => {
    return (
        <div className="loader">
            <div className="ld-ripple">
                <div></div>
                <div></div>
            </div>
            <span className="dot"></span>
        </div>
    )
}

export default Loader