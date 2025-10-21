import React from "react";
import { COMMUNITY_LINKS } from "../config/constants";

export default function Footer() {
  return (
    <footer className="bg-black py-10 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <a href={COMMUNITY_LINKS.telegram}>Telegram</a>
          <a href={COMMUNITY_LINKS.discord}>Discord</a>
          <a href={COMMUNITY_LINKS.twitter}>X</a>
          <a href={COMMUNITY_LINKS.linkedin}>LinkedIn</a>
        </div>
        <div className="text-sm text-gray-400 max-w-3xl mx-auto">
          This project is operated by BenediXit OÜ under the Vectorium Group. VECT • AI tokens are utility-based digital assets intended for innovation support and community participation. Not available to residents of the U.S., Canada, or restricted jurisdictions.
        </div>
      </div>
    </footer>
  );
}
