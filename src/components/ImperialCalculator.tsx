function ImperialCalculator() {
    return (
      <div className='flex flex-col gap-6'>
        {/* Height Input */}
        <div>
          <label htmlFor='height' className='text-gray-600 text-sm'>
            Height sfdsf
          </label>
          <div className='mt-2 flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500'>
            <input
              type='number'
              id='height'
              className='w-full text-2xl text-gray-700 outline-none appearance-none no-spin-button'
              placeholder='0'
              min='0'
            />
            <span className='text-blue-600 font-bold text-2xl py-3 px-4'>cm</span>
          </div>
        </div>
  
        {/* Weight Input */}
        <div>
          <label htmlFor='weight' className='text-gray-600 text-sm'>
            Weightfsdfsdf
          </label>
          <div className='mt-2 flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:border-blue-500'>
            <input
              type='number'
              id='weight'
              className='w-full text-2xl text-gray-700 outline-none appearance-none no-spin-button'
              placeholder='0'
              min='0'
            />
            <span className='text-blue-600 font-bold text-2xl py-3 px-4'>kg</span>
          </div>
        </div>
  
        {/* BMI Info Box */}
        <div className='bg-blue-600 text-white p-8 rounded-2xl'>
          <h2 className='text-2xl font-semibold'>Welcome!</h2>
          <p className='text-sm mt-6'>
            Enter your height and weight and you'll see your BMI result here.
          </p>
        </div>
      </div>
    )
  }
  
  export default ImperialCalculator
  