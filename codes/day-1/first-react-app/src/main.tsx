import { createRoot, type Root } from "react-dom/client"
import App from "./App";
//import { StrictMode } from "react";
import './index.css'

const rootEle = document.getElementById('root') as HTMLElement
const rootReactElment: Root = createRoot(rootEle)
// const appDesign = App()
// rootReactElment.render(appDesign)
// rootReactElment.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
// setTimeout(
//   () => {
//     rootReactElment.render(<App />)
//   },
//   3000
// )
rootReactElment.render(<App />)
// const appCompo = new App({})
// const appDesign = appCompo.render()
// rootReactElment.render(appDesign)