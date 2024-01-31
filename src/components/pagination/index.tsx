import Link from "next/link";

export function Pagination({
  baseUrl,
  page,
  perPage,
  total,
}: {
  baseUrl: string;
  page: number;
  perPage: number;
  total: number;
}) {
  return (
    <div>
      {page !== 1 && (
        <>
          <Link href={`${baseUrl}/${page - 1}`} rel="prev">
            Previous
          </Link>{" "}
        </>
      )}
      {perPage * page < total && (
        <Link href={`${baseUrl}/${page + 1}`} rel="next">
          Next
        </Link>
      )}
    </div>
  );
}
