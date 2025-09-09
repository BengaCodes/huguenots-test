import { type FundData } from '../../data'
import GridCards from './GridCards'
import GridHeader from './GridHeader'
import GridColumnHeader from './GridColumnHeader'
import { useFilterContext } from '../../state/useFilterContext'

const Grid = () => {
  const { funds } = useFilterContext()

  return (
    <>
      <GridHeader />
      <GridColumnHeader />
      {funds.map((data: FundData) => {
        return <GridCards key={data.fundName} {...data} />
      })}
    </>
  )
}

export default Grid
