import React from 'react'
type Props = {}

const About = () => {
  return (
    <div className="h-screen ">
        <div className="w-full flex flex-col gap-32 h-5/6 justify-center items-center">
          <h1 className="max-w-xl leading-[3rem] text-white font-bold text-4xl text-center tracking-wide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor debitis eveniet eligendi perferendis, error blanditiis?</h1>
          <p className="max-w-[57rem] leading-tight text-md text-lg font-semibold text-white text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget laoreet magna. Quisque vitae sapien quis ligula fermentum sollicitudin. Phasellus nec feugiat nisl. Quisque vel arcu sit amet diam imperdiet consectetur. Mauris tempor nisi ante, nec eleifend metus vulputate quis. Aliquam a suscipit dolor, sollicitudin ornare nunc. Cras eget erat ut quam ullamcorper feugiat.</p>
        </div>
    </div>
  )
}

export default About