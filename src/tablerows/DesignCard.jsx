import React from "react";
import "./DesignCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const DesignCard = ({varientId, rowId, id, data,imageName,handleOpenDesignModal, isInside = false, handleInsertDesign}) =>{
    
    return(
        <div className="cm-design-card border d-flex align-items-center justify-content-center">
           {data != null ? <>
            <img className="mt-4 position-relative cm-img-card" src={data} alt=""/>
            <p className=" mt-2 ms-2 fw-medium cm-content text-blue-800">{imageName}</p>
          { !isInside && <FontAwesomeIcon  className ="cm-pointer position-absolute cm-edit-icon" icon={faEdit} onClick={()=>handleOpenDesignModal(varientId,rowId)} />}
            </> :
            <div>
                <span className="cm-content cm-pointer fw-medium text-blue-800 border border-blue-gray-300" onClick={handleOpenDesignModal} >+ Add design</span>
                </div>
            }
           
            </div>
    );
}

export default DesignCard;