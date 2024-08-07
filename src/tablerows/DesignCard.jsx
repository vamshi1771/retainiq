import React from "react";
import "./DesignCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const DesignCard = ({variantId, rowId, id, data,imageName,handleOpenDesignModal, isInside = false,isHovered, handleInsertDesign}) =>{
    
    return(
        <div className="cm-design-card border d-flex align-items-center justify-content-center">
           {data != null ? <>
            <img className="mt-4 position-relative cm-img-card" src={data} alt=""/>
            <p className=" mt-2 ms-2 fw-medium cm-content text-blue-800">{imageName}</p>
          { !isInside && <FontAwesomeIcon  className ={`cm-pointer position-absolute ${ !isHovered ? 'cm-edit-icon' : 'cm-edit-icon-hovered'}`} size="xs" style={{color: "#082f49"}} icon={faEdit} onClick={()=>handleOpenDesignModal(variantId,rowId)} />}
            </> :
            <div>
                <span className="cm-content-text cm-pointer fw-medium text-blue-800 shadow-inner border border-blue-gray-300" onClick={()=>handleOpenDesignModal(variantId,rowId)} >+ Add design</span>
                </div>
            }
           
            </div>
    );
}

export default DesignCard;