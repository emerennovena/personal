import React from 'react'
import { RecWrapper, RecBox, RecDes, RecRec } from '../styles/recStyle.js'
import Layout from '../components/layout'
import me from '../assets/images/me.jpg'

const AboutMe = () => (
  <Layout>
  <RecWrapper>
    <RecRec>
        <img src={me} height="500px" />
        
        <p style={{ color: '#395696'}}>
            <h1>Why Business Technology?</h1>
            ata is everywhere. It is all around us, a rich minefield of information that
            can easily be transformed into useful insights and solutions to real world problems.<br/>

            <br/> As a child, I’ve always loved patterns and found puzzle solving to be an exhilaratingly
            challenging pastime. And that’s what data is to me, a complicated puzzle that I can't wait to solve!</p>
    </RecRec>
      <h3 style={{ color: '#395696'}}>Interests</h3>
        <RecDes><ul><li style={{ color: '#395696'}}>Classical Literature</li>
            <li style={{ color: '#395696'}}>Stardew Valley</li>
            </ul></RecDes>
        <hr/>
  </RecWrapper>
  </Layout>
)

export default AboutMe