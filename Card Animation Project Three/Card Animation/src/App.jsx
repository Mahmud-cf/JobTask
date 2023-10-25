import { useState } from "react";
import "./App.css";
import BackgroundAnimation from "./Components/BackgroundAnimation";
import Card from "./Components/Card";
import card_1_img from './assets/card1.svg'
import card_2_img from './assets/card2.svg'
import card_3_img from './assets/card3.svg'

const cardInfo = [
  {
    id:1,
    title: '🚀 Use our readymade solutions',
    details: 'No need to waste your time using other complex and expensive solutions. Use our readymade API that will just do the job for you. Completely free to self host without any pain.',
    img: card_1_img,
    btnText: 'Introducing ScraperLix'
  },
  {
    id:2,
    title: '⚡️Learn to build with us',
    details: 'Wanna know how to do it? Join our live classes, workshops and courses. We will do it together, step by step. You just have to spend some quality time with us.',
    img: card_2_img,
    btnText: 'Check out Code Eating Ants'
  },
  {
    id:3,
    title: '👩‍🎨 Let us build for you',
    details: "Don't have time to use readymade solutions or even learn it yourself? We got you covered! Tell us what you need and we will work together on the right solution for you.",
    img: card_3_img,
    btnText: 'Visit SoftwareSheba'
  },
]

function App() {
  return (
    <>
      <div className="full-page-wrapper">
        <BackgroundAnimation />
        <div className="content-wrapper">
          <div className="main-container">
          <div className="title">
            <h2>Data Automators</h2>
          </div>
          <div className="card-wrapper">
            {
              cardInfo.map((item) => {
                return (
                  <Card item = {item} key={item.id} />
                )
              })
            }
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
