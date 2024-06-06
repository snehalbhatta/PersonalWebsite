import styled from "styled-components";
// import TopCard from "./TopCard";
// import DashboardBox from "./DashboardBox";
import HeadShot from "../../../public/HeadShot.png"

const StyledDashboardLayout = styled.div`
display:flex;
justify-content:center;
align-items:top;
@media screen and (max-width: 832px) {
    width:459px;
};
`;


const TopCard = styled.div`
background-color: var(--color-grey-0);
border: 1px solid var(--color-grey-100);
border-radius: var(--border-radius-md); 

`

const Wrapper =  styled.div`
    margin:0;
    width:90%;
    
`
const Image = styled.img`
    max-width: 400px;
    float:left;
    border-radius: 7px;
    border: 3px solid var(--color-grey-50);
    margin-right: 30px;
    flex-grow:1;
`
 const H4= styled.h4`
    margin-bottom:40px;
 ` 

function DashboardLayout() {
    return (
       
        <StyledDashboardLayout>
            <Wrapper>
                <Image src={HeadShot} height="400px"/>
                <TopCard>
                    <h1 style={{fontSize:"60px"}}>Hi I&#39;m Snehal</h1>
                    <h1 style={{fontSize:"60px"}}>A Software Developer</h1>                   
                    <H4>
                        I&#39;ve got a solid foundation in C#, the .NET framework, 
                        and I&#39;m well-versed in full-stack technologies like HTML, 
                        CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                        development with C# or crafting user experiences with React, I&#39;m all about 
                        finding practical solutions to real-world problems. 
                    </H4>
                    <H4>
                        Graduating from the University of Toronto with a degree in Computer Engineering and a minor in AI, I&#39;m 
                        deeply committed to continuous growth. Values of excellence, integrity, and collaboration underpin my work, 
                        as I strive to innovate and deliver solutions that consistently exceed expectations.
                    </H4>
                    <H4>
                        I thrive in collaborative environments where teamwork fosters creativity and drives progress. 
                        If you&#39;re searching for a passionate software engineer poised to contribute and propel your team towards success, 
                        I&#39;m eager to connect. Explore my portfolio and let&#39;s explore how I can help drive your objectives forward.
                    </H4>
                </TopCard>
           </Wrapper>
            
        </StyledDashboardLayout>    
           
            
        
    )
}

export default DashboardLayout

