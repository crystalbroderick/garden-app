import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, NavItem } from "react-bootstrap"
import { IoIosWater } from "react-icons/io"
import { BsFillSunFill } from "react-icons/bs"
import { FaCloudSun } from "react-icons/fa"
import { GiCactusPot } from "react-icons/gi"
import { IPlant } from "../types/plants"
import { useNavigate, useParams } from "react-router-dom"
import PlantService from "../services/plant.service"
import { useQuery } from "@tanstack/react-query"

export function PlantDetails() {
  const { id } = useParams()
  const {
    status: statusPlant,
    error: errorPlant,
    data: plant,
  } = useQuery({
    queryKey: ["plants", parseInt(id!)],
    queryFn: () => PlantService.get(id!),
  })

  return (
    <Container className="plant-details-card bg-offwhite">
      {plant && (
        <>
          <Row>
            <Col sm={8}>
              <h1>{plant.name}</h1>
              <span>{plant.description}</span>
              <p className="text-muted">Vegetable</p>
            </Col>
            <Col sm={4}>
              {plant.img && (
                <img
                  src={plant.img}
                  alt={plant.name}
                  className="plant-img"
                ></img>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>
                <IoIosWater></IoIosWater>Water
              </h4>
              {plant?.watering}{" "}
            </Col>
            <Col>
              {plant.optimal_sun === "full_sun" ? (
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
          <p>{plant.spacing}</p>
          <h4>Planting Considerations</h4>
          <p>{plant.planting_considerations}</p>
          <h4>When to Plant</h4>
          <p>{plant.when_to_plant}</p>
        </>
      )}{" "}
    </Container>
  )
}
