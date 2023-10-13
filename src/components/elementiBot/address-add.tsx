'use client'
import 'bootstrap/dist/css/bootstrap.css'

export function AddressAddAzienda() {
 
  return (
    <>
    <div>
    <h1>Whitelist</h1>
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">Insere address pubblico proprio dipendete per ricevere NFT</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</>

  )
}

