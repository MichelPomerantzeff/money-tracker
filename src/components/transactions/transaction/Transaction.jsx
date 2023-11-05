import { transactions } from "../../../data/data"

export default function DayTransaction() {
    return (
        <>
            {
                transactions.years.map(transaction => {
                    return (
                        <>
                            <div className="transaction-box">
                                <div className="transaction-date">
                                    <div className="transaction-day">
                                        <span>{transaction.day}</span>
                                    </div>
                                    <div className="transaction-period">
                                        <span>{transaction.dayName}</span>
                                        <span>{transaction.monthName} {transaction.year}</span>
                                    </div>
                                </div>

                                <div className="day-total">
                                    <span>99.99</span>
                                </div>
                            </div>

                            <div className="source-box">
                                <div className="source-info">
                                    <div className="source-pic">
                                        <span></span>
                                    </div>
                                    <div className="transaction-period">
                                        <span>{transaction.type}</span>
                                        <span>{transaction.note}</span>
                                    </div>
                                </div>

                                <div className="source-amount">
                                    <span>{transaction.amount}</span>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}
