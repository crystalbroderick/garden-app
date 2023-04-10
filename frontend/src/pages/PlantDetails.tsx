import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, NavItem } from "react-bootstrap"
import { IoIosWater } from "react-icons/io"
import { BsFillSunFill } from "react-icons/bs"
import { FaCloudSun } from "react-icons/fa"
import { GiCactusPot } from "react-icons/gi"
import { IPlant } from "../types/plants"
import { useNavigate, useParams } from "react-router-dom"
import PlantService from "../services/plant.service"

export function PlantDetails() {
  const { id } = useParams()
  let navigate = useNavigate()

  const initialPlantState = {
    id: null,
    name: "",
    description: "",
    optimal_sun: "full_sun",
    when_to_plant: "",
    growing_from_seed: "",
    spacing: "",
    watering: "",
    other_care: "",
    diseases: "",
    harvesting: "",
    planting_considerations: "",
    img: "",
  }

  const [currentPlant, setCurrentPlant] = useState<IPlant>() || null
  const [message, setMessage] = useState<string>("")

  const getPlant = (id: string) => {
    PlantService.get(id)
      .then((res: any) => {
        setCurrentPlant(res.data)
      })
      .catch((e: Error) => console.log(e))
  }

  useEffect(() => {
    if (id) getPlant(id)
  }, [id])

  console.log(currentPlant)
  return (
    <Container className="plant-details-card bg-offwhite">
      {currentPlant && (
        <>
          <Row>
            <Col sm={8}>
              <h1>{currentPlant?.name}</h1>
              <span>{currentPlant?.description}</span>
              <p className="text-muted">is this a vegetable?</p>
            </Col>
            <Col sm={4}>
              <img
                src={currentPlant.img}
                alt={currentPlant.name}
                className="plant-img"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                <IoIosWater></IoIosWater>Water
              </h4>
              {currentPlant?.watering}{" "}
            </Col>
            <Col>
              {currentPlant.optimal_sun === "full_sun" ? (
                <h4>
                  <BsFillSunFill></BsFillSunFill>
                  <p>Sun Exposure full sun (6+ hours)</p>
                </h4>
              ) : (
                <>
                  <h4>
                    <FaCloudSun /> Sun Exposure
                  </h4>
                  <p> part sun ({">"}6 hours)</p>
                </>
              )}
            </Col>
          </Row>
          <h4>Spacing</h4>
          <p>{currentPlant.spacing}</p>
          <h4>Planting Considerations</h4>
          <p>{currentPlant.planting_considerations}</p>
          <h4>When to Plant</h4>
          <p>{currentPlant.when_to_plant}</p>
        </>
      )}{" "}
    </Container>
  )
}
