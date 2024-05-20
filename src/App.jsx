import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import GlobalStyles from "../src/styles/GlobalStyles";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="about" />} />
          <Route path="about" element={<About/>}/>
          <Route path="projects" element={<Projects/>}/>
          <Route path="projects/:projectID" element={<Projects/>}/>
          <Route path="experience" element={<Experience/>}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
