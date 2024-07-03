import React from "react";

function Skill({ src, desc }) {
  return (
    <li className="flex items-center gap-3 rounded-md p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
      <div className="p-2 items-center justify-center rounded-lg bg-[#007acc26]">
        <img src={src} alt={desc} className="object-left" width={25} />
      </div>
      <span class="text-smaller md:text-small text-white">{desc}</span>
    </li>
  );
}

export default Skill;
