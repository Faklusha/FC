import './Monstr.css'
import monstrBeat from "../../images/monstrBeat.gif";
import monstrStay from "../../images/monstrStay.gif";
import classnames from "classnames";

function Monstr({monstrIsBeating, isStarted}) {

    return (
        <div className={classnames("content__monstr", {
            'content__monstr_start': !isStarted,
            'content__monstr_center': isStarted
        })}>
            <div className="content__monstr_image" style={{
                backgroundImage: `url(${monstrIsBeating ? monstrBeat : monstrStay})`
            }}/>
        </div>
    );
}

export default Monstr;
