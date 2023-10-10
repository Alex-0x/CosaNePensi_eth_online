import 'bootstrap/dist/css/bootstrap.css'

export function IscrivitiButtons() {
 
  return (
    <>
    <div className="container text-center">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body" id='imgCard1'>
              <h2 className="card-title">Iscriviti come Azienda</h2>
              <p className="card-text">Descrizione breve iscrizione come azienda.</p>
              <a href="/iscrizione-azienda" className="btn btn-primary btn-lg">Iscriviti</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body" id='imgCard2'>
              <h2 className="card-title">Iscriviti come Dipendente</h2>
              <p className="card-text">Descrizione breve iscrizione come dipendente.</p>
              <a href="/iscrizione-dipendente" className="btn btn-primary btn-lg">Iscriviti</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}


