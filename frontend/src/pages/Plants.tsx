import React, { useRef, useMemo } from "react"
import { useEffect, useState } from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { IPlant } from "../types/plants"
import PlantService from "../services/plant.service"
import "../assets/general.css"
import { Link } from "react-router-dom"
import { AiOutlineHeart } from "react-icons/ai"
import Plant from "../components/PlantCard"
import { useQuery } from "@tanstack/react-query"
import SearchBar from "../components/SearchBar"

function Plants() {
  // const [plants, setPlants] = useState<Array<IPlant>>([])
  // const [currentPlant, setCurrentPlant] = useState<IPlant | null>(null)
  // const [currentIndex, setCurrentIndex] = useState<number>(-1)
  // const [searchName, setSearchName] = useState<string>("")
  const [inputValue, setInputValue] = useState<string>("")

  const plantsQuery = useQuery({
    queryKey: ["plants"],
    queryFn: PlantService.getAll,
  })
  if (plantsQuery.status === "loading") return <h1>Loading...</h1>
  if (plantsQuery.status === "error") {
    return <h1>{JSON.stringify(plantsQuery.error)}</h1>
  }

  return (
    <>
      <h1 className="page-title">All Plants</h1>
      <SearchBar
        onChange={(e: any) => {
          setInputValue(e.target.value)
        }}
      />
      <Row xs={2} s={4} md={5}>
        {plantsQuery.data
          ?.filter((elem) =>
            elem.name.toLowerCase().includes(inputValue.toLowerCase())
          )
          .map((item) => (
            <Col id="cards_landscape_wrap-2" key={item.id}>
              <Plant {...item} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default Plants
