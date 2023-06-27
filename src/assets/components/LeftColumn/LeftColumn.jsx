import './leftcolumn.scss';
import { useGlobalContext } from "../../GlobalHooks/Context";

function LeftColumn() {
    const {review, index} = useGlobalContext();

    return <div className="left-column col-12 col-sm-7 row align-items-start align-items-sm-center p-0 text-md-start">
        <div className="quote-board p-0 position-relative">
            
            <figure className="bq blockquote">
                
                <svg className="position-absolute icon" xmlns="http://www.w3.org/2000/svg" width="120" height="100"><defs><linearGradient id="a" x1="31.368%" x2="100%" y1="72.917%" y2="19.557%"><stop offset="0%" stop-color="#9975D0"/><stop offset="100%" stop-color="#4A3FDB"/></linearGradient></defs><path fill="url(#a)" fill-rule="evenodd" d="M52.615 0L24.858 100H0V0h52.615zM120 0L92.243 100H67.385V0H120z" opacity=".15"/></svg>
                
                <p className="quote">
                    {review[index].quote}
                </p>
                
                <figcaption className="footer-block mt-5 d-flex align-items-center  justify-content-around position-relative">
                    {review.map((item, itemIndex) => {
                        let showNameRole = "null";
                        (itemIndex === index) && (showNameRole = "active");
                        return <div className={`detail d-flex w-100 ${showNameRole}`} key={item.id}>
                            <h4 className={`name ${showNameRole}`}>{item.name}</h4>
                            <small className={`role ${showNameRole}`} >{item.role}</small>
                        </div>
                    })}
                </figcaption>
            </figure>
        </div>
    </div>
}

export default LeftColumn;