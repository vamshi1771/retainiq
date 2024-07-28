import React from "react";
import "./DesignCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const NewDesignCard = ({id, data,imageName,handleOpenDesignModal, isInside = false, handleInsertDesign}) =>{
   
    return(
        <div className="cm-design-card border d-flex align-items-center justify-content-center">
           {data != null ? <>
            <img className="mt-4 position-relative cm-img-card" src={data} alt=""/>
            <p className=" mt-4 ms-2 fw-medium cm-content text-blue-800">{imageName}</p>
          {isInside && <span onClick={()=>handleInsertDesign(id)} className="cm-pointer position-absolute text-blue-800 bg-white fw-medium cm-insert-btn border border-blue-gray-300">Insert</span>}
            </> :
            <div>
                <span className="cm-content cm-pointer fw-medium text-blue-800 border border-blue-gray-300" onClick={handleOpenDesignModal} >+ Add design</span>
                </div>
            }
           
            </div>
    );
}

export default NewDesignCard;