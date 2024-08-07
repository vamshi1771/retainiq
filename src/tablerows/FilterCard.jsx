import { React, useState } from "react";
import "./FilterCard.css";


const FilterCard = ({ data }) => {

    const [isHovered, setIsHovered] = useState(false);


    return (
        <div onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cm-filter-card cm-pointer d-flex align-items-center justify-content-center">
            {data ? <div className = {`postion-relative ${isHovered ? 'pop-up' : ''}`} >
                <div className="mt-2" >
                    {data.category && <span className="ms-2 cm-content-text border border-blue-gray-300 text-blue-800">{data.category}</span>}
                    {data.brand && <span className="ms-2 cm-content-text border border-blue-gray-300 text-blue-800">{data.brand}</span>}
                    {data.price && <span className="ms-2 cm-content-text border border-blue-gray-300  text-blue-800">{data.price}</span>}
                </div>
                <div className="pt-3">
                    {data.availability && <span className="ms-2 cm-content-text border bg-blue  border-blue-gray-300 text-blue-800">{data.availability}</span>}
                    {data.rating && <span className="ms-2 cm-content-text border border-blue-gray-300 text-blue-800">{data.rating}</span>}
                    {data.name && <span className="ms-2 cm-content-text border bg-blue border-blue-gray-300 text-blue-800">{data.name}</span>}
                </div>
            </div> :
                <div className="">
                    <span className="cm-content-text fw-medium text-blue-800 border border-blue-gray-300"> + Add Product Filters</span>
                </div>
            }
        </div>
    )
}
export default FilterCard;