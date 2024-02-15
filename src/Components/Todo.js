import React, { useEffect, useState } from 'react'

export default function Todo() {

    const getlocalStorage = () => {
        const lists = localStorage.getItem('Todo_list')

        if (lists) {
            return JSON.parse(lists)
        }
        else {
            return [];
        }
    }
    // Clear local storage
    // localStorage.clear();


    const [inputData, setInputData] = useState("")
    // const [items, setItems] = useState([])
    const [items, setItems] = useState(getlocalStorage())
    const [storage, setStorage] = useState()
    const [editedItem, setEditedItem] = useState("")
    const [toggle, setToggle] = useState(false)

    // Adding New Item....
    const addItems = () => {

        if (!inputData) {
            alert("Add items")
        }

        else if (inputData && toggle) {

            console.log("Enterd in else if");

            setItems(
                items.map((currentElem) => {
                    console.log(currentElem.id);

                    console.log("Enterd in else if set items");

                    if (currentElem.id === editedItem) {
                        console.log("Enterd if condition");
                        return { ...currentElem, name: inputData }
                    }
                    else {
                        console.log("Enterd in else condition");
                        return currentElem
                    }
                })
            )
            setInputData("")
            setToggle(false)
        }
        else {

            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }

            console.log("User input data  = " + inputData + "\n");
            console.log("User input data  = " + myNewInputData.name + "\nId : " + myNewInputData.id);

            setItems([...items, myNewInputData])
            setInputData("")
        }
    }

    // Removing item...
    const removeItems = (index) => {
        const updatedItems = items.filter((currentElem) => {
            return currentElem.id !== index;
        })
        setItems(updatedItems)
    }

    // Removing all the items
    const removeAll = () => {
        setItems([])
    }

    // edit items

    const editItems = (index) => {
        const edited_updated_item = items.find((currentElem) => {
            return currentElem.id === index;
        })

        setInputData(edited_updated_item.name)
        console.log(index);

        setEditedItem(index)

        setToggle(true)
    }

    // Local storge 

    useEffect(() => {
        localStorage.setItem("Todo_list", JSON.stringify(items))
    }, [items])



    return (
        <div>

            <div className="main">

                <div className="container">

                    <div className="sub-container">


                        <div className="heading">

                            <h1>Add your list here </h1>

                        </div>

                        <div className="input-text">

                            <input type="text" name="" id="" placeholder='✍ Add Your note here' value={inputData} onChange={(event) => { setInputData(event.target.value) }} />
                            {
                                toggle ? <i className="far fa-edit" onClick={addItems}></i> : <i className="fas fa-plus" onClick={addItems}></i>
                            }

                        </div>

                        <div className="items-list">

                            {

                                items.map((currentElem) => {
                                    return (
                                        < div className="items" key={currentElem.id} >
                                            {/* currentElem me value kaise ghus gye */}

                                            <div className="content-item">
                                                <h1>{currentElem.name}</h1>
                                            </div>

                                            <div className="icons">

                                                <div className="edit-icon">
                                                    <i className="far fa-edit" onClick={() => { editItems(currentElem.id) }}></i>
                                                </div>

                                                <div className="delete-icon">
                                                    <i className="far fa-trash-alt" onClick={() => { removeItems(currentElem.id) }}></i>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                })
                            }


                        </div>

                        <div className="remove-all-btn">

                            <button onClick={removeAll}>Remove all</button>

                        </div>
                    </div>

                </div>


            </div>

        </div >
    )
}
