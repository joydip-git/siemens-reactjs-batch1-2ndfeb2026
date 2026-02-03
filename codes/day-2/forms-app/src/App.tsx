import { useState } from "react"

const App = () => {
  console.log('rendered');
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <form onSubmit={
        (e) => {
          e.preventDefault()
          console.log(userName, password)
        }
      }>
        <div>
          <label htmlFor="txtUserName">User Name: &nbsp;</label>
          <input type="text" id="txtUserName" value={userName} onInput={
            (e) => {
              setUserName((e.target as HTMLInputElement).value)
            }
          } />
        </div>
        <div>
          <label htmlFor="txtPassword">Password: &nbsp;</label>
          <input type="password" id="txtPassword" value={password} onInput={
            (e) => {
              setPassword((e.target as HTMLInputElement).value)
            }
          } />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <br />
      {/* <a href="#">go</a> */}
    </div>
  )
}

export default App