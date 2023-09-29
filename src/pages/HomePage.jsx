import React, { useState, useEffect } from "react";
import { client } from "../client";
import { Newsletter } from "../Componenets/Newsletter";
import { Proflile } from "../Componenets/Proflile";
import { Footer } from "../Componenets/Footer";

export const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
         title,
         slug,
         body,
         publishedAt,
         mainImage {
          asset -> {
            _ref,
            _type
          },
         },
         "name": author -> name, 
       } | order(publishedAt desc)`
      )
      .then((data) => {
        setStories(data);
        console.log(data);
      })
      .catch((error) => {
        console.log("error connecting to API !", error);
      });
  }, []);

  return (
    <div>
      <section className="max-w-7xl mx-auto my-20">
        <article className="relative">
          <img
            src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="h-96 w-full object-cover rounded-2xl "
          />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl lg:text-5xl mb-6">Document Title</h1>
            <p className="mb-8 md:w-1/2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              nihil ipsam facilis sequi amet aspernatur?
            </p>
            <button className="bg-white py-2 px-8 rounded shadow text-slate-800 tracking-wide hover:opacity-75 transition-all duration-200">
              Read More
            </button>
          </div>
        </article>
      </section>
      <Newsletter />
      <Proflile />
      <Footer />
    </div>
  );
};
