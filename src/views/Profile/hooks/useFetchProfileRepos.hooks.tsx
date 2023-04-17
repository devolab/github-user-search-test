import { useEffect, useState } from "react";
import { IRepo } from "../types/Profile.types";
import { get } from "../../../services/get.services";

interface IUser {
  avatar_url: string,
  repos_url: string,
  name: string,
  public_repos: number
}

export function useFetchRepos(username?: string) {
  const [userData, setUserData] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [repos, setRepos] = useState<IRepo[]>([]);

  const fetchRepos = async (reposUrl: string) => {
    try {
      let allRepos: IRepo[] = [];
      let page = 1;
      let hasNextPage = true;
      while (hasNextPage) {
        const response = await get<IRepo[]>(reposUrl, {
          params: { page, per_page: 100 },
        });
        allRepos = [...allRepos, ...response.data];
        const linkHeader = response.headers.link;
        if (linkHeader && linkHeader.includes('rel="next"')) {
          hasNextPage = true;
          page++;
        } else {
          hasNextPage = false;
        }
      }
      setRepos(allRepos);
      setIsLoading(false);
    } catch (error) {
      setError("Unable to fetch any repo.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await get<IUser>(
          `/users/${username}`
        );
        setUserData(response.data);
        fetchRepos(response.data.repos_url);
      } catch (error) {
        setError("Unable to fetch user data.");
        setIsLoading(false);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return { userData, isLoading, error, repos };
}

