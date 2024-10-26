import React from "react";
import './HomeComp.css'

const HomeComp = ({ icon: Icon, head, body }) => {
  return (
    <div className="flex gap-10 w-[25rem] shadowNew rounded-2xl">
      <div className="text-[5rem] text-blue-400">
        <Icon /> {/* Render the icon component */}
      </div>
      <div>
        <h2 className="mb-5 text-2xl">{head}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default HomeComp;
