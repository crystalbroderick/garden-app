import React from "react"
import { Col } from "react-bootstrap"
import { IPlant } from "../types/plants"
import "../assets/general.css"
import { Link } from "react-router-dom"
const Plant = (item: IPlant) => {
  const MAX_LENGTH = 30
  return (
    <Link to={`/plants/${item.id}`} state={{ item }}>
      <div className="card-flyer">
        <div className="image-box">
          <img src={item.img}></img>
        </div>{" "}
        <div className="text-box text-olive">
          <h4>{item.name}</h4>
          <p>
            {item.description.length > MAX_LENGTH
              ? `${item.description.substring(0, MAX_LENGTH)}...`
              : `${item.description}`}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Plant
