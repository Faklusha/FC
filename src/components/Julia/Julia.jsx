import classnames from "classnames";

import juliaStay from '../../images/juliaStay.gif';
import juliaBeat from '../../images/juliaBeat.gif';
import juliaWin from '../../images/juliaWin.gif';
import juliaRun from '../../images/juliaRun.gif';
import './Julia.css'

function Julia({isBeating, isWined, isStarted, isRun}) {
    const getJuliaImage = () => {
        if (isBeating) {
            return juliaBeat
        }
        if (isRun) {
            return juliaRun;
        }
        if (isWined) {
            return juliaWin
        }
        return juliaStay
    }

    return (
        <div className={classnames("content__julia", {
            'content__julia_start': !isStarted,
            'content__julia_center': isStarted
        })}>
            <div className="content__julia_image" style={{
                backgroundImage: `url(${getJuliaImage()})`
            }}/>

        </div>
    );
}

export default Julia;
