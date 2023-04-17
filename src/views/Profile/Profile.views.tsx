import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFetchRepos } from "./hooks/useFetchProfileRepos.hooks";
import { Button } from "../../components/index.comp";
import {
  ProfileInfo,
  ProfilePicture,
  ProfileRepos,
  ProfilePagination
} from "./components/index.profile.comp"
import Loader from "../../components/Loader.comp";
import { useProfilePagination } from "./hooks/useProfilePagination.hooks";

export default function Profile() {

  // Grab username from params
  const { username } = useParams<{ username: string }>();
  // react-router navigation
  const navigate = useNavigate();

  // hooks dependencies
  const {
    userData,
    isLoading,
    error,
    repos
  } = useFetchRepos(username);

  const {
    currentRepos,
    paginate,
    reposPerPage,
    currentPage
  } = useProfilePagination(username);

  // Checks before loading data to ui...
  if (error) {
    return (
      <div>
        {error}<br />

        <Button
          label="Go to Search"
          type="button"
          onClick={() => navigate("/")}
          classname="button-navigate button-info-hover"
        />
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-info">
          {userData && (
            <>
              <ProfilePicture
                avatarUrl={userData.avatar_url}
              />
              <div>
                <ProfileInfo
                  name={userData.name}
                  publicRepos={userData.public_repos}
                />
                <Button
                  label="Go to Search"
                  type="button"
                  onClick={() => navigate("/")}
                  classname="button-navigate button-info-hover"
                />
              </div>
            </>
          )}
        </div>
        {
          isLoading
            ? <div><Loader /></div>
            : <>
              <ProfileRepos currentRepos={currentRepos} />
              <ProfilePagination
                paginate={paginate}
                repos={repos}
                reposPerPage={reposPerPage}
                currentPage={currentPage}
              />
            </>
        }

      </div>
    </div>
  );
}
