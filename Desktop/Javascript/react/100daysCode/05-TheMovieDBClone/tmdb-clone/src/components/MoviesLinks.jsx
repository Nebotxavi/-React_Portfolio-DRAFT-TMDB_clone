import React from "react";
import { Link } from "react-router-dom";

export const MoviesLinks = () => {
  return (
    <div>
      <Link
        to={{
          pathname: "/movie/popular",
          state: { title: "Popular Movies" }
        }}
      >
        Popular{" "}
      </Link>
      <Link
        to={{
          pathname: "/movie/top_rated",
          state: { title: "Top Rated Movies" }
        }}
      >
        Top Rated{" "}
      </Link>
      <Link
        to={{
          pathname: "/movie/upcoming",
          state: { title: "Upcoming Movies" }
        }}
      >
        Upcoming{" "}
      </Link>
      <Link
        to={{
          pathname: "/movie/now_playing",
          state: { title: "Now Playing Movies" }
        }}
      >
        Now Playing{" "}
      </Link>
    </div>
  );
};
