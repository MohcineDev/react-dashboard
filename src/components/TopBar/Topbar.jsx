import React from 'react'
import './topbar.css'
import { NotificationsNone, LanguageOutlined, SettingsOutlined } from '@mui/icons-material';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-wrapper">

                <div className="top-left">

                    <span className="logo">
                        admin
                    </span>
                </div>
                <div className="top-right">
                    <div className="topbar-iconContainer">
                        <NotificationsNone />
                        <span className="Top-icon-badge">
                            2
                        </span>
                    </div>

                    <div className="topbar-iconContainer">
                        <LanguageOutlined />
                        <span className="Top-icon-badge">
                            2
                        </span>
                    </div>
                    <div className="topbar-iconContainer">
                        <SettingsOutlined />
                    </div>
                    <img src="https://raw.githubusercontent.com/MohcineDev/cooperative/master/public/imgs/profile/1.webp" alt="" className="avatar" />
                </div>
            </div>
        </div>
    )
}
