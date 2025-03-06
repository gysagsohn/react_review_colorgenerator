import { Route, Routes } from "react-router-dom";
import GeneratorPage from "./pages/GeneratorPage";
import HomePage from "./pages/HomePage";
import Template from "./pages/_TemplatePage";


function App() {
  return (
    <Routes>
      {/* localhost:3000/ */}
      {/* localhost:3000 */}
      {/* www.somedomainname.com/ */}
      {/* www.somedomainname.com */}
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        {/* localhost:3000// */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="generator" element={<GeneratorPage />} />
        {/* <Route path="generator/saved" element={<SavedThemesPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
