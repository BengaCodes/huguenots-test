import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'

interface GridCardProps {
  fundName: string
  benchmark: string
  domicile: string
  region: string
  holdings: number
  fundSize: string
  launchDate: string
}

const GridCards = ({
  fundName,
  benchmark,
  domicile,
  region,
  holdings,
  fundSize,
  launchDate
}: GridCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`grid-card ${isHovered ? 'grid-card--hovered' : ''}`}
    >
      <div className='grid-card__content'>
        <div className='grid-card__fund-info'>
          <h3 className='grid-card__fund-name'>{fundName}</h3>
          <p className='grid-card__benchmark'>{benchmark}</p>
        </div>
        <div className='grid-card__data-columns'>
          <div className='grid-card__domicile'>{domicile}</div>
          <div className='grid-card__region'>{region}</div>
          <div className='grid-card__holdings'>{holdings}</div>
          <div className='grid-card__fund-size'>{fundSize}</div>
          <div className='grid-card__launch-date'>{launchDate}</div>
          <div className='grid-card__action'>
            <button className='grid-card__action-btn'>
              <FeatherIcon
                icon='arrow-right'
                size={16}
                className='icon-outline'
              />
            </button>
          </div>
        </div>
      </div>
      {isHovered && (
        <div className='grid-card__dropdown'>
          <button className='grid-card__dropdown-btn'>
            <FeatherIcon icon='arrow-down' size={8} className='icon' />
          </button>
        </div>
      )}
    </article>
  )
}

export default GridCards
