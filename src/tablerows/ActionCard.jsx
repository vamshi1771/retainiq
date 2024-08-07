import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./TableRows.css";

const ActionCard = ({id, handledeleteState,isVisiable}) => {

    return(
        <div className="cm-action-card">
            <div className="cm-trash-can">
           
         <FontAwesomeIcon onClick={()=>handledeleteState(id)} size="xl" className="cm-trash-can cm-pointer" icon={faTrashCan} style={{color: "#c7431f", opacity : isVisiable ? 1 : 0}}  />
            </div>
            <span className="pt-2">
            <h1 className="cm-number text-blue-800"> {id+1} </h1>
            <FontAwesomeIcon className="cm-grid-icon cm-pointer mb-2" size="2xl" icon={faGripVertical} />
           </span>
        </div>
    )
}
export default ActionCard;