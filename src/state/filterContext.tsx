import React, {
  createContext,
  useState,
  useEffect,
  type ChangeEvent
} from 'react'
import { DATA, type FundsDataType } from '../data'

type FilterContextType = {
  funds: FundsDataType
  filterOptions: Set<string>
  handleFilterOptionsChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleClearFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [funds, setFunds] = useState<FundsDataType>(DATA)
  const [filterOptions, setFilterOptions] = useState<Set<string>>(new Set())

  const handleFilterOptionsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterOptions((options) => {
      const newOptions = new Set(options)
      if (e.target.checked) {
        newOptions.add(e.target.value)
      } else {
        newOptions.delete(e.target.value)
      }
      return newOptions
    })
  }

  const handleClearFilters = () => {
    setFilterOptions(new Set())
  }

  useEffect(() => {
    if (filterOptions.size === 0) {
      setFunds(DATA)
    }

    const regionFilters = new Set<string>()
    const domicileFilters = new Set<string>()

    filterOptions.forEach((option) => {
      const isRegion = DATA.some((fund) => fund.region === option)
      const isDomicile = DATA.some((fund) => fund.domicile === option)

      if (isRegion) {
        regionFilters.add(option)
      }
      if (isDomicile) {
        domicileFilters.add(option)
      }
    })

    const filteredFunds = DATA.filter((fund) => {
      const regionMatch =
        regionFilters.size === 0 || regionFilters.has(fund.region)

      const domicileMatch =
        domicileFilters.size === 0 || domicileFilters.has(fund.domicile)

      return regionMatch && domicileMatch
    })
    setFunds(filteredFunds)
  }, [filterOptions])

  const values = {
    funds,
    filterOptions,
    handleFilterOptionsChange,
    handleClearFilters
  }

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  )
}
export { FilterProvider }

export default FilterContext
