import React, { useState } from 'react';

function AddUser() {
    const [items, setItems] = useState(1);
    return (
        <>
        <div className="fullwidth-block form-group">
        <div className="container">
            <h2 className="section-title">Add New User</h2>
            <div className="row p-10px">
                <div className="col-md-4"></div>
                <div className="col-md-2">Enter Full Name</div>
                <div className="col-md-4">
                 <input className="form-control" type="text" placeholder="Enter Full Name" />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4"></div>
                <div className="col-md-2">Enter Contact No.</div>
                <div className="col-md-4">
                 <input className="form-control" type="text" placeholder="Enter Contact No." />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4"></div>
                <div className="col-md-2">Enter Username</div>
                <div className="col-md-4">
                 <input className="form-control" type="text" placeholder="Enter Username" />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4"></div>
                <div className="col-md-2">Enter Password</div>
                <div className="col-md-4">
                 <input className="form-control" placeholder="Enter Password" type="password" />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row p-10px">
                <div className="col-md-6"></div>
                <div className="col-md-2">
                    <button type="button" className="form-control" >Login</button>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div> 
    </div> 
    </>
    );
}

export default AddUser;
