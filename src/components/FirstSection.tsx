import hero from '/src/assets/images/image-man-eating.webp'
import eat from '/src/assets/images/icon-eating.svg'
import exercise from '/src/assets/images/icon-exercise.svg'
import sleep from '/src/assets/images/icon-sleep.svg'
import line from '/src/assets/images/pattern-curved-line-left.svg'

import GoodHabits from './GoodHabits'

function FirstSection () {
  return (
    <section className='mt-[500px] mb-20 md:mt-96 lg:mt-12'>
      <div className='md:flex md:mb-24 lg:justify-between'>
        <img
          src={hero}
          alt='hero'
          className='md:w-1/2 h-auto object-cover object-center md:-ml-8 lg:ml-0'
        />
        <article className='mt-12 px-6 mb-14 md:w-1/2 md:px-12 max-w-xl'>
          <img
            src={line}
            alt='line'
            className='-mt-24 mb-12 ml-auto mr-16 hidden lg:block'
          />
          <h3 className='text-4xl font-bold text-gray-800 mb-8 lg:text-5xl lg:mb-10'>
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
<div className='lg:flex'>
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
</div>
    </section>
  )
}

export default FirstSection
