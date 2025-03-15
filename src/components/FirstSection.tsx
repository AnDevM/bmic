import hero from '/src/assets/images/image-man-eating.webp'
import eat from '/src/assets/images/icon-eating.svg'
import exercise from '/src/assets/images/icon-exercise.svg'
import sleep from '/src/assets/images/icon-sleep.svg'

import GoodHabits from './GoodHabits'

function FirstSection () {
  return (
    <section className='mt-[500px] mb-20 md:mt-80'>
      <div className='md:flex md:mb-24'>
        <img src={hero} alt='hero' className='md:w-1/2 h-auto object-cover object-center md:-ml-8' />
        <article className='mt-12 px-6 mb-14 md:w-1/2 md:px-12'>
          <h3 className='text-4xl font-bold text-gray-800 mb-8'>
            What your BMI result means
          </h3>
          <p>
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </article>
      </div>
      <GoodHabits
        icon={eat}
        header='Healthy eating'
        text='Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.'
        alt='Food icon'
      />
      <GoodHabits
        icon={exercise}
        header='Regular exercise'
        text='Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.'
        alt='Exercise icon'
      />
      <GoodHabits
        icon={sleep}
        header='Adequate sleep'
        text='Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.'
        alt='Sleep icon'
        last='pb-14'
      />
    </section>
  )
}

export default FirstSection
