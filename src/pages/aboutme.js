import React from 'react'
import rec from '../data/AboutMe'
import { RecWrapper, RecBox, RecDes, RecRec } from '../styles/recStyle.js'
import Layout from '../components/layout'
import me from '../assets/images/me.jpg'

const AboutMe = () => (
  <Layout>
  <RecWrapper>
    <RecRec>
        <img src={me} height="500px" />
        
        <p><h1>Why Data?</h1>Data is everywhere. It is all around us, a rich minefield of information that can easily be transformed into useful insights and solutions to real world problems.<br/> <br/> As a child, I’ve always loved patterns and found puzzle solving to be an exhilaratingly challenging pastime. And that’s what data is to me, a complicated puzzle that I can't wait to solve!</p>
    </RecRec>
      <h3>Interests</h3>
        <RecDes><ul><li>Volunteering</li><li>Cooking</li><li>Rockclimbing</li></ul></RecDes>
        <hr/>
  </RecWrapper>
  </Layout>
)

export default AboutMe