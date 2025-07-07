import type { District, Village } from './types'
import districts from './data/districts.json'
import villages from './data/villages.json'

export const districtsByRegionId = new Map<number, District[]>()
export const villagesByDistrictId = new Map<number, Village[]>()

for (const district of districts) {
  const list = districtsByRegionId.get(district.region_id) || []
  list.push(district)
  districtsByRegionId.set(district.region_id, list)
}

for (const village of villages) {
  const list = villagesByDistrictId.get(village.district_id) || []
  list.push(village)
  villagesByDistrictId.set(village.district_id, list)
}
