# 📦 hududlar

O'zbekiston hududiy ma'lumotlar kutubxonasi: viloyatlar, tumanlar va qishloqlarni `TypeScript` yordamida osongina olish.

---

## ✨ Imkoniyatlar

- `getRegions()` – barcha viloyatlarni olish  
- `getDistrictsByRegionId(regionId)` – viloyatga tegishli tumanlar  
- `getVillagesByDistrictId(districtId)` – tumanga tegishli qishloqlar  
- `findRegionById(id)` – ID bo‘yicha viloyat  
- `findDistrictById(id)` – ID bo‘yicha tuman  
- `findVillageById(id)` – ID bo‘yicha qishloq  
- `getRegionTree()` – viloyat → tuman → qishloq daraxti shaklida

---

## 🚀 O‘rnatish

```bash
npm install hududlar
# yoki
yarn add hududlar
```

---

## 📦 Foydalanish

### 1. Barcha viloyatlarni olish

```ts
import { getRegions } from 'hududlar'

const regions = getRegions()
console.log(regions[0].name_uz) // "Andijon viloyati"
```

### 2. Viloyatga tegishli tumanlar

```ts
import { getDistrictsByRegionId } from 'hududlar'

const districts = getDistrictsByRegionId(2)
console.log(districts.map(d => d.name_uz))
```

### 3. Tumanga tegishli qishloqlar

```ts
import { getVillagesByDistrictId } from 'hududlar'

const villages = getVillagesByDistrictId(16)
console.log(villages.length) // 13
```

### 4. To‘liq daraxt ko‘rinishi (viloyat → tuman → qishloq)

```ts
import { getRegionTree } from 'hududlar'

const tree = getRegionTree()
console.log(tree[0].districts[0].villages)
```

### 5. ID bo‘yicha topish

```ts
import {
  findRegionById,
  findDistrictById,
  findVillageById
} from 'hududlar'

const region = findRegionById(2)
const district = findDistrictById(16)
const village = findVillageById(217)
```

---

## 🧱 Tiplar

```ts
interface Region {
  id: number
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
}

interface District {
  id: number
  region_id: number
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
}

interface Village {
  id: number
  district_id: number
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
}
```

---

## 💡 Advanced

`getRegionTree()` funksiyasi quyidagi tuzilmani qaytaradi:

```ts
{
  id: number
  name_uz: string
  ...
  districts: [
    {
      id: number
      name_uz: string
      ...
      villages: [
        {
          id: number
          name_uz: string
          ...
        }
      ]
    }
  ]
}
```

---

## 📄 Litsenziya

MIT © Akbar Iskandarov

---

## 🤝 Hissa qo‘shish

Pull request yoki issue ochish orqali takliflaringizni yuboring.  
O‘zbekiston hududiy ma'lumotlarini ochiq va sifatli qilishga birga hissa qo‘shamiz!
