import React, { useContext } from 'react';

import { Link, Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Header from '../Share/Header/Header/Header';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
        <Header></Header>
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
                
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80  text-base-content">
                
                <li><Link to='/dashboard'>My Appointments</Link></li>
                
                    {
                    //   isAdmin &&  
                       <>
                            <li><Link to='/dashboard/allusers'>My orders</Link></li>
                            <li><Link to='/dashboard/adddoctor'>Add A product</Link></li>
                            <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                        </>
                    }
                
                </ul>
            
            </div>
        </div>
        
    </div>
    );
};

export default DashboardLayout;