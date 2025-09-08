import FeatherIcon from 'feather-icons-react'

const FILTERS = {
  region: [
    'UK Equities',
    'Global Equities',
    'European Equities',
    'Emerging Markets Equities',
    'Asian Equities'
  ],
  domicile: ['Dublin (Irish ICAV)', 'London (UK OEIC)']
}

const Filter = () => {
  return (
    <article className='filter__container'>
      <div className='filter__header'>
        <h2>Filter</h2>
        <button className='filter__header-btn'>
          <FeatherIcon icon='x' /> <span>Clear all</span>
        </button>
      </div>
      <div className='filter__options'>
        {Object.entries(FILTERS).map(([category, options]) => (
          <div key={category} className='filter__category'>
            <h3 className='filter__category-title'>{category}</h3>
            <ul className='filter__options-list'>
              {options.map((option) => (
                <li key={option} className='filter__option-item'>
                  <label>
                    <input type='checkbox' />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
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
