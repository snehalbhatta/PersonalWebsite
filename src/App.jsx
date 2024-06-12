import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import GlobalStyles from "../src/styles/GlobalStyles";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";

import "./index.css";
import Project from "./pages/Project";


function App() {
  
  return (
    <>
    
      <DarkModeProvider>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout/>}>
              <Route index element={<Navigate replace to="about" />} />
              <Route path="about" element={<About/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/:projectID" element={<Project/>}/>
              <Route path="experience" element={<Experience/>}/>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
     </DarkModeProvider>
      
    </>
    
  )
}

export default App
