import logo from './logo.svg';
import React from 'react';
import ActionCard from './tablerows/ActionCard';
import FilterCard from './tablerows/FilterCard';
import DesignCard from './tablerows/DesignCard';
import image from './images/pngaaa.com-5820664.png';
import image_1 from './images/image_1.webp'
import image_2 from './images/image_2.webp'
import image_3 from './images/image_3.webp'
import image_4 from './images/image_4.webp'
import image_5 from './images/image_5.webp'
import image_6 from './images/image_6.webp'
import image_7 from './images/image_7.webp'
import image_8 from './images/image_8.webp'
import image_9 from './images/image_9.webp'
import image_10 from './images/image_10.webp'
import image_11 from "./images/image_11.webp"
import image_12 from "./images/image_12.webp"
import SnackBar from './tablerows/SnackBar';
import { useDispatch, useSelector } from "react-redux";
import { openSnackBar } from './redux/actions/snackbaractions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTrash, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Modal from './modal/NewDesignsModal';
import { useRef } from 'react';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';

import './App.css';

function App() {

    const [columnData, setColumnData] = React.useState({
        newVarients: [{ id: 1, label: "Varient1" }]
    });
    const designsData = [
        { id: 1, imageName: "sports shoes", imageUrl: [image] },
        { id: 2, imageName: "Three-Piece Tuxedo", imageUrl: [image_1] },
        { id: 3, imageName: "White Sharwani ", imageUrl: [image_2] },
        { id: 4, imageName: "childern dress", imageUrl: [image_3] },
        { id: 5, imageName: "white frok", imageUrl: [image_4] },
        { id: 6, imageName: "Grey Suit", imageUrl: [image_5] },
        { id: 7, imageName: "High Neck Jacket", imageUrl: [image_6] },
        { id: 8, imageName: "Brown Casual Jacket", imageUrl: [image_7] },
        { id: 9, imageName: "sportsShoes", imageUrl: [image_8] },
        { id: 10, imageName: "Golden Brocade Sherwani", imageUrl: [image_9] },
        { id: 11, imageName: "Sherwani", imageUrl: [image_10] },
        { id: 12, imageName: "Ivory Silk Sherwani", imageUrl: [image_12] }];

    const [modalStatus, setModalStatus] = React.useState(false);
    const [varientId, setVarientId] = React.useState(0);
    const [rowId, setRowId] = React.useState(0);
    const handleModalOpen = () => setModalStatus(true);
    const handleModalClose = () => setModalStatus(false);
    const [hoveredRowIndex, setHoveredRowIndex] = React.useState(null);
    const disPatch = useDispatch();
    const [varientIndex, setVarientIndex] = React.useState(0);
    const initialRowData = {
        productFilter: null,
        primaryVairent: { imageName: "", imageUrl: [] },
        newVarients: [
            { id: 1, imageName: "", imageUrl: [] },
        ]
    }
    const [rowData, setRowData] = React.useState([{
        productFilter: {
            id: 1,
            name: "shrewanis",
            brand: "Brand H",
            price: "$40-$60",
            rating: "4.6",
            availability: "Out of Stock"
        },
        primaryVairent: { imageName: "Golden Brocade Sherwani", imageUrl: [image_2] },
        newVarients: [
            { id: 1, imageName: "Ivory Silk Sherwani", imageUrl: [image_12] },
        ]
    },
    {
        productFilter: {
            id: 2,
            name: "Formal Suit",
            category: "Formal Wear",
            rating: "4.7",
            availability: "In Stock"
        },
        primaryVairent: { imageName: "Three-Piece Tuxedo", imageUrl: [image_1] },
        newVarients: [
            { id: 1, imageName: "Plaid Check Suit", imageUrl: [image_7] },
        ]
        ,
    },
    {
        productFilter: {
            id: 4,
            category: "Dresses",
            brand: "Brand J",
            price: "$150-$200",
            availability: "In Stock"
        },
        primaryVairent: { imageName: "white frok", imageUrl: [image_4] },
        newVarients: [
            { id: 1, imageName: "childern dress", imageUrl: [image_3] },
        ]
    },
    {
        productFilter: {
            id: 3,
            name: "Jacket",
            category: "Outerwear",
            price: "$80-$120",
            rating: "4.8",
        },
        primaryVairent: { imageName: " High Neck Jacket", imageUrl: [image_6] },
        newVarients: [
            { id: 1, imageName: " Brown Casual Jacket", imageUrl: [image_11] },
        ]
    }])
    const dragItem = useRef(null);
    const dragOverItem = React.useRef(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleOPenMenuitems = (event, index) => {
        setAnchorEl(event.currentTarget);
        setVarientIndex(index);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenDesignModal = (varientId, rowId) => {
        setModalStatus(true);
        setVarientId(varientId);
        setRowId(rowId)
    }

    const handleSortRows = () => {
        let _rowData = [...rowData];
        const draggedItem = _rowData.splice(dragItem.current, 1)[0];
        _rowData.splice(dragOverItem.current, 0, draggedItem);

        setRowData(_rowData);
        { dragItem.current !== dragOverItem.current && disPatch(openSnackBar({ severity: "success", message: "State swaped Successfully" })) }
        dragItem.current = null;
        dragOverItem.current = null;
    }

    const handleDeleteRow = (index) => {
        setRowData(prevList => prevList.filter((item, i) => i !== index));
        disPatch(openSnackBar({ severity: "error", message: "State deleted Successfully" }))
    }
    const handleDeleteVarient = (index) => {
        setColumnData(prevColumnData => ({
            ...prevColumnData,
            newVarients: prevColumnData.newVarients.filter((item, i) => i !== index)
        }));

        setRowData(prevRowData => prevRowData.map(item => ({
            ...item,
            newVarients: item.newVarients.filter((variant, i) => i !== index)
        })));
        disPatch(openSnackBar({ severity: "error", message: "Varient deleted Successfully" }))
        handleClose();
    }

    const handleChangerows = async () => {
        let rowList = [...rowData];
        if (rowData.length > 0) {
            const dummyRow = { ...rowData[0] };
            dummyRow.productFilter = null;
            dummyRow.primaryVairent = { imageName: "", imageUrl: [] }

            const obj = { id: null, imageName: "", imageUrl: [] }
            const varients = [];
            for (let i = 0; i < dummyRow.newVarients.length; i++) {
                varients.push(obj);
            }
            dummyRow.newVarients = varients;
            setRowData(prevList => [...prevList, dummyRow]);
        }
        else {
            setRowData(prevList => [...prevList, initialRowData])
        }
        setColumnData({
            ...columnData,
        })
        disPatch(openSnackBar({ severity: "success", message: "New State Added Successfully" }))
    }

    const handleChangeColumns = () => {

        let newVarientslength = columnData.newVarients.length;
        const newCol = { id: newVarientslength, label: `Varient${newVarientslength + 1}` };
        const list = [...columnData.newVarients];
        list.push(newCol);
        setColumnData({
            ...columnData,
            newVarients: list,
        });
        const newRowData = rowData.map((element) => {
            const tempRow = { ...element };
            const tempList = [...tempRow.newVarients];
            const newRowvarientData = { id: 2, imageName: "", imageUrl: [] };
            tempList.push(newRowvarientData);
            tempRow.newVarients = tempList;
            return tempRow;
        });
        setRowData(newRowData);
        disPatch(openSnackBar({ severity: "success", message: "New Varient Added Successfully" }))
    }


    const handleInsertDesign = (ind) => {

        const newVariant = { id: varientId, imageName: designsData[ind].imageName, imageUrl: [designsData[ind].imageUrl] };
        if (varientId != -1) {
            setRowData(prevRowData => {
                const newRowData = [...prevRowData];
                const rowToUpdate = { ...newRowData[rowId] };
                if (!rowToUpdate.newVarients || varientId < 0 || varientId >= rowToUpdate.newVarients.length) {
                    return prevRowData;
                }
                const newVariants = [...rowToUpdate.newVarients];
                newVariants[varientId] = { ...newVariants[varientId], ...newVariant };
                rowToUpdate.newVarients = newVariants;
                newRowData[rowId] = rowToUpdate;
                return newRowData;
            });
        }
        else {
            setRowData(prevRowData =>
                prevRowData.map((row, i) => 
                    i === rowId
                        ? { ...row, primaryVairent: newVariant }
                        : row
                )
            );

        }
        handleModalClose();
        disPatch(openSnackBar({ severity: "success", message: "Design Added Successfully" }))
    }

    return (
        <div className="mt-4  cm-content border border-blue-gray-300 table-container">
            <table>
                <thead>
                    <tr>
                        <th className="cm-table-header z1 sticky"></th>
                        <th className="cm-table-header z1 stickycard">Product Filter</th>
                        <th className='cm-table-header' >Primary Varient</th>
                        {columnData.newVarients.map((column, index) => (
                            <th className='cm-table-header' key={column.id}><span>{column.label}</span>
                                <FontAwesomeIcon className="ms-4 cm-pointer" icon={faEllipsisVertical}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={(e) => handleOPenMenuitems(e, index)} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rowData.map((item, index) => (
                        <tr className='cm-table-row' key={item.id}
                            draggable
                            onDragStart={() => dragItem.current = index}
                            onDragEnter={() => dragOverItem.current = index}
                            onDragEnd={handleSortRows}
                            onDragOver={(e) => e.preventDefault()}
                            onMouseEnter={() => setHoveredRowIndex(index)}
                            onMouseLeave={() => setHoveredRowIndex(null)}
                        >
                            <td align='center' className="z1 sticky"><ActionCard key={index} id={index} handledeleteState={handleDeleteRow} isVisiable={hoveredRowIndex === index} /></td>
                            <td className=" z1 stickycard"><FilterCard key={index} data={item.productFilter} /></td>
                            <td className='varients'><DesignCard varientId={-1} rowId={index} data={item.primaryVairent?.imageUrl[0] ? item.primaryVairent.imageUrl[0] : null} imageName={item.primaryVairent?.imageName ? item.primaryVairent.imageName : null} handleOpenDesignModal={handleOpenDesignModal} /></td>
                            {item.newVarients.map((column, ind) => (
                                <td className='varients' key={column.key}><DesignCard key={ind} varientId={ind} rowId={index} data={column.imageUrl[0]} imageName={column.imageName} handleOpenDesignModal={handleOpenDesignModal} /></td>
                            ))}
                            <td> <FontAwesomeIcon icon={faCirclePlus} className='cm-pointer' size="2xl" style={{ color: "#63E6BE", }} onClick={handleChangeColumns} /></td>
                        </tr>

                    ))}
                    <tr>
                        <td className='sticky'>
                            <FontAwesomeIcon className='ms-5 cm-pointer ' icon={faCirclePlus} size="2xl" style={{ color: "#63E6BE", }} onClick={handleChangerows} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleDeleteVarient(varientIndex)}><FontAwesomeIcon icon={faTrash} style={{ color: "#db0a34", }} /><span className='ms-3 text-blue-800 fw-medium'>Delete Varient</span></MenuItem>
            </Menu>
            <Modal open={modalStatus} data={designsData} handleopen={handleModalOpen} handleClose={handleModalClose} handleInsertDesign={handleInsertDesign} />
            <SnackBar />
        </div>
    );
}

export default App;
