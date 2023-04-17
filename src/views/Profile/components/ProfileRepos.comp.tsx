import { Link } from "react-router-dom";
import { IRepo } from "../types/Profile.types";

interface IProfileReposProps {
  currentRepos: IRepo[]
}

export default function ProfileRepos(props: IProfileReposProps) {

  const { currentRepos } = props;

  return (
    <div className="repos-list">
      {currentRepos.map((repo) => (
        <div className="repo-item" key={repo.id}>
          <Link to={repo.svn_url} target="_blank" rel="noopener noreferrer"><h3 className="repo-name">{repo.name}</h3></Link>
          <p className="repo-description">{repo.description}</p>
        </div>
      ))}
    </div>
  )
}