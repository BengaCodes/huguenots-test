type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
}

const Divider = ({ orientation = 'horizontal' }: DividerProps) => {
  return <div className={`divider divider--${orientation}`}></div>
}

export default Divider
