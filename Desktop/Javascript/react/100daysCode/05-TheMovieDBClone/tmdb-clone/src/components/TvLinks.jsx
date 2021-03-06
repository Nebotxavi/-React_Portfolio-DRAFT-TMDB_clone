import React from "react";
import { Link } from "react-router-dom";

export const TvLinks = () => {
  return (
    <div>
      <Link
        to={{
          pathname: "/search/tv/popular",
          state: { title: "Popular TV Shows" }
        }}
      >
        Popular{" "}
      </Link>
      <Link
        to={{
          pathname: "/search/tv/top_rated",
          state: { title: "Top Rated TV Shows" }
        }}
      >
        Top Rated{" "}
      </Link>
      <Link
        to={{
          pathname: "/search/tv/on_the_air",
          state: { title: "Currently Airing TV Shows" }
        }}
      >
        On TV{" "}
      </Link>
      <Link
        to={{
          pathname: "/search/tv/airing_today",
          state: { title: "TV Shows Airing Today" }
        }}
      >
        Airing Today{" "}
      </Link>
    </div>
  );
};
