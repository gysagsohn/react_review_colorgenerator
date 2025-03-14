import "../styles/Footer.css";
import { DarkModeToggleButton } from "./DarkModeToggleButton";


export default function Footer(){

    return (
        <footer>
            <h6>Copyright 2024 ColourAcademy / Gy Test</h6>
            <a href="mailto:test@email.com">Email us!</a>

            <DarkModeToggleButton />
        </footer>
    )
}