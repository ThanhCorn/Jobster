import { IFormRow } from '../types/myTypes'

const FormRow = ({ type, name, value, handleChange, labelText }: IFormRow) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      {/* prettier-ignore */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  )
}

export default FormRow
