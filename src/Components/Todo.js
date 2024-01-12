import React from 'react'

export default function Todo() {
    return (
        <div>

            <div className="main">

                <div className="container">

                    <div className="sub-container">


                        <div className="heading">

                            <h1>Add your list here </h1>

                        </div>

                        <div className="input-text">

                            <input type="text" name="" id="" placeholder='✍ Add Your note here' />
                            <i className="fas fa-plus"></i>
                        </div>

                        <div className="items-list">


                            <div className="items">

                                <div className="content-item">
                                    <h1>Amazon</h1>
                                </div>

                                <div className="icons">

                                    <div className="edit-icon">
                                        <i className="far fa-edit"></i>
                                    </div>

                                    <div className="delete-icon">
                                        <i className="far fa-trash-alt"></i>
                                    </div>

                                </div>

                            </div>

                            <div className="items">

                                <div className="content-item">
                                    <h1>Google</h1>
                                </div>

                                <div className="icons">

                                    <div className="edit-icon">
                                        <i className="far fa-edit"></i>
                                    </div>

                                    <div className="delete-icon">
                                        <i className="far fa-trash-alt"></i>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="remove-all-btn">

                            <button>Remove all</button>

                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
