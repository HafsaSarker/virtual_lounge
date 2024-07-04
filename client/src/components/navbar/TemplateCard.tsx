import { Link } from "react-router-dom";
import { TemplateCardProps } from "../../types/create-room-types";
import { generateId } from "../../utils/generate_rand_id";
/*
TODO: remove room ID in params, and get the theme from database using roomid from params
*/

function TemplateCard({ id, name, description, thumbnail }: TemplateCardProps) {
  const roomId = generateId();

  return (
    <Link to={`/room/${id}/${roomId}`}>
      <div className="card card-compact max-w-96 bg-base-100 shadow-xl hover:scale-105 transition-transform duration-300 hover:border hover:border-slate-600">
        <figure>
          <img src={thumbnail} alt={description} />
        </figure>
        <div data-theme="" className="card-body rounded-b-2xl">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default TemplateCard;
