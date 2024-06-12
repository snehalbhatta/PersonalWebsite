import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2.4rem;
`;


//need to create a table of cards with project 
function ProjectTable() {
    return (
        <StyledDashboardLayout>
            <ProjectCard
                title="Wild Oasis"
                description="Hotel management app for employees with authentication, cabin and booking management, and a dynamic dashboard. Users can log in, update profiles, manage cabins and bookings, check-in/out guests, and view key statistics. Features real-time status updates, dark mode, and customizable settings."
            />
            <ProjectCard
                title="Google Maps Clone"
                description="Discover a C++ GIS software with a sleek GUI, real-time road restrictions, weather updates, and a modified Dijkstra's algorithm for fast, accurate route planning. Enjoy minimalistic design, intuitive icons, a pop-up sidebar menu, and day/night mode."
            />
            <ProjectCard
                title="Yelp Camp"
                description="Discover a streamlined campground platform: sleek, user-friendly, and secure. Crafted with HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, and MongoDB. Explore, share, and connect with nature enthusiasts worldwide."
            />
            <ProjectCard
                title="Patatap Clone"
                description="Interactive Patatap clone using HTML, CSS, and JavaScript. Create unique melodies and animations with your keyboard, featuring Animate.css, Paper.js, and Howler.js for seamless animations and sounds."
            />
            <ProjectCard
                title="Shakespheare generator"
                description="Utilizing NLP techniques, this model is designed to generate Shakespearean text when provided with a specific starting word. Experience the charm of Shakespeare's language in automated text generation."
            />
            
        </StyledDashboardLayout>
        
    )
}

export default ProjectTable
