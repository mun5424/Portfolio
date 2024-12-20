import React from 'react';
import '../style/Experience.css'

interface ExperienceCardProps {
    jobName: string;
    companyName: string;
    techStack: string[];
    startDate: string;
    endDate: string;
  }

function getTechStacks( techStack: string[])  {
    if (techStack.length > 0) {      
        return techStack.map((item, index) => (
            <span key={index}>{item} </span>
        ));
    }
}

function ExperienceCard({ jobName, companyName, techStack, startDate, endDate }: ExperienceCardProps) {
    return <div className="experience-card"> 
        <h3>{jobName}</h3>
        <h4>{companyName}</h4>
        {getTechStacks(techStack)}
    </div>
}

export default ExperienceCard;