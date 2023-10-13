import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

function EmployeeForm() {
	const [employeeData, setEmployeeData] = useState({ address: "" });
	const [errorMessage, setErrorMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await axios.post("http://localhost:3001/employee/", employeeData);
			setIsSuccess(true);

			// Attendere 2 secondi prima di eseguire il reindirizzamento
			setTimeout(() => {
				window.location.href = "/root/iscriviti/azienda/success"; // Esegui il reindirizzamento
			}, 2000);
		} catch (error) {
			setErrorMessage("Errore nella richiesta. Si prega di riprovare.");
			setIsSuccess(false);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-md-6">
					<h2 className="text-center mb-4">
						Inserisci indirizzo del tuo dipendente
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="input-group mb-3">
							<input
								type="text"
								name="address"
								value={employeeData.address}
								onChange={handleChange}
								className="form-control"
								placeholder="Indirizzo"
							/>
							<div className="input-group-append">
								<button
									type="submit"
									className="btn btn-primary"
									disabled={
										!employeeData.address || isSubmitting
									}
								>
									{isSubmitting ? "Attendere..." : "Invia"}
								</button>
							</div>
						</div>
					</form>
					{isSubmitting && (
						<div className="text-center">
							<div className="spinner-border" role="status">
								<span className="sr-only">Caricamento...</span>
							</div>
						</div>
					)}
					{isSuccess && (
						<div className="alert alert-success mt-2">
							Inserimento riuscito!
						</div>
					)}
					{errorMessage && (
						<div className="alert alert-danger mt-2">
							{errorMessage}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default EmployeeForm;
