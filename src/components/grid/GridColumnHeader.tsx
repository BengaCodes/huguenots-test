import FeatherIcon from 'feather-icons-react'

const GridColumnHeader = () => {
  return (
    <div className='grid-table-header'>
      <div className='grid-table-header__content'>
        <div className='grid-table-header__fund-info'>
          Fund name / Benchmark
          <button className='grid-table-header__sort-btn'>
            <FeatherIcon icon='code' size={16} />
          </button>
        </div>
        <div className='grid-table-header__data-columns'>
          <div className='grid-table-header__column'>Domicile</div>
          <div className='grid-table-header__column'>
            Region
            <button className='grid-table-header__sort-btn'>
              <FeatherIcon icon='chevron-down' size={16} />
            </button>
          </div>
          <div className='grid-table-header__column'>Holdings</div>
          <div className='grid-table-header__column'>Fund size</div>
          <div className='grid-table-header__column'>Launch date</div>
          <div className='grid-table-header__action'></div>
        </div>
      </div>
    </div>
  )
}

export default GridColumnHeader
