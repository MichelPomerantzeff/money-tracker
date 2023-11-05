import "./Transactions.css";
import Transaction from "./transaction/Transaction";

export default function Transactions() {
  return (
    <div className="balance-container">
      <div className="transactions-container">

        <div className="timeline">
          <div className="previous month">Previous</div>
          <div className="current month">Current</div>
          <div className="next month">Next</div>
        </div>

        <div className="balance">
          <div className="inflow">
            <span>Inflow</span>
            <span>+ €557.00</span>
          </div>
          <div className="outflow">
            <span>Outflow</span>
            <span>- €57.72</span>
          </div>
          <div className="hr-wrapper">
            <div className="hr"></div>
          </div>
          <div className="total-balance">
            <span>+ €500.24</span>
          </div>
        </div>

        <div className="transactions-wrapper">

          <Transaction />

        </div>

      </div>

    </div>
  )
}
