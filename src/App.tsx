import image from './react.png'
import logo from './react.svg'

const App = () => {
  return (
    <>
      <h1>Scaffold-react-ts</h1>
      <img src={image} width="400" />
      <h2>process.env.NODE_ENV: {process.env.NODE_ENV}</h2>
      <h2>process.env.myEnv: {process.env.myEnv}</h2>
      <img src={logo} width="200" />
    </>
  )
}

export default App
