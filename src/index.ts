import regions from './data/regions.json'
import districts from './data/districts.json'
import villages from './data/villages.json'

import { districtsByRegionId, villagesByDistrictId } from './utils'
import type { Region, District, Village } from './types'

// Viloyatlar ro‘yxati
export function getRegions(): Region[] {
  return regions
}

// Region ID bo‘yicha tumanlar
export function getDistrictsByRegionId(regionId: number): District[] {
  return districtsByRegionId.get(regionId) || []
}

// Tuman ID bo‘yicha qishloqlar
export function getVillagesByDistrictId(districtId: number): Village[] {
  return villagesByDistrictId.get(districtId) || []
}

// ID bo‘yicha topish (lookup)
export function findRegionById(id: number): Region | undefined {
  return regions.find(r => r.id === id)
}

export function findDistrictById(id: number): District | undefined {
  return districts.find(d => d.id === id)
}

export function findVillageById(id: number): Village | undefined {
  return villages.find(v => v.id === id)
}

// To‘liq tree ko‘rinish (viloyat → tuman → qishloq)
export function getRegionTree() {
  return regions.map(region => {
    const regionDistricts = getDistrictsByRegionId(region.id)
    return {
      ...region,
      districts: regionDistricts.map(district => ({
        ...district,
        villages: getVillagesByDistrictId(district.id)
      }))
    }
  })
}
