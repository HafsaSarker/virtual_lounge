import React from "react";
import { TemplateCardProps } from "../../types/create-room-types";

function TemplateCard({ title, desc, thumbnail }: TemplateCardProps) {
  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 hover:border hover:border-indigo-200">
      <figure>
        <img src={thumbnail} alt={desc} />
      </figure>
      <div data-theme="" className="card-body rounded-b-2xl">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default TemplateCard;
