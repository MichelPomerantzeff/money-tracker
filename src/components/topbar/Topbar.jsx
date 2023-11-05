import './Topbar.css';

export default function Topbar() {
  return (
    <div className='topbar-container'>
      <div className='wallet-wrapper'>
        <div className="source-pic"></div>
        <div className='wallet'>
          <span>Wallet</span>
          <span>€0</span>
        </div>
      </div>
      <h1 className='title'>Money Tracker</h1>
      <div className="add-button">
        <button>Add</button>
      </div>
    </div>
  )
}
