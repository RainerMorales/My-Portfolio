"use client"
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
      <div className="card border m-2 rounded-md h-80 ">
        <figure className="">
          {props.pic}
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title">{props.names}</h2>
          <p className="opacity-80">{props.description}</p>
          <div className="card-actions justify-between items-center ">
            <ul className="">
              <li className="space-x-2">{props.badge}</li>
            </ul>
            <div className="link hover:opacity-60 font-mono">
              {props.link}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;


