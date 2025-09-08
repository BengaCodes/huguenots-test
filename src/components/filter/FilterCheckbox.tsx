type FilterCheckboxProps = {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const FilterCheckbox = ({ label, checked, onChange }: FilterCheckboxProps) => {
  return (
    <div>
      <input
        type='checkbox'
        id={label}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

export default FilterCheckbox
