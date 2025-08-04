import React from 'react'
import { RecWrapper, RecBox, RecDes, RecRec } from '../styles/recStyle.js'
import Layout from '../components/layout'
import newme from '../assets/images/newme.jpg'

const AboutMe = () => (
  <Layout>
  <RecWrapper>
    <RecRec>
        <img src={newme} height="500px" />
        
        <p style={{ color: '#395696'}}>
            <h1>Why Business Technology?</h1>
            I’m studying Software Development but I’m most interested in combining business and technology.
            I enjoy using tools like CRMs and automation platforms to solve real business problems efficiently.<br/>

            <br/>As a child, I was always into everything: arts, languages, music. Technology allows me to learn
            new things every day, keeping me stimulated and challenged.
        </p>
    </RecRec>
      <h3 style={{ color: '#395696'}}>Interests</h3>
        <RecDes><ul><li style={{ color: '#395696'}}>Classical Literature</li>
            <li style={{ color: '#395696'}}>Language Learning</li>
            <li style={{ color: '#395696'}}>Stardew Valley</li>
            </ul></RecDes>
        <hr/>
  </RecWrapper>
  </Layout>
)

export default AboutMe