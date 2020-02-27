import React from "react";
import { Link } from "react-router-dom";

export const PeopleLinks = () => {
  return (
    <div>
      <Link
        to={{
          pathname: "/search/person/popular",
          state: { title: "Popular People" }
        }}
      >
        Popular people{" "}
      </Link>
    </div>
  );
};
