import { Button } from "../../../components/index.comp";
import { IRepo } from "../types/Profile.types";
import { useEffect, useState } from "react";

interface IProfilePaginationProps {
  paginate: (pageNumber: number) => void
  repos: IRepo[]
  currentPage: number
  reposPerPage: number
}

export default function ProfilePagination(props: IProfilePaginationProps) {

  const { paginate, repos, reposPerPage, currentPage } = props;

  const [pageRange, setPageRange] = useState<number[]>([]);

  useEffect(() => {
    const totalPages = Math.ceil(repos?.length / reposPerPage);
    const rangeStart = Math.max(currentPage - 2, 1);
    const rangeEnd = Math.min(currentPage + 2, totalPages);
    const rangeLength = rangeEnd - rangeStart + 1;
    const range = Array.from({ length: rangeLength }, (_, i) => rangeStart + i);
    setPageRange(range);
  }, [repos, reposPerPage, currentPage]);

  return (
    <div className="pagination">
      {reposPerPage < repos?.length && (
        <ul>
          {currentPage > 1 && (
            <li>
              <Button
                label="Previous"
                type="button"
                onClick={() => paginate(currentPage - 1)}
              />
            </li>
          )}
          {pageRange.map((pageNumber) => (
            <li key={pageNumber}>
              <Button
                label={pageNumber.toString()}
                type="button"
                onClick={() => paginate(pageNumber)}
                classname={currentPage === pageNumber ? "button-pagination active" : ""}
              />
            </li>
          ))}
          {currentPage < Math.ceil(repos?.length / reposPerPage) && (
            <li>
              <Button
                label="Next"
                type="button"
                onClick={() => paginate(currentPage + 1)}
              />
            </li>
          )}
          {currentPage < Math.ceil(repos?.length / reposPerPage) - 2 && (
            <li>
              <Button
                label={Math.ceil(repos?.length / reposPerPage).toString()}
                type="button"
                onClick={() => paginate(Math.ceil(repos?.length / reposPerPage))}
              />
            </li>
          )}
        </ul>
      )}
    </div>
  )
}
