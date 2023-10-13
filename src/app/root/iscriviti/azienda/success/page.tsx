"use client";
import SuccessPage from "../../../../../components/db/SuccessPage";
import NavHome from "../../../../../components/navHome";
import "../../../../../assets/style/navbar.css";
import SismoConnection from "../../../../../components/sismo/ConnectSismo";

export function IscrivitiAzienda() {
	return (
		<>
			<NavHome />

			<SuccessPage />

			<SismoConnection />
		</>
	);
}

export default IscrivitiAzienda;
