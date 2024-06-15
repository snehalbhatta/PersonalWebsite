import styled from "styled-components";

// import Canon from "../../../public/canon.png"
import Button from "../../ui/Button";




const StyledBookingDataBox = styled.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`;

const Header = styled.div`
  /* background-color: var(--color-brand-500); */
  /* padding: 2rem 4rem; */
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  column-gap:70px;
  padding-bottom:40px;
  padding-top:20px;
  `;

const FooterImages = styled.div`
    padding-bottom:20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap:wrap;
    row-gap:20px;
`

const H4= styled.h4`
    margin-bottom:20px;
 ` 

/* eslint-disable react/prop-types */
function ProjectDetailCard({tech,description,images,title}) {
    return (
        
        <StyledBookingDataBox>

            <h1 style={{fontSize:"80px"}}>{title}</h1>
            <Header>
            {tech.map(t=>(
                <Button key={t.id} size="large">{t.tech}</Button>
            ))}

            </Header>
            
            
            {
                description.map(d=>(
                    <H4 key={d.id}> 
                    {d.point}
                    </H4>
                ))
            }

            
            <FooterImages>
               {
                images.map(i=>(
                    <img src={i.img} key={i.id}/>
                ))
               }
            </FooterImages>


        </StyledBookingDataBox>
    )
    

 
}

export default ProjectDetailCard






{/* <ol>
                {
                    tech.map(t=>
                        (
                            <li key={t.index}>
                                {t.tech}
                            </li>
                        )
                    )
                }
            </ol>
            <ol>
                {
                    description.map(t=>
                        (
                            <li key={t.index}>
                                {t.point}
                            </li>
                        )
                    )
                }
            </ol>
            <ol>
                {
                    images.map(t=>
                        (
                            <li key={t.index}>
                                {t.img}
                            </li>
                        )
                    )
                }
            </ol> */}