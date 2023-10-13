"use client";
import NavHome from "../../../../components/navHome";
import "../../../../assets/style/address.css";
import "../../../../assets/style/navbar.css";
import FormComponent from "../../../../components/db/FormAzienda";

export function IscrivitiAzienda() {
	return (
		<>
			<NavHome />

			<FormComponent />
		</>
	);
}

export default IscrivitiAzienda;
