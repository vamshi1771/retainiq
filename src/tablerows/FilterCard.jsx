import React from "react";
import "./FilterCard.css";


const FilterCard = ({ data }) => {


    return (
        <div className="cm-filter-card d-flex align-items-center justify-content-center">
             { data ? <> 
               <div className="mt-2" >
                 { data.category &&  <span className="ms-2 cm-content border border-blue-gray-300 text-blue-800">{data.category}</span>}
                  {data.brand  && <span className="ms-2 cm-content border border-blue-gray-300 text-blue-800">{data.brand}</span>}
                  { data.price&&  <span className="ms-2 cm-content border border-blue-gray-300 bg-blue text-blue-800">{data.price}</span>}
                </div>
                <div className="pt-3">
                    {data.availability && <span className="ms-2 cm-content border bg-blue border-blue-gray-300 text-blue-800">{data.availability}</span>}
                    {data.rating && <span className="ms-2 cm-content border border-blue-gray-300 text-blue-800">{data.rating}</span>}
                    {data.name && <span className="ms-2 cm-content border bg-blue border-blue-gray-300 text-blue-800">{data.name}</span>}
            </div>
            </> :
            <div className="">
                <span className="cm-content fw-medium text-blue-800 border border-blue-gray-300"> + Add Product Filters</span>
            </div>
            }
        </div>
    )
}
export default FilterCard;