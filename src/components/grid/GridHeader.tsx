import FeatherIcon from 'feather-icons-react'

const GridHeader = () => {
  return (
    <div className='grid-header'>
      <div className='inputs'>
        <input
          type='text'
          placeholder='Search fund name, ISIN, benchmark, manager'
          className='inputs-text'
        />
        <button className='group-btn'>Group by region</button>
        <div className='btn-group'>
          <button>
            {' '}
            <FeatherIcon icon='grid' className='icon' /> Grid view
          </button>
          <button>
            List view <FeatherIcon icon='menu' className='icon' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GridHeader
