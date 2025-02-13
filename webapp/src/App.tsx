import { Layout } from './components/Layout'
import * as routes from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage'
import { NewIdeaPage } from './pages/NewIdeaPage'
import './styles/global.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
      
      <Routes>
        <Route element={<Layout/>}>
          <Route path={routes.getAllIdeasRoute()} element={<AllIdeasPage/>} />
          <Route path= {routes.getViewIdeaRoute(routes.viewIdeaRouteParams) } element={<ViewIdeaPage/>} />
          <Route path={routes.getNewIdeaRoute()} element={<NewIdeaPage/>}/>
        </Route>
      </Routes>


      </BrowserRouter>
    </TrpcProvider>
  )
}
