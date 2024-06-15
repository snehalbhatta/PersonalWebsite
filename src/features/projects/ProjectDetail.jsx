import { useParams } from "react-router-dom"
import ProjectDetailCard from "./ProjectDetailCard";
import Canon from "../../../public/canon.png"

/* eslint-disable react/prop-types */
function ProjectDetail() {
    const {projectName} = useParams();
    return (
        <div>
            {/* <h1 style={{fontSize:"60px"}}>{projectName}</h1> */}
            {
                projectName === "YelpCamp" &&
                <ProjectDetailCard 

                    title={projectName}
                    tech=
                    {
                        [
                            { id: 1, tech: 'HTML' }, 
                            { id: 2, tech: 'CSS' }, 
                            { id: 3, tech: 'React' },
                            { id: 4, tech: 'Javascript' },
                        ]
                    } 
                    description=
                    {
                        [
                            { 
                                id: 1, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },
                            { 
                                id: 2, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },{ 
                                id: 3, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },

                        ]
                    } 
                    images=
                    {
                        [
                            { id: 1, img: Canon }, 
                            { id: 2, img: Canon }, 
                            { id: 3, img: Canon }
                        ]
                    } 
                />
            }
            {
                projectName === "WildOasis" &&
                <ProjectDetailCard 

                    title={projectName}
                    tech=
                    {
                        [
                            { id: 1, tech: 'HTML' }, 
                            { id: 2, tech: 'CSS' }, 
                            { id: 3, tech: 'React' },
                            { id: 4, tech: 'Javascript' },
                        ]
                    } 
                    description=
                    {
                        [
                            { 
                                id: 1, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },
                            { 
                                id: 2, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },{ 
                                id: 3, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },

                        ]
                    } 
                    images=
                    {
                        [
                            { id: 1, img: Canon }, 
                            { id: 2, img: Canon }, 
                            { id: 3, img: Canon }
                        ]
                    } 
                />
            }
            {
                projectName === "GoogleMapsClone" &&
                <ProjectDetailCard 

                    title={projectName}
                    tech=
                    {
                        [
                            { id: 1, tech: 'HTML' }, 
                            { id: 2, tech: 'CSS' }, 
                            { id: 3, tech: 'React' },
                            { id: 4, tech: 'Javascript' },
                        ]
                    } 
                    description=
                    {
                        [
                            { 
                                id: 1, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },
                            { 
                                id: 2, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },{ 
                                id: 3, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },

                        ]
                    } 
                    images=
                    {
                        [
                            { id: 1, img: Canon }, 
                            { id: 2, img: Canon }, 
                            { id: 3, img: Canon }
                        ]
                    } 
                />
            }
            {
                projectName === "PatatapClone" &&
                <ProjectDetailCard 
                    tech=
                    {
                        [
                            { id: 1, tech: 'Apple' }, 
                            { id: 2, tech: 'Banana' }, 
                            { id: 3, tech: 'Cherry' }
                        ]
                    } 
                    description=
                    {
                        [
                            { id: 1, point: 'Apple' },
                            { id: 2, point: 'Banana' }, 
                            { id: 3, point: 'Cherry' }

                        ]
                    } 
                    images=
                    {
                        [
                            { id: 1, img: Canon }, 
                            { id: 2, img: Canon }, 
                            { id: 3, img: Canon }
                        ]
                    } 
                />
            }
            {
                projectName === "Shakesphearegenerator" &&
                <ProjectDetailCard 

                    title={projectName}
                    tech=
                    {
                        [
                            { id: 1, tech: 'HTML' }, 
                            { id: 2, tech: 'CSS' }, 
                            { id: 3, tech: 'React' },
                            { id: 4, tech: 'Javascript' },
                        ]
                    } 
                    description=
                    {
                        [
                            { 
                                id: 1, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },
                            { 
                                id: 2, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },{ 
                                id: 3, 
                                point: `I&#39;ve got a solid foundation in C#, the .NET framework, 
                                and I&#39;m well-versed in full-stack technologies like HTML, 
                                CSS, Next.js, React Query, and Redux. Whether I&#39;m diving into backend 
                                development with C# or crafting user experiences with React, I&#39;m all about 
                                finding practical solutions to real-world problems. ` 
                            },

                        ]
                    } 
                    images=
                    {
                        [
                            { id: 1, img: Canon }, 
                            { id: 2, img: Canon }, 
                            { id: 3, img: Canon }
                        ]
                    } 
                />
            }
            
        </div>
    )
}

export default ProjectDetail
