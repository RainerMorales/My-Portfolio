import { ReactElement } from "react";

interface cardProps {
  names: string;
  description: string;
  pic: ReactElement;
  link: ReactElement;
  badge: ReactElement;
}
function Card(props: cardProps) {
  return (
    <>
      <div className="card border-2 m-2 rounded-md ">
        <figure className="">
          {props.pic}
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{props.names}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-between items-center ">
            <ul className="">
              <li className="space-x-2">{props.badge}</li>
            </ul>
            <div className="link link-hover hover:opacity-80 font-mono">
              {props.link}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;


