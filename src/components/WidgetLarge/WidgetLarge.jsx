import React from 'react'
import "./widgetlarge.css"
export default function WidgetLarge() {


    const Button = ({ type }) => {
        return <button className={"widget-large-btn " + type}>
            {type}
        </button>
    }

    return (
        <div className="widget-large">
            <h3 className="widget-large-title">
                Latest transaction
            </h3>

            <table className="widget-large-table">
                <thead>
                    <tr className="widget-large-tr">
                        <th className="widget-large-th">Customer</th>
                        <th className="widget-large-th">Date</th>
                        <th className="widget-large-th">Amount</th>
                        <th className="widget-large-th">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="widget-large-tr">
                        <td className="widget-large-user">
                            <img src="https://raw.githubusercontent.com/MohcineDev/cooperative/master/public/imgs/profile/1.webp" alt="" className="avatar" />
                            <span className="widget-large-name">
                                Susan Carol
                            </span>
                        </td>
                        <td className="widget-large-date">
                            1 Apr 2020
                        </td>
                        <td className="widget-large-amount">
                            $250.00
                        </td>
                        <td className="widget-large-status">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widget-large-tr">
                        <td className="widget-large-user">
                            <img src="https://raw.githubusercontent.com/MohcineDev/cooperative/master/public/imgs/profile/1.webp" alt="" className="avatar" />
                            <span className="widget-large-name">
                                Susan Carol
                            </span>
                        </td>
                        <td className="widget-large-date">
                            1 Apr 2020
                        </td>
                        <td className="widget-large-amount">
                            $250.00
                        </td>
                        <td className="widget-large-status">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widget-large-tr">
                        <td className="widget-large-user">
                            <img src="https://raw.githubusercontent.com/MohcineDev/cooperative/master/public/imgs/profile/1.webp" alt="" className="avatar" />
                            <span className="widget-large-name">
                                Susan Carol
                            </span>
                        </td>
                        <td className="widget-large-date">
                            1 Apr 2020
                        </td>
                        <td className="widget-large-amount">
                            $250.00
                        </td>
                        <td className="widget-large-status">
                            <Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widget-large-tr">
                        <td className="widget-large-user">
                            <img src="https://raw.githubusercontent.com/MohcineDev/cooperative/master/public/imgs/profile/1.webp" alt="" className="avatar" />
                            <span className="widget-large-name">
                                Susan Carol
                            </span>
                        </td>
                        <td className="widget-large-date">
                            1 Apr 2020
                        </td>
                        <td className="widget-large-amount">
                            $250.00
                        </td>
                        <td className="widget-large-status">
                            <Button type="Declined" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
