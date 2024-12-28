import getTechStackColors from './ColorTags.tsx';
import '../style/Experience.css'

interface ExperienceCardProps {
    jobName: string;
    companyName: string;
    techStack: string[];
    startDate: string;
    endDate: string;
    description: string;
    logo: string;
  }


function ExperienceCard({ 
    jobName,
    companyName, 
    techStack, 
    startDate, 
    endDate, 
    description, 
    logo }: ExperienceCardProps) {
    return <div className="experience-card border-gradient border-gradient-purple" > 
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
        <div className="experience-description">
            {description}
        </div>
        <div className="skill-tags">
            {getTechStackColors(techStack)}
        </div>
        
    </div>
}

export default ExperienceCard;