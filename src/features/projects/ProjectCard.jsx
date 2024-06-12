/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "../../ui/Button"
import { useNavigate } from "react-router-dom";
const StyledProject = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 1.6rem;
  display: flex;
  flex-direction:column;
  column-gap: 1.6rem;
  row-gap: 0.4rem;
`;


const Title = styled.h4`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: bold;
  /* margin */
  /* color: var(--color-grey-500); */
`;

// const Value = styled.p`
//   font-size: 2.4rem;
//   line-height: 1;
//   font-weight: 500;
// `;

const Subpoints = styled.h4`
    flex-grow:1;
`

function ProjectCard({ title,description }) {
  const navigate = useNavigate();
  return (
    <StyledProject>
      <Title>{title}</Title>
        <Subpoints>
           {description}
        </Subpoints>
      
      
      <Button onClick={() => navigate(`/projects/${title}`)}>
            Details
      </Button>
    </StyledProject>
  );
}

export default ProjectCard;