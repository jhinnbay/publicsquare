import React from "react";

export function AnnouncementBanner() {
  return (
    <div className="flex h-auto px-4 py-2.5 flex-col justify-center items-start gap-2 border-2 border-[#ABABF9] bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] rounded-[10px] shadow-[0px_1px_10.4px_0px_rgba(46,44,166,0.40)] flex-grow-0 mx-5">
      <h3
        className="text-lg font-bold text-black"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        Announcement
      </h3>
      <p
        className="text-xs font-normal text-black leading-6"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Welcome to the Digicat HQ Message Board! If this is your first time
        visiting the forums, make sure to read the forum rules before posting.
        Also check out the FAQ. Note that you have to register an account before
        you are able to post.
      </p>
    </div>
  );
}
