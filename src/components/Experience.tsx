import { Component } from "react";
import ExperienceCard from "./ExperienceCard";
import '../style/Experience.css'

const Experience = () => {
    return <div className="experience-container">
        <h1 className="experience-title">Experience</h1> 
        <ExperienceCard
            jobName="Software Engineer II"
            companyName="Transcepta"
            techStack={["C#", "Azure DevOps", "ASP.NET", "SQL Server", "Visual Studio"]}
            startDate="Jan 2024"
            endDate="Nov 2024" 
            />
    </div>

}

export default Experience;