import { ToastContainer } from 'react-toastify'
import GlobalStyle from './globalStyles'
import AppRoutes from './routes'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={950}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
