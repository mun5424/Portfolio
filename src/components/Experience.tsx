import ExperienceCard from "./ExperienceCard.tsx";
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
            descriptionExtended={["Developed and maintained back-end systems for a finance platform enhanced with Automation, ensuring optimal performance and reliability.", "Implemented and maintained RESTful APIs and optimized relational database schemas to enhance data storage and retrieval processes.", 
                "Documented and created an audit log system on database interactions on Entity Framework.",
                "Conducted code reviews and provided constructive feedback to team members to maintain code quality and consistency.",
                "Troubleshooted and resolved complex technical issues to minimize system downtime and improve user experience."
            ]}
            logo={transceptalogo}
        />
        <ExperienceCard
            jobName="Software Development Engineer"
            companyName="Amazon"
            techStack={["Java", "Python", "React", "GraphQL", "DynamoDB", "AWS"]}
            startDate="Sept 2021"
            endDate="May 2023" 
            description="Prime Video Live Events - Implement features, conduct code reviews, document architectures and participate in on-call rotations. "
            descriptionExtended={["Maintained and developed full-stack applications using Java, DynamoDB, GraphQL, and React.", 
                "Delivered features including proposal documentation, collaborative development, code reviews, and integration testing.",
                "Create documentation and refine SOPs for existing and new processes of application workflows.",
                "Participated in on-call rotations to troubleshoot operators and address customer-impacting issues."
            ]}
            logo={amazonlogo}
        />
        <ExperienceCard
            jobName="Software Engineer"
            companyName="COFEBE"
            techStack={["Java", "Python", "C#", "AngularJS", "Typescript", "SQL Server", "Visual Studio"]}
            startDate="Aug 2018"
            endDate="Mar 2021" 
            description="Software consulting prototypes and delivering features/applications for various clients."
            descriptionExtended={["Actively participated in a 2-3 week Agile Team Sprint, consisting of Feature Requirement breakdowns, implementation of proposed storyboards, and training new developers.", 
                "Consulted and delivered Full-Stack applications using various languages and frameworks.", 
                "Documented proposals for web applications features, and implemented them with Angular 2.0.",
                "Deployed and managed applications through CI/CD Pipelines such as CircleCI and TFS."
            ]}
            logo={cofebelogo}
        />
        <ExperienceCard
            jobName="Programmer Analyst"
            companyName="Bristl Farms"
            techStack={["SQL Server", "Visual Basic .NET"]}
            startDate="Jan 2015"
            endDate="Aug 2017" 
            description="Finance data analysis with SQL Server and creating/enhancing internal applications. "
            descriptionExtended={["Developed applications for human resource, finance, point-of-sale, and marketing using Visual Basic.NET Framework.",
                "Maintained and optimized legacy SQL queries into concise stored procedures for use with .NET Applications.",
                "Manipulated financial data for sales analysis with SQL Server and .NET Applications."
            ]}
            logo={bristolfarmslogo}
        />
    </div>

}

export default Experience;