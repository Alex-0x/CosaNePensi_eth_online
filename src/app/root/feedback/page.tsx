import { Connect } from "../../../components/Connect"
import { Connected } from "../../../components/Connected"
import { MintNFT } from "../../../components/MintNFT"
import { NetworkSwitcher } from "../../../components/NetworkSwitcher"
import { Account } from "../../../components/Account"
import NavHome from "../../../components/navHome"
import "../../../assets/style/navbar.css"


export function Feedback() {
  return (
    <>
    <NavHome/>
      <h1>Migliora la tua azienda e Guadagna</h1>

      <Connect />

      <Connected>
        <Account />
        <hr />
        <MintNFT />
        <hr />
        <NetworkSwitcher />
      </Connected>
    </>
  )
}

export default Feedback
