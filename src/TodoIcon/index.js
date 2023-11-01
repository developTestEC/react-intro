import { ReactComponent as CheckIcon } from "./check.svg";
import { ReactComponent as DeleteIcon } from "./delete.svg";
import './TodoIcon.css';


function TodoIcon({type, color,onClick}) {
    const iconTypes= {
        "check": () => <CheckIcon className="Icon-svg" fill = {color}/>,
        "delete": () => <DeleteIcon className="Icon-svg" fill = {color}/>,
    }
    return(
    <span
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
        {iconTypes[type](color)}
    </span>

    );
}
export {TodoIcon};