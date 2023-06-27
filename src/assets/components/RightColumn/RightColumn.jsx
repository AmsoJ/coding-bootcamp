import './rightcolumn.scss';
import { useGlobalContext } from '../../GlobalHooks/Context';

function RightColumn() {
    const {nextOrPrev, review, index} = useGlobalContext();


    return <div className="right-column col-12 col-sm-6 order-first order-md-last py-4 px-3">
        <div className="profile-pic-board position-relative col-12 p-5">
            
            {review.map((picture, pictureIndex) => {
                let classToShowProfilePic = "null";
                pictureIndex === index && (classToShowProfilePic = "active");
                return <img src={picture.image} alt="" className={`img-fluid img-thumbnail shadow-lg profile-img ${classToShowProfilePic}`} key={pictureIndex} />
            })}


            <div className="button-group shadow-lg btn-group btn-group-lg bg-secondary rounded-pill d-flex justify-content-center">
                <button className="btn d-flex align-items-center justify-content-center" data-id='prev' onClick={e => {
                    nextOrPrev(e);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8"/></svg>
                </button>
                <button className="btn d-flex align-items-center justify-content-center" data-id="next" onClick={e => {
                    nextOrPrev(e);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8"/></svg>
                </button>
            </div>
        </div>
    </div>
}

export default RightColumn;