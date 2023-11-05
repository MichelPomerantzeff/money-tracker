import './Main.css'
import Topbar from '../topbar/Topbar'
import Transactions from '../transactions/Transactions'

export default function Main() {
  return (
    <div className='main-container'>
        <Topbar/>
        <Transactions/>
    </div>
  )
}
