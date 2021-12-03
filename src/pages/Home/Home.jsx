import React from 'react'
import Chart from '../../components/Chart/Chart'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import './home.css'
import { UserData } from '../../data.js'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={UserData} title="User Analytics" dataKey="Active User" grid />
            <div className="home-widget">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
