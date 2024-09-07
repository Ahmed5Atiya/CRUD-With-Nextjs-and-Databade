"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
function ErrorPage({ error }: ErrorProps) {
  return <div>{error.message}</div>;
}

export default ErrorPage;
