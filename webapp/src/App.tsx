import { getAllIdeasRoute, getViewIdeaRoute, viewIdeaRouteParams } from './lib/routes'
import { TrpcProvider } from './lib/trpc'
import { AllIdeasPage } from './pages/AllIdeasPage'
import { ViewIdeaPage } from './pages/ViewIdeaPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
      
      <Routes>
        <Route path={getAllIdeasRoute()} element={<AllIdeasPage/>} />
        <Route path= {getViewIdeaRoute(viewIdeaRouteParams) } element={<ViewIdeaPage/>} />
      </Routes>


      </BrowserRouter>
    </TrpcProvider>
  )
}
