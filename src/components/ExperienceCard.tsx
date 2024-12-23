import classNames from 'classnames';
import '../style/Experience.css'

interface ExperienceCardProps {
    jobName: string;
    companyName: string;
    techStack: string[];
    startDate: string;
    endDate: string;
    logo: string;
  }

const colorMap = new Map<string, string>([
    ["C#", "csharpblue"],  
    ["SQL Server", "sqlserver"],  
    ["Visual Studio", "visualstudio"],  
    ["Azure DevOps", "azuredevops"],  
    ["ASP.NET", "aspnet"],  
    ["Java", "java"],  
    ["Python", "python"],  
    ["React", "react"],  
    ["GraphQL", "graphql"],  
    ["DynamoDB", "dynamodb"],  
    ["AWS", "aws"],  
    ["Visual Basic .NET", "vbnet"],  
    ["Typescript", "typescript"],  
    ["AngularJS", "angularjs"],  
])

function getTechStacks( techStack: string[])  {
    if (techStack.length > 0) {      
        return techStack.map((item, index) => (
            <span className={`${colorMap.get(item)} skill-tag`} key={index}>{item} </span>
        ));
    }
}


function ExperienceCard({ jobName, companyName, techStack, startDate, endDate, logo }: ExperienceCardProps) {
    return <div className="experience-card border-gradient border-gradient-purple" > 
        <div className="experience-title">
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
        <div className="skill-tags">
        {getTechStacks(techStack)}
        </div>
        
    </div>
}

export default ExperienceCard;