import { useState } from 'react'
import MeasurementSwitcher from './MeasurementSwitcher'
import MetricCalculator from './MetricCalculator'
import ImperialCalculator from './ImperialCalculator'

function Calculator () {
  const [selectedUnit, setSelectedUnit] = useState('metric')

  return (
    <div className='absolute translate-y-8 bg-white w-[calc(100%-3rem)] p-6 shadow-2xl shadow-gray-300 rounded-2xl text-start lg:w-[600px] lg:p-8 lg:right-0 lg:top-0 lg:translate-y-1/4 lg:translate-x-1/2'>
      <h2 className='text-2xl font-bold tracking-tighter mb-6 text-gray-800'>
        Enter your details below
      </h2>

      <div className='flex justify-between mb-6'>
        <MeasurementSwitcher
          unit='metric'
          selectedUnit={selectedUnit}
          onChange={setSelectedUnit}
        />
        <MeasurementSwitcher
          unit='imperial'
          selectedUnit={selectedUnit}
          onChange={setSelectedUnit}
        />
      </div>
            {selectedUnit === 'metric' ? <MetricCalculator /> : <ImperialCalculator />}
    </div>
  )
}

export default Calculator
