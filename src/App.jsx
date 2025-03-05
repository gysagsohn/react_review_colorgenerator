import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePages";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <Routes>
      {/* localhost:3000/ */}
      {/* localhost:3000 */}
      {/* www.somedomainname.com/ */}
      {/* www.somedomainname.com */}
      <Route path="/" element={<Template />} >
        {/* <Route index element={<HomePage />} /> */}
        <Route path="generator" element ={<GeneratorPage />} />
        {/* <Route path="generator/saved" element={SavedThemesPage />} />   */}
      </Route>
    </Routes>
  );
}

export default App;
