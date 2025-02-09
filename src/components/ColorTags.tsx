
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
    ["Angular", "angular"],  
    ["AWS Lambda", "awslambda"],  
    ["Node", "node"],  
    ["Javascript", "javascript"],  
    ["Chrome Extensions", "chromeextensions"],  
    ["PostgreSQL", "postgresql"],  
    ["MySQL", "mysql"],  
    ["Bootstrap", "bootstrap"],  
    ["Vite", "vite"],  
    ["Github Pages", "githubpages"],  
])

export default function getTechStackColors( techStack: string[])  {
    if (techStack.length > 0) {      
        return techStack.map((item, index) => (
            <span className={`${colorMap.get(item)} skill-tag`} key={index}>{item} </span>
        ));
    }
};

