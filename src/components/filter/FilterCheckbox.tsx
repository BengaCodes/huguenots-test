import type { ChangeEvent } from 'react'

type FilterCheckboxProps = {
  filterOptions: Set<string>
  category: string
  options: { label: string; value: string }[]
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FilterCheckbox = ({
  onChange,
  category,
  options,
  filterOptions
}: FilterCheckboxProps) => {
  return (
    <div className='filter__category'>
      <h3 className='filter__category-title'>{category}</h3>
      <ul className='filter__options-list'>
        {options.map((option) => (
          <li key={option.label} className='filter__option-item'>
            <label>
              <input
                type='checkbox'
                value={option.value}
                onChange={onChange}
                checked={filterOptions.has(option.value)}
              />
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FilterCheckbox
