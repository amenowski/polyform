import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

import { PAGE_SIZE } from "../../utils/constants";
import Button from "./Button";

type PaginationProps = {
  count: number;
};

function Pagination({ count }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", String(next));
    setSearchParams(searchParams);
  }
  function prevPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", String(prev));
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <p>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center gap-2">
        <Button
          className="flex items-center gap-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FaChevronLeft /> <span>Previous</span>
        </Button>
        <Button
          className="flex items-center gap-2"
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span> <FaChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
