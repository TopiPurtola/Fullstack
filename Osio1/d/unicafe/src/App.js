import { useState } from 'react'

const Button = (props) => {
  return(
      <button onClick={props.handleclick}>
        {props.text}
      </button>
  )
}

const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}

const Statistics = ({good, all, sum, neutral, bad}) => {
  
  const updateAverage = () => {
    const average = sum / all
    return average
  }

  const updatePercentage = () => {
    const newPercentage = (good / all) * 100
      return newPercentage
  }
  if(all > 0){  //Jos arviointeja on ainakin 1 niin palautetaan kaikki tilastot
    return(
      <div>
      <h2>Arviot</h2>
      <table>
        <tbody>
        <StatisticLine text="Täydellinen" value ={good} />
        <StatisticLine text="Ihan ok" value ={neutral} />
        <StatisticLine text="Hyi" value ={bad} />
        <StatisticLine text="Yhteensä" value ={all} />
        <StatisticLine text="Keskiarvo" value ={updateAverage()} />
        <StatisticLine text="Prosentit" value ={updatePercentage()+"%"} />
        </tbody> 
      </table>
        
      
      

      

    </div>
  )
  }
  else{
    return(
      <div>
        Palautetta ei ole vielä annettu
      </div>
    )
  }
  
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [sum, setSum] = useState(0)
    
  const goodclick = () => {
    const updatedGood = good + 1
    const updatedAll = all + 1
    const updatedSum = sum + 1
    setGood(updatedGood)
    setAll(updatedAll)
    setSum(updatedSum)
    
    console.log("Täydellinen: " ,updatedGood)
    console.log("Yhteensä: " ,updatedAll)
  }

  const neutralClick = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = all + 1

    setNeutral(updatedNeutral)
    setAll(updatedAll)

    console.log("Ihan ok: ", updatedNeutral)
    console.log("Yhteensä: " ,updatedAll)
  }

  const badClick = () => {
    const updatedBad = bad + 1
    const updatedAll = all + 1
    const updatedSum = sum - 1

    setBad(updatedBad)
    setAll(updatedAll)
    setSum(updatedSum)


    console.log("Hyi: ", updatedBad)
    console.log("Yhteensä: " ,updatedAll)
    
  }

  return (
    <div>
      <h1>Palaute</h1>
      <p>
      <Button handleclick = {goodclick} text = "Täydellinen"/>
      <Button handleclick = {neutralClick} text = "Ihan ok"/>
      <Button handleclick = {badClick} text = "Hyi..."/>
    
      </p>
      
      <Statistics
        good = {good}
        neutral ={neutral}
        bad = {bad}
        all = {all}
        sum = {sum}>
        </Statistics>
    </div>
  )
  }
export default App
