import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTrash);

interface Employee {
	id: number;
	address: string;
}

function SuccessPage() {
	const [addresses, setAddresses] = useState<Employee[]>([]);

	useEffect(() => {
		// Effettua una chiamata API per ottenere gli indirizzi dei dipendenti
		axios
			.get<Employee[]>("http://localhost:3001/employee/addresses/")
			.then((response) => {
				setAddresses(response.data);
			})
			.catch((error) => {
				console.error("Errore nel recupero degli indirizzi:", error);
			});
	}, []);

	const handleDelete = (id: number) => {
		// Effettua una chiamata API per cancellare l'indirizzo con l'id specificato
		axios
			.delete(`http://localhost:3001/employee/address/${id}`)
			.then(() => {
				// Aggiorna l'elenco dopo la cancellazione
				const updatedAddresses = addresses.filter(
					(employee) => employee.id !== id
				);
				setAddresses(updatedAddresses);
			})
			.catch((error) => {
				console.error("Errore nella cancellazione:", error);
			});
	};

	return (
		<div className="container">
			<h2 className="text-center mb-4">Pagina di Successo</h2>
			<div className="row">
				<div className="col-md-12">
					<h3>Indirizzi dei Dipendenti</h3>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>Indirizzo</th>
								<th>Azioni</th>
							</tr>
						</thead>
						<tbody>
							{addresses.map((employee) => (
								<tr key={employee.id}>
									<td>{employee.id}</td>
									<td>{employee.address}</td>
									<td>
										<button
											onClick={() =>
												handleDelete(employee.id)
											}
										>
											<FontAwesomeIcon icon={faTrash} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default SuccessPage;
