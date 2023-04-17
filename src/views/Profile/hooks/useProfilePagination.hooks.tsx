import { useState } from "react";
import { IRepo } from "../types/Profile.types";
import { useFetchRepos } from "./useFetchProfileRepos.hooks";

export function useProfilePagination(username?: string) {

  const { repos } = useFetchRepos(username)

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage,] = useState(10);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const currentRepos: IRepo[] = repos?.slice(indexOfFirstRepo, indexOfLastRepo);

  return { currentPage, reposPerPage, paginate, currentRepos }
}