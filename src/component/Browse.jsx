import React from "react";
import Header from "./Header";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeroBanner from "./HeroBanner";
import MovieGrid from "./MovieGrid";

const Browse = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  useNowPlayingMovies();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex items-center justify-end p-4 text-white">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src="https://occ-0-3779-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="profile"
        />
        <button
          onClick={handleSignOut}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition cursor-pointer z-10"
        >
          Sign Out
        </button>
      </div>

      <div className="bg-black text-white min-h-screen">
        <HeroBanner />
        <div className="p-4">
          <h1 className="text-2xl font-semibold mb-4">Now Playing</h1>
          <MovieGrid />
        </div>
      </div>
    </div>
  );
};

export default Browse;
