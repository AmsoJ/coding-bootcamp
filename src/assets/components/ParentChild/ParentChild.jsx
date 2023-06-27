import './parentchild.scss';
import LeftColumn from "../LeftColumn/LeftColumn";
import RightColumn from "../RightColumn/RightColumn";

function ParentChild() {
    return <div className="child-wrap container p-0 flex-column flex-sm-row row position-relative text-center aling-items-center">
        <LeftColumn />
        <RightColumn />
    </div>
}

export default ParentChild;