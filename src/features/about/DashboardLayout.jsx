import styled from "styled-components";
// import TopCard from "./TopCard";
import DashboardBox from "./DashboardBox";
import HeadShot from "../../../public/HeadShot.png"

const StyledDashboardLayout = styled.div`
display: grid;
grid-template-rows: 1fr 1fr;
gap: 2.4rem;
`;

// const TopCard = styled.div`
//   background-color: var(--color-grey-0);
//   border: 1px solid var(--color-grey-100);
//   border-radius: var(--border-radius-md);

//   padding: 3.2rem;

//   display: flex;
//   gap: 2.4rem;
//   justify-content: space-between;
// `

// const TopCardLeft= styled.div`
//     display: flex;
//     flex-direction:column
// `

// const TopCardRight= styled.div`
//     display: flex;
//     flex-direction:column
// `

const TopCardLeft = styled.div`
    /* background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md); */
  flex-grow:2;
  align-items:center;
  justify-content:center;
  margin:auto;
  padding-left:50px;
`

const TopCardRight = styled.div`
    /* background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md); */
  flex-grow:1;
  

`

const TopCard = styled.div`
    display:flex;
    gap: 0.4rem;
    justify-content: space-between;

`

function DashboardLayout() {
    return (
        <StyledDashboardLayout>
            
            <TopCard>
                <TopCardLeft>
                    <h1 style={{fontSize:"74px"}}>Hi Im Snehal</h1>
                    <h1 style={{fontSize:"74px"}}>A Software Developer</h1>
                </TopCardLeft>
                <TopCardRight><img src={HeadShot} height="300px"/></TopCardRight>
            </TopCard>
            <DashboardBox>
                <h4>In the heart of the forest, where shadows intertwine with the gentle glow of sunlight, a murmuring brook sings its timeless song, weaving tales of ancient trees and secret paths through the emerald undergrowth.</h4>

                <h4>In the heart of the forest, where shadows intertwine with the gentle glow of sunlight, a murmuring brook sings its timeless song, weaving tales of ancient trees and secret paths through the emerald undergrowth.</h4>


                <h4>In the heart of the forest, where shadows intertwine with the gentle glow of sunlight, a murmuring brook sings its timeless song, weaving tales of ancient trees and secret paths through the emerald undergrowth.</h4>


                <h4>In the heart of the forest, where shadows intertwine with the gentle glow of sunlight, a murmuring brook sings its timeless song, weaving tales of ancient trees and secret paths through the emerald undergrowth.</h4>
            </DashboardBox>
            {/* <BottomCard/> */}
            
        </StyledDashboardLayout>
    )
}

export default DashboardLayout


/* <TopCard>
                <TopCardLeft>
                    <h1>Hi Im Snehal</h1>
                    <h1>A Software Developer</h1>
                </TopCardLeft>
                <TopCardRight>
                    <img src={HeadShot} height="200px"/>
                </TopCardRight>
                
            </TopCard> */
