import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import styled from "styled-components";

const DarkModeSpan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 7px;
`;


function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeSpan onClick={toggleDarkMode}>
      {isDarkMode ? <><HiOutlineSun />  Light Mode</> : <><HiOutlineMoon />  Dark Mode</>} 
    </DarkModeSpan>
  );
}

export default DarkModeToggle;