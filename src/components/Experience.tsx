import ExperienceCard from "./ExperienceCard";
import '../style/Experience.css'
import transceptalogo from '../assets/transcepta.jpg'
import amazonlogo from '../assets/amazon.jpg'
import cofebelogo from '../assets/cofebe.png'
import bristolfarmslogo from '../assets/bristolfarms.png'

const Experience = () => {
    return <div id="experience-section" className="experience-container">
        <h1 className="title">Experience</h1> 
        <ExperienceCard
            jobName="Software Engineer II"
            companyName="Transcepta"
            techStack={["C#", "Azure DevOps", "ASP.NET", "SQL Server", "Visual Studio"]}
            startDate="Jan 2024"
            endDate="Nov 2024" 
            description="Maintain, enhance, and troubleshoot the API Server and Database for the Services Team. "
            logo={transceptalogo}
        />
        <ExperienceCard
            jobName="Software Development Engineer"
            companyName="Amazon"
            techStack={["Java", "Python", "React", "GraphQL", "DynamoDB", "AWS"]}
            startDate="Sept 2021"
            endDate="May 2023" 
            description="Prime Video Live Events - Implement features, conduct code reviews, document architectures and participate in on-call rotations. "
            logo={amazonlogo}
        />
        <ExperienceCard
            jobName="Software Engineer"
            companyName="COFEBE"
            techStack={["Java", "Python", "C#", "AngularJS", "Typescript", "SQL Server", "Visual Studio"]}
            startDate="Aug 2018"
            endDate="Mar 2021" 
            description="Software consulting prototypes and delivering features/applications for various clients."
            logo={cofebelogo}
        />
        <ExperienceCard
            jobName="Programmer Analyst"
            companyName="Bristl Farms"
            techStack={["SQL Server", "Visual Basic .NET"]}
            startDate="Jan 2015"
            endDate="Aug 2017" 
            description="Finance data analysis with SQL Server and creating/enhancing internal applications. "
            logo={bristolfarmslogo}
        />
    </div>

}

export default Experience;