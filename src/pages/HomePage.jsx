import { Link } from "react-router-dom";


export default function HomePage(){

    return <>
        <h1>ReactJS CSS Theme Generator</h1>
        <p>Generate a bunch of colour themes or platters, export them as CSS code, and speed up your front-end dev work</p>

        <Link to={"/generator"}>Make some palettes</Link>

    </>
}
