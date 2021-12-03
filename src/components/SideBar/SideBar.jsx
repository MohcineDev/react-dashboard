import React from 'react'
import './sidebar.css'
import { BlurLinearOutlined, BubbleChartOutlined, MonetizationOnOutlined } from '@mui/icons-material';
export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        Dashboard
                    </h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                        <li className="sidebar-list-item active">
                            <BubbleChartOutlined /> Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <MonetizationOnOutlined /> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        Quick Menu
                    </h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                        <li className="sidebar-list-item">
                            <BubbleChartOutlined /> Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <MonetizationOnOutlined /> Sales
                        </li>

                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        Staff
                    </h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                        <li className="sidebar-list-item">
                            <BubbleChartOutlined /> Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <MonetizationOnOutlined /> Sales
                        </li>

                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        Notifications
                    </h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                        <li className="sidebar-list-item">
                            <BubbleChartOutlined /> Analytics
                        </li>
                        <li className="sidebar-list-item">
                            <MonetizationOnOutlined /> Sales
                        </li>

                        <li className="sidebar-list-item">
                            <BlurLinearOutlined /> Home
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
