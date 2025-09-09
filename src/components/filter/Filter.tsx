import FeatherIcon from 'feather-icons-react'
import { useFilterContext } from '../../state/useFilterContext'
import FilterCheckbox from './FilterCheckbox'
import { FILTERS } from '../../data'

const Filter = () => {
  const { filterOptions, handleClearFilters, handleFilterOptionsChange } =
    useFilterContext()

  return (
    <article className='filter__container'>
      <div className='filter__header'>
        <h2>Filter</h2>
        {filterOptions.size > 0 && (
          <button className='filter__header-btn' onClick={handleClearFilters}>
            <FeatherIcon icon='x' /> Clear all
          </button>
        )}
      </div>
      <div className='filter__options'>
        {Object.entries(FILTERS).map(([category, options]) => (
          <FilterCheckbox
            key={category}
            category={category}
            options={options}
            onChange={handleFilterOptionsChange}
            filterOptions={filterOptions}
          />
        ))}
      </div>
      <div className='filter__btn'>
        <button className='nav__search-btn'>
          Search By Managers <FeatherIcon icon='arrow-right' className='icon' />
        </button>
      </div>
    </article>
  )
}

export default Filter
