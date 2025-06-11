import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Navbar } from "./Navbar";
import { AnnouncementBanner } from "./AnnouncementBanner";
import { InviteBanner } from "./InviteBanner";
import { ForumCard } from "./ForumCard";
import { Footer } from "./Footer";
import { PixelIcon } from "./PixelIcon";

export function ForumPage() {
  return (
    <div className="flex flex-col w-full min-h-screen px-8 gap-2 bg-gradient-to-br from-gray-800 via-gray-900 to-black bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=')] bg-blend-color-dodge">
      {/* Navbar */}
      <Navbar />

      {/* Main Content Container */}
      <div className="flex px-2.5 items-start gap-2.5 flex-1 w-full">
        <div className="flex px-[18px] py-4 flex-col items-start gap-4 flex-1 rounded-[17px] w-full">
          {/* Header with Breadcrumb and View Toggle */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center gap-2.5 flex-1">
              <h1 className="text-2xl font-semibold leading-6 text-white font-sf-pro">
                Community Home &gt; Threads
              </h1>
            </div>

            <Button
              variant="secondary"
              className="px-5 py-[14px] gap-2 border border-[#ABABF9] bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-[#111] text-base font-medium"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Expressive View
              <ArrowUpDown className="w-5 h-5" />
            </Button>
          </div>

          {/* Announcement Banner */}
          <AnnouncementBanner />

          {/* Invite Banner */}
          <InviteBanner />

          {/* Forum Headers */}
          <div className="flex justify-between items-start w-full">
            <div
              className="text-base font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Forum
            </div>
            <div
              className="text-base font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Threads
            </div>
            <div
              className="text-base font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Posts
            </div>
          </div>

          {/* Forum Content */}
          <div className="flex flex-col items-start w-full">
            {/* Digital Cat Headquarters Category */}
            <div className="flex px-8 py-2.5 items-center gap-2.5 w-full border border-[#6B7280] bg-gradient-to-r from-[#264EA4] via-[#4158ED] via-[#297FE8] via-[#2246BC] to-[#181862]">
              <div
                className="text-base font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Digital Cat Headquarters
              </div>
            </div>

            {/* Latest Proposals & Discussions */}
            <ForumCard
              title="Latest Proposals & Discussions"
              description="Discuss ongoing proposals and public goods, contribute to the ethos and conversation by sharing your valuable insight with the ecosystem."
              badge={{ text: "Public", variant: "default" }}
              icon={<PixelIcon />}
            />

            {/* Project Preparation */}
            <ForumCard
              title="Project Preparation"
              description="Best practices for organizing your proposals and pitches."
              badge={{ text: "500 $BASED", variant: "cyan" }}
              icon={<PixelIcon />}
            />

            {/* General Discussion Category */}
            <div className="flex px-8 py-2.5 items-center gap-2.5 w-full border border-[#6B7280] bg-gradient-to-r from-[#264EA4] via-[#4158ED] via-[#297FE8] via-[#2246BC] to-[#181862]">
              <div
                className="text-base font-medium bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                General Discussion
              </div>
            </div>

            {/* General Discussion Threads */}
            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: "Public", variant: "default" }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: "Key Card", variant: "default" }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: "Key Card", variant: "default" }}
              icon={<PixelIcon />}
            />

            <ForumCard
              title="General Discussion"
              description="Discuss ongoing events and upcoming cleanup projects, share experiences from past events."
              badge={{ text: "Key Card", variant: "default" }}
              icon={<PixelIcon />}
            />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
