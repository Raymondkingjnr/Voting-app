import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-400 max-w-7xl mx-auto py-10 flex items-center justify-center text-center flex-col">
      <h3>Share on social media</h3>
      <ul className="text-sm text-slate-600 mt-4 flex items-center justify-center flex-wrap gap-4">
        <li>FaceBook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Pintrest</li>
        <li>Tumblr</li>
      </ul>
    </footer>
  );
};
