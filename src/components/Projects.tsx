import GitHubRepo from "./GithubRepo";

export interface Repository {
  username: string;
  repoName: string;
}

export interface RepoData {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  techStacks: string[];
}

const myRepositories = [
    { username: "TryHard-Software", repoName: "OverwatchFantasyWebApp" },
    { username: "communitybridge", repoName: "easycla" },
    { username: "Team-BAB", repoName: "iris" },
]

const Projects = () => {
    return <div id="projects-section" className="projects-container">
        <div className="Project-details">
            <div className="projects-title"> 
            <h1 className="title">
                Projects
            </h1>
            </div>
        
        <GitHubRepo
            repositories={myRepositories}
         />
        </div>

    </div>
}


export default Projects;
