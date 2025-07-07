export interface Region {
  id: number
  soato_id: number
  name_uz: string | null
  name_oz: string | null
  name_ru: string | null
}

export interface District {
  id: number
  region_id: number
  soato_id: number 
  name_uz: string | null
  name_oz: string | null
  name_ru: string | null
}

export interface Village {
  id: number
  district_id: number
  soato_id: number
  name_uz: string | null
  name_oz: string | null
  name_ru: string | null
}
