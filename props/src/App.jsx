import React from 'react'
import Card from './card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Shree' age={18} img='https://thumbs.dreamstime.com/b/ladybug-chamomile-flower-defocus-background-ladybird-creeps-blooming-plant-flowers-garden-258251448.jpg' />
      <Card user='Honey' age={19} img='https://thumbs.dreamstime.com/b/two-ladybugs-orange-spring-flower-flight-insect-artistic-macro-image-concept-spring-summer-two-ladybugs-orange-125140826.jpg' />
      <Card user='Aman' age={19} img='https://thumbs.dreamstime.com/b/close-up-white-daisy-blooms-field-setting-sun-close-up-white-daisy-blooms-field-focus-316674507.jpg' />
    </div>
  )
}

export default App
