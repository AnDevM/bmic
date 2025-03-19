  interface ValueInputProps {
    label: string
    unit: string
    value: number | string
    onChange: (newValue: number | string) => void
  }
  
  function ValueInput({ label, unit, value, onChange }: ValueInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      onChange(newValue === '' ? '' : Number(newValue));
    };

    return (
        <div>
        <label htmlFor={label} className='text-gray-600 text-sm'>
          {label}
        </label>
        <div className='mt-2 flex items-center border border-gray-300 rounded-lg focus-within:border-blue-500 hover:border-blue-500 w-full'>
          <input
            type='number'
            id={label}
            className='w-full text-2xl text-gray-800 outline-none appearance-none no-spin-button pl-2 sm:px-6 py-5 cursor-pointer'
            placeholder='0'
            min='0'
            value={value}
            onChange={handleChange}
          />
          <span className='text-blue-600 font-bold text-2xl px-2 py-3 sm:px-4'>{unit}</span>
        </div>
      </div>
    )
  }

  export default ValueInput