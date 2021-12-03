import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import './featuredInfo.css'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featured-title">
                    Revenue
                </span>
                <div className="featured-container">
                    <span className="featured-money">
                        $2.45
                    </span>
                    <span className="featured-money-rate">
                        -11.4
                        <ArrowDownward />
                    </span>
                </div>
                <span className="featured-sub">
                    Compare to last month
                </span>
            </div>
            <div className="featured-item">
                <span className="featured-title">
                    Cost
                </span>
                <div className="featured-container">
                    <span className="featured-money">
                        $10.45
                    </span>
                    <span className="featured-money-rate">
                        -20.4
                        <ArrowUpward className="positive" />
                    </span>
                </div>
                <span className="featured-sub">
                    Compare to last month
                </span>
            </div>
            <div className="featured-item">
                <span className="featured-title">
                    Sales
                </span>
                <div className="featured-container">
                    <span className="featured-money">
                        $150.45
                    </span>
                    <span className="featured-money-rate">
                        -55.4
                        <ArrowDownward />
                    </span>
                </div>
                <span className="featured-sub">
                    Compare to last month
                </span>
            </div>
        </div>
    )
}
