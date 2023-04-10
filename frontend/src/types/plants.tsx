/* used in PlantCard, PlantDetails, Plants */
export interface IPlant {
  id: number
  name: string
  img?: string
  description: string
  optimal_sun?: string
  when_to_plant?: string
  growing_from_seed?: string
  spacing?: string
  watering?: string
  other_care?: string
  diseases?: string
  harvesting: string
  planting_considerations: string
}
