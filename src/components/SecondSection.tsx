import gender from '/src/assets/images/icon-gender.svg'
import age from '/src/assets/images/icon-age.svg'
import muscle from '/src/assets/images/icon-muscle.svg'
import pregnancy from '/src/assets/images/icon-pregnancy.svg'
import race from '/src/assets/images/icon-race.svg'

import Conditional from './Conditional'
function SecondSection () {
  return (
    <section className='my-20 mx-5 md:mx-10'>
      <article className='text-center pb-14'>
        <h3 className='text-4xl font-bold text-gray-800 mb-8'>
          Limitations of BMI
        </h3>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </article>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-3 md:grid-flow-row md:auto-rows-auto'>
        <Conditional
          icon={gender}
          header='Gender'
          text="The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI."
          iconAlt='Icon gender'
        />
        <Conditional
          icon={age}
          header='Age'
          text='In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.'
          iconAlt='Icon age'
        />
        <Conditional
          icon={muscle}
          header='Muscle'
          text="BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat."
          iconAlt='Icon muscle'
        />
        <Conditional
          icon={pregnancy}
          header='Pregnancy'
          text='Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.'
          iconAlt='Icon pregnancy'
        />
<div className='md:col-span-2 md:w-1/2 md:m-auto'>
          <Conditional
            icon={race}
            header='Race'
            text='Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.'
            iconAlt='Icon race'
          />
</div>
      </div>
    </section>
  )
}

export default SecondSection
