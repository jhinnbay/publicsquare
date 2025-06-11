import React from "react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="flex px-12 py-9 justify-between items-center border-2 border-[#ABABF9] bg-[#2E2D7A] shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08)] w-full">
      <div className="flex w-[705px] flex-col items-start gap-6">
        <h2 className="text-[46px] font-semibold leading-[57px] tracking-[-0.92px] bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent font-sf-pro">
          Get involved and shape Public Square's future.
        </h2>

        <p className="h-[136px] text-2xl font-semibold leading-[34px] tracking-[-0.48px] bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent font-sf-pro">
          The DAO is a key component of the ecosystem and it is the consensus
          mechanism for defining the resolutions of AA's Organization.
          Participate in the DAO and make your voice heard.
        </p>

        <div className="flex items-center gap-7">
          <Button className="px-6 py-4 bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] text-[#7B81D6] text-base font-semibold leading-6 tracking-[-0.32px] rounded-xl hover:opacity-90 font-sf-pro">
            JOIN OUR FORUM
          </Button>

          <Button
            variant="outline"
            className="px-6 py-4 border-2 border-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-transparent text-base font-semibold leading-6 tracking-[-0.32px] bg-gradient-to-b from-[#ECECFF] to-[#E1E1FE] bg-clip-text text-transparent rounded-xl font-sf-pro"
          >
            READ OUR DOCS
          </Button>
        </div>
      </div>

      <div className="w-[434px] h-[326px] transform rotate-12">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9098986382eab1247c92729d5c657c81e9b81fb1?placeholderIfAbsent=true"
          alt="Apple Set"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
