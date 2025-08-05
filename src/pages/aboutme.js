import React from 'react'
import { RecWrapper, RecBox, RecDes, RecRec } from '../styles/recStyle.js'
import Layout from '../components/layout'
import newnewme from '../assets/images/newnewme2.jpg'

const AboutMe = () => (
  <Layout>
  <RecWrapper>
    <RecRec>
        <img src={newnewme} height="250px" />
        
        <p style={{ color: '#395696'}}>
            <h1>About Me</h1>
            I’m studying Software Development but I’m most interested in combining business and technology.
            <br/>

            <br/>Growing up, I was into everything: arts, languages, music, books. Technology allows me to learn
            new things every day, keeping me stimulated and challenged.

        </p>
    </RecRec>
      <h3 style={{ color: '#395696'}}>More about me!</h3>
        <RecDes>
            <p style={{ color: '#395696'}}>I have lived and studied across four countries: Indonesia, Canada, Taiwan, and the UK! I moved from Indonesia to Canada at 16 for business studies, then to Taiwan for my undergraduate degree in foreign languages, and finally to the UK where I'm now pursuing software development. This international experience has shaped my adaptability and global perspective.</p>
            <p style={{ color: '#395696'}}>I love to learn languages! I speak English, Chinese, and Indonesian. I also speak conversational Korean. During my undergraduate studies in Taiwan, I learned Spanish, German, French, Vietnamese, and Thai but at a very basic level.</p>
            <p style={{ color: '#395696'}}>My diverse background used to worry me. At one point, I felt so lost about my direction. But it turns out that in tech, being endlessly curious is an advantage.</p>

            </RecDes>
        <hr/>
  </RecWrapper>
  </Layout>
)

export default AboutMe