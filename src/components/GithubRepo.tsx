import React, { useState, useEffect } from "react";
import './../style/GithubRepo.css';
import { Repository, RepoData } from "./Projects.tsx";
import cla_json from "./../assets/github/cla.json";
import overwatchfantasy_json from "./../assets/github/overwatchfantasy.json";
import iris_json from "./../assets/github/iris.json";
import nutritiously_json from "./../assets/github/nutritiously.json";
import getTechStackColors from "./ColorTags.tsx";

const GitHubRepo: React.FC<{ repositories: Repository[] }> = ({ repositories }) => {
  const [repoData, setRepoData] = useState<RepoData[]>([]);
  const [error, setError] = useState<string | null>(null);

// only use to fetch API, then save the results to /github/json
// use the fetch call once then save the results into json, dont need to call the gh repo every time
  // const fetchReposAPI = async () => {
  //   try {
  //     const repoPromises = repositories.map(({ username, repoName }) =>
  //       fetch(`https://api.github.com/repos/${username}/${repoName}`).then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`Failed to fetch ${repoName}: ${response.statusText}`);
  //         }
  //         return response.json();
  //       })
  //     );

  //     const repoResults = await Promise.all(repoPromises);
  //     setRepoData(repoResults);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "An unknown error occurred");
  //   }
  // }


  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const nutritiously = nutritiously_json as RepoData;
        const cla = cla_json as RepoData;
        const overwatchfantasy = overwatchfantasy_json as RepoData;
        const iris = iris_json as RepoData;
        setRepoData([nutritiously, overwatchfantasy, iris, cla]);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      }
    };

    fetchRepos();
  }, [repositories]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (repoData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ghrepo-container">
      {repoData.map((repo) => (
        <div key={repo.id} className="ghrepo-card">
          <h3 className="repo">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p className="description">{repo.description || "No description available."}</p>
          <div className="skill-tags">
        {getTechStackColors(repo.techStacks)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GitHubRepo; 