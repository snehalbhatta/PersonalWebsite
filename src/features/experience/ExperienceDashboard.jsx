import styled from "styled-components";
import Thomson from "../../../public/thomson.png"
import Dayforce from "../../../public/dayforce.png"
import Canon from "../../../public/canon.png"
const TopCard = styled.div`
background-color: var(--color-grey-0);
border: 1px solid var(--color-grey-100);
border-radius: var(--border-radius-md); 
margin:0;
width:90%;
display:flex;
/* flex-direction: column; */
/* height:50px; */

`
const Wrapper =  styled.div`
    margin:0;
    /* width:90%; */
    /* height:90%; */
    display:flex;
    flex-direction:column;
    row-gap:30px;
    justify-content:center;
    padding-left:auto;

    
`
const ImageLeft = styled.img`
    max-width: 400px;
    float:left;
    /* align-self: center; */
    border-radius: 7px;
    border: 3px solid var(--color-grey-50);
    margin-right: 30px;
    flex-grow:1;
    /* margin-bottom:25px; */
`

const ImageRight = styled.img`
    max-width: 400px;
    float:right;
    border-radius: 7px;
    border: 3px solid var(--color-grey-50);
    margin-left: 30px;
    flex-grow:1;
`

const Responsibilities= styled.div`
margin-top:40px;
margin-bottom:40px;
margin-left:30px;
size:600px;
font-family: "Poppins", sans-serif;
overflow-wrap: break-word;
  hyphens: auto;
  font-weight: bold;
  display:flex;
  flex-direction: column;
  row-gap: 30px;
  
`

function ExperienceDashboard() {
    return (
        <Wrapper>
            <TopCard>
                <ImageLeft src={Dayforce}/>
                <Responsibilities>
                    <ol>
                        <li>
                            Managed, maintained, and developed features on 13 microservices that form a product platform as a part of the ONESOURCE Core Platform team.
                        </li>
                        <li>
                            Developed APIs and introduced JWT token authentication as a part of the OSP-CIAM team.
                        </li>
                        <li>
                            Increased Unit Test coverage of the code base.
                        </li>
                        <li>
                            Communicated and collaborated with product management team to deliver on
                            requirements.
                        </li>
                        <li>
                            Collaborated with the release management team for monthly release activities.
                        </li>
                        <li>
                            Actively participated in the SCRUM development cycle and performed code
                            reviews.
                        </li>
                        <li>
                            Technology: C#, .NET Framework, MSSQL, Git, Postman, Moq, NuGet
                        </li>
                    </ol>    
                </Responsibilities>
            </TopCard>
            <TopCard>
                <Responsibilities>
                    <ol>
                        <li>
                            Managed, maintained, and developed features on 13 microservices that form a product platform as a part of the ONESOURCE Core Platform team.
                        </li>

                        <li>
                            Developed APIs and introduced JWT token authentication as a part of the OSP-CIAM team.
                        </li>
                        <li>
                            Increased Unit Test coverage of the code base.
                        </li>
                        <li>
                            Communicated and collaborated with product management team to deliver on
                            requirements.
                        </li>
                        <li>
                            Collaborated with the release management team for monthly release activities.
                        </li>
                        <li>
                            Actively participated in the SCRUM development cycle and performed code
                            reviews.
                        </li>
                        <li>
                            Technology: C#, .NET Framework, MSSQL, Git, Postman, Moq, NuGet
                        </li>
                    </ol>
                </Responsibilities>
                <ImageRight src={Thomson} />
            </TopCard>
            <TopCard>
                <ImageLeft src={Canon}/>
                <Responsibilities>
                    <ol>
                        <li>
                            Created an administrative web-based application using HTML, CSS and JavaScript in the front end that allowed the HR department to keep track of the employee information.
                        </li>

                        <li>
                            Used node.js and Express.js for the backend framework alongside MongoDB as the database to store all the employee information.
                        </li>
                        <li>
                            Added user authentication to makes sure only employees belonging to the HR department to access and edit the information.
                        </li>
                        <li>
                            Technology: HTML/CSS, JavaScript, Node.js, MongoDB
                        </li>
                    </ol>
                </Responsibilities>
            </TopCard>
        </Wrapper>
        
    )
}

export default ExperienceDashboard
