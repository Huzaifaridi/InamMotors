import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../Context/MenuContext';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [, setIsAdminLogin] = useContext(Context);
    const login = () => {
        axios
        .get(`/api/Login/GetData?userName=${userName}&password=${password}`)
        .then((response) => {
            if(response.data === "success"){
                setIsAdminLogin(true);
            }
            else if (response.data === "failure"){
                setIsAdminLogin(false);
            }
            setLoginStatus(response.data)
        })
        .catch((e) => {
        if (e.name !== 'AbortError') {
            console.log('fail:', e.message)
        }
        });
    } 

    return (
        <>
        <div className="fullwidth-block form-group">
        <div className="container">
            <h2 className="section-title">User Login</h2>
            <div className="row p-10px">
                <div className="col-md-4"></div>
                <div className="col-md-2">Enter Username</div>
                <div className="col-md-4">
                 <input className="form-control" type="text" placeholder="Enter Username" onBlur={e => setUserName(e.target.value)} />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row p-10px">
                <div className="col-md-4"></div>
                <div className="col-md-2">Enter Password</div>
                <div className="col-md-4">
                 <input className="form-control" placeholder="Enter Password" type="password" onBlur={e => setPassword(e.target.value)} />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row p-10px">
                <div className="col-md-6"></div>
                <div className="col-md-2">
                    <button type="button" className="form-control" onClick={login}>Login</button>
                </div>
                {loginStatus === 'failure' &&
                    <div className="col-md-4 warning" ><span>Invalid Credential</span></div>
                }
            </div>
        </div> 
    </div> 
    {/* {
        preview && <Invoice />
    } */}
    </>
    );
}

export default Login;
