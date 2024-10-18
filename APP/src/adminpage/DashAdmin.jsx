import React from 'react';
import ADMnav from './component/ADMnav';

function DashAdmin(props) {
    return (
        <div>
            <ADMnav />
            <div className="container dash-section">
                <div className="row"><h2>Manage Website</h2></div>
                <div className="row dash_rows">
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Orders</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Customers</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Ads</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                </div>
                <div className="row dash_rows">
                    <div className="dash-Cards ">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                </div>
                <div className="row dash_rows">
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                    <div className="dash-Cards">
                        <h4>Manage Products</h4>
                        <button className='buttonStyle' >Click Here</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashAdmin;