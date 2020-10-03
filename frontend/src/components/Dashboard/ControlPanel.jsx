import React from "react";
import { FaRegUser } from "react-icons/fa";
import { RiFileList2Line, RiDashboardLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function ControlPanel() {
  const controlBars = [
    // {
    //   text: "Profile",
    //   icon: <FaRegUser className="icon" />,
    // },
    {
      text: "My Tracks",
      icon: <RiDashboardLine className="icon" />,
    },
    // {
    //   text: "Tracks",
    //   icon: <RiFileList2Line className="icon" />,
    // },
  ];
  return (
    <div className="control-panel all-center-column flex-sm-column flex-row-reverse justify-content-start">
      <div className="control-bars d-sm-block all-center-column flex-sm-column flex-row w-100">
        {controlBars.map((controlBar, index) => (
          <div
            className="control-bar text-white bold all-center justify-content-start"
            role="button"
            key={index}
          >
            {controlBar.icon}
            <span className="mb-0 ml-3 d-lg-inline d-none">
              {controlBar.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
