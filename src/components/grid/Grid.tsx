import { DATA } from '../../data'
import GridCards from './GridCards'
import GridHeader from './GridHeader'
import GridColumnHeader from './GridColumnHeader'

const Grid = () => {
  return (
    <>
      <GridHeader />
      <GridColumnHeader />
      {DATA.map((data) => {
        return <GridCards key={data.fundName} {...data} />
      })}
    </>
  )
}

export default Grid
