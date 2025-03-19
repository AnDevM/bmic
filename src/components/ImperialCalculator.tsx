import { useState } from 'react'
import ValueInput from './ValuеInput'
import InitialMessage from './InitialMessage'

function ImperialCalculator () {
  const [ft, setFt] = useState<number | string>('')
  const [ink, setInk] = useState<number | string>('')
  const [st, setSt] = useState<number | string>('')
  const [lbs, setlbs] = useState<number | string>('')

  const bmi = calculateBMI(ft, ink, st, lbs)
  const weightCategory = bmi ? getWeightCategory(Number(bmi)) : ''

  const heightInInches = Number(ft) * 12 + Number(ink)

  const minWeightPounds = getMinWeight(heightInInches)
  const maxWeightPounds = getMaxWeight(heightInInches)

  const minWeight = convertToStonesAndPounds(minWeightPounds)
  const maxWeight = convertToStonesAndPounds(maxWeightPounds)
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-6 sm:flex-row sm:justify-between sm:items-end'>
        <ValueInput label='Height' unit='ft' value={ft} onChange={setFt} />
        <ValueInput label='&nbsp;' unit='in' value={ink} onChange={setInk} />
      </div>
      <div className='flex gap-6 sm:flex-row sm:justify-between sm:items-end'>
        <ValueInput label='Weight' unit='st' value={st} onChange={setSt} />
        <ValueInput label='&nbsp;' unit='lbs' value={lbs} onChange={setlbs} />
      </div>
      {Number(ft) > 0 && Number(st) > 0 ? (
        <div className='bg-blue-600 text-white p-8 rounded-2xl sm:rounded-l-3xl sm:rounded-r-[10rem]'>
          <h2 className='font-semibold mb-4'>Your BMI is...</h2>
          <p className='text-5xl font-bold'>{bmi}</p>
          <div>
            <p className='text-sm mt-6'>
              {`Your BMI suggests you’re a ${weightCategory} weight. Your ideal weight is between ${minWeight.stones}st ${minWeight.pounds}lbs - ${maxWeight.stones}st ${maxWeight.pounds}lbs.`}
            </p>
          </div>
        </div>
      ) : (
        <InitialMessage />
      )}
    </div>
  )
}

const getMinWeight = (heightInInches: number) =>
  (18.5 * heightInInches ** 2) / 703
const getMaxWeight = (heightInInches: number) =>
  (24.9 * heightInInches ** 2) / 703

const convertToStonesAndPounds = (weightInPounds: number) => {
  const stones = Math.floor(weightInPounds / 14)
  const pounds = Math.round(weightInPounds % 14)
  return { stones, pounds }
}

const calculateBMI = (
  ft: number | string,
  ink: number | string,
  st: number | string,
  lbs: number | string
) => {
  const feet = Number(ft) || 0
  const inches = Number(ink) || 0
  const stones = Number(st) || 0
  const pounds = Number(lbs) || 0

  const heightInInches = feet * 12 + inches

  const weightInPounds = stones * 14 + pounds
  if (heightInInches > 0 && weightInPounds > 0) {
    const bmi = (weightInPounds * 703) / heightInInches ** 2
    return bmi.toFixed(1)
  }

  return ''
}

const getWeightCategory = (bmi: number) => {
  if (bmi < 18.5) return 'underweight'
  if (bmi >= 18.5 && bmi < 24.9) return 'normal weight'
  if (bmi >= 25 && bmi < 29.9) return 'overweight'
  return 'obese'
}

export default ImperialCalculator
