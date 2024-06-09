import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import styled from "styled-components";
import { loadSlim } from "@tsparticles/slim"; 
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  z-index:3;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index:2;
`;

function AppLayout() {
  const [ init, setInit ] = useState(false);

    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    <>
      <StyledAppLayout>
        
        <Header id="header"/>
        
        <Main>
        { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: "var(--color-grey-50)",
              },
              particles: {
                color: {
                  value: "#fff",
                },
                move: {
                  direction: "bottom",
                  enable: true,
                  outModes: "out",
                  speed: 2,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 400,
                },
                opacity: {
                  value: 0.7,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: 10,
                },
                wobble: {
                  enable: true,
                  distance: 10,
                  speed: 10,
                },
                zIndex: {
                  value: { min: 0, max: 100 },
                },
              },
            }}
        />
        }
          <Container>
            <Outlet />
          </Container>
        </Main>
      </StyledAppLayout>
    </>
    
  );
}

export default AppLayout;