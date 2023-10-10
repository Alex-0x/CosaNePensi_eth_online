import 'bootstrap/dist/css/bootstrap.css'
import "../assets/style/address.css"
import { Connect } from './Connect'
import { Account } from './Account'
import { Connected } from './Connected'



export default function NavHome(){
    return (
       
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
     Cosa Ne pEnsi ?
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/root/iscriviti">Iscriviti</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/root/feedback">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
  <Connected>
        <Account/>
  </Connected>
        
  
    

</nav>
    )
}