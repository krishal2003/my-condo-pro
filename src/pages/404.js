import React from "react";
import Link from "next/link";
function four() {
  return (
    <>
      <div className="error-cover">
        <h1 className="error">404 - Page Not Found</h1>
        <Link href="/" className="error-button">
          Go back home
        </Link>
      </div>
    </>
  );
}

export default four;
