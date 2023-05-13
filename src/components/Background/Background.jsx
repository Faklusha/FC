import sun from '../../images/sun.png';
import castle from '../../images/castle.png';
import './Background.css'

function Background() {
    return (
        <div className="background">
            <div className="background">
                <div className="background__sun">
                    <div className="background__sun_image" style={{
                        backgroundImage: `url(${sun})`
                    }}/>
                </div>

                <div className="background__castle">
                    <div className="background__castle_image" style={{
                        backgroundImage: `url(${castle})`
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default Background;
