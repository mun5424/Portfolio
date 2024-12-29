import getTechStackColors from './ColorTags.tsx';
import { useState } from 'react';
import '../style/Experience.css'

interface ExperienceCardProps {
    jobName: string;
    companyName: string;
    techStack: string[];
    startDate: string;
    endDate: string;
    description: string;
    descriptionExtended: string[];
    logo: string;
  }


function getDescriptionList(descriptionExtended: string[]) {
    return (
        descriptionExtended.map((description) => {
            return <div key="description"><p>{description}</p> </div>
        })
    )
}


function ExperienceCard({ 
    jobName,
    companyName, 
    techStack, 
    startDate, 
    endDate, 
    description, 
    descriptionExtended,
    logo }: ExperienceCardProps) {

    // state to show more description or less 
    const [isExtended, setIsExtended] = useState(false);

    function toggle() {
        setIsExtended(!isExtended);
    }


    return <div className="experience-card border-gradient border-gradient-purple" onClick={toggle} > 
        <div className="experience-info">
            <div className="experience-image">
                <img className="company-logo" src={logo} />
            </div>
            <div className="experience-job-name">
                <h3>{jobName}</h3>
                <h4>{companyName}</h4>
            </div>
            <div className="start-end-dates">
                <p>{startDate} ~ {endDate}</p>
            </div>
        </div>
        <div className={`experience-description ${isExtended ? 'bolded' : '' }`}>
            {description}
        </div>
        <div className={`experience-description-extended ${isExtended ? 'extended' : 'notextended' }`}>
            {getDescriptionList(descriptionExtended)}
        </div>
        <div className="skill-tags">
            {getTechStackColors(techStack)}
        </div>
        
    </div>
}

export default ExperienceCard;