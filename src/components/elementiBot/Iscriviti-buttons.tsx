import 'bootstrap/dist/css/bootstrap.css'

export function IscrivitiButtons() {
 
  return (
    <>
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
          <h2 className="card-title">Azienda</h2>
            <div className="card-body" id='imgCard1'>    
              <p className="card-text"></p>
              <a href="/root/iscriviti/azienda" className="btn btn-primary btn-lg">Azienda</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
          <h2 className="card-title">Dipendente</h2>
            <div className="card-body" id='imgCard2'>
              <p className="card-text"></p>
              <a id="btn" href="/root/iscriviti/dipendente" className="btn btn-primary btn-lg">Iscriviti</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


