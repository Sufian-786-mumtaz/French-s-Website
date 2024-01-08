import React from "react";

const Rightside = ({path}) => {
  return (
    <div className="max-w-[980px] max-h-[952px]">
      <div  className="relative">
        <img src={path} alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-[107px] w-[107px] rounded-full border border-[#FFFFFF4D] flex items-center justify-center py-3 custom-gradient"
          >
            <button className="bg-white rounded-full w-[68px] h-[68px] flex items-center justify-center">
              <img src="/images/play.png" height={24} width={28} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
