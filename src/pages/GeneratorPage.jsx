import { Sketch } from "@uiw/react-color";
import { useEffect, useState } from "react";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { ColourBlock } from "../components/ColourBlock";
import { CssCodeExport } from "../components/CssCodeExport";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";
import { useCurrentThemeData } from "../contexts/currentThemeContext";

export default function GeneratorPage(){

	const [modal, setModal] = useState(false);

	// Base colour from global state 
	let baseColourGlobal = useBaseColourGlobalData();
	// let baseColourGlobalRaw = useContext(BaseColourGlobalDataContext);
	let setBaseColourGlobal = useBaseColourGlobalDispatch();

	let currentTheme = useCurrentThemeData();

	// Base colour from form 
	let [formBaseColour, setFormBaseColour] = useState("#000000");

	// On component mount, set local form value to global state value 
	useEffect(() => {
		setFormBaseColour(baseColourGlobal);
	}, [baseColourGlobal]);

	useEffect(() => {
		setBaseColourGlobal(formBaseColour);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formBaseColour]);

	console.log("Current Theme:", currentTheme);

	return(
		<div>
			<PureModal
				header={currentTheme.displayName}
				footer={
					<div>
					<h6>Thankyou for generating some colours!</h6>
					</div>
				}
				isOpen={modal}
				closeButton="close"
				closeButtonPosition="bottom"
				onClose={() => {
					setModal(false);
					return true;
				}}
				>
				<CssCodeExport />
			</PureModal>
			<button onClick={() => setModal(!modal)}>
				Export CSS variables
			</button>

			{/* Base colour input form */}
			<h1>{formBaseColour}</h1>
			{/* <input type="color" name="" id="" /> */}
			<Sketch color={formBaseColour} onChange={(colour) => setFormBaseColour(colour.hex)} />

			{/* CSS theme display component  */}
			{currentTheme.colours?.map((colourEntry, index) => {
				return <ColourBlock key={currentTheme.name + index} colourEntry={colourEntry} />
			})}
		</div>
	)

}