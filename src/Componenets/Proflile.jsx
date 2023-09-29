import React from "react";
import { FaTwitter } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";

export const Proflile = () => {
  return (
    <div className="max-w-2xl my-20 mx-auto grid grid-cols-1 gap-8 bg-white md:grid-cols-2 rounded-lg shadow-lg md:place-items-center overflow-hidden ">
      <article>
        <img
          src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Raymond Nnaji"
          className="md:h-64 md:object-cover"
        />
      </article>

      <article className="md:pr-8">
        <h3 className="text-2xl mb-4">Raymond Nnaji</h3>
        <p>A front-end developer in react, based in Lagos, Nigeria.</p>
        <ul className="flex items-center justify-start gap-4 mt-4">
          <li className="text-2xl text-slate-600">
            <GrFacebook />
          </li>
          <li className="text-2xl text-slate-600">
            <FaTwitter />
          </li>
        </ul>
      </article>
    </div>
  );
};
