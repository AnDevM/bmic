import { useState } from 'react'
import ValueInput from './ValuеInput'
import InitialMessage from './InitialMessage'

function MetricCalculator () {
  const [height, setHeight] = useState<number | string>('')
  const [weight, setWeight] = useState<number | string>('')

  const bmi = calculateBMI(height, weight)
  const weightCategory = bmi ? getWeightCategory(Number(bmi)) : ''
  const minWeight = getMinWeight(Number(height))
  const maxWeight = getMaxWeight(Number(height))

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6 sm:flex-row'>
        <ValueInput
          label='Height'
          unit='cm'
          value={height}
          onChange={setHeight}
        />
        <ValueInput
          label='Weight'
          unit='kg'
          value={weight}
          onChange={setWeight}
        />
      </div>
      {Number(height) > 0 && Number(weight) > 0 ? (
        <div className='bg-blue-600 text-white p-8 rounded-2xl sm:rounded-l-3xl sm:rounded-r-[10rem]'>
          <h2 className='font-semibold mb-4'>Your BMI is...</h2>
          <p className='text-5xl font-bold'>{bmi}</p>
          <div>
            <p className='text-sm mt-6'>
              {`Your BMI suggests you’re a ${weightCategory} weight. Your ideal weight is between ${minWeight} - ${maxWeight}.`}
            </p>
          </div>
        </div>
      ) : (
        <InitialMessage />
      )}
    </div>
  )
}

const getMinWeight = (height: number) => (18.5 * (height / 100) ** 2).toFixed(1)
const getMaxWeight = (height: number) => (24.9 * (height / 100) ** 2).toFixed(1)

const getWeightCategory = (bmi: number) => {
  if (bmi < 18.5) return 'underweight'
  if (bmi >= 18.5 && bmi < 24.9) return 'normal weight'
  if (bmi >= 25 && bmi < 29.9) return 'overweight'
  return 'obese'
}

const calculateBMI = (height: number | string, weight: number | string) => {
  const h = Number(height)
  const w = Number(weight)

  if (h > 0 && w > 0) {
    const heightInMeters = h / 100
    const bmi = w / (heightInMeters * heightInMeters)
    return bmi.toFixed(1)
  }
  return ''
}

export default MetricCalculator
