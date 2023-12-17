import React from "react"
import { price } from "../../data/Data"

const PriceCard = () => {
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            {/* <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div> */}
            <h3>{item.plan}</h3>
            <h1>
              <span>
              {item.icon}
              </span>
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#F2F2F2" : "#F2F2F2",
                        color: change === "color" ? "#dc3848" : "#2372D9",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button
              className='btn5'
              style={{
                background: item.plan === "Standard" ? "#2372D9" : "#2372D9",
                color: item.plan === "Standard" ? "#fff" : "#fff",
              }}
            >
              Join As a {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default PriceCard
