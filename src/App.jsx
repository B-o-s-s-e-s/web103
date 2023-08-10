import './App.css'
import { Outlet, useRoutes } from 'react-router';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import NavigationBar from './components/NavigationBar';

function Pages() {
  return (
    <>
      <NavigationBar/>
      <Outlet/>
    </>
  );
}

function App() {
  // Step 3: Set Up Routes
  const element = useRoutes([
    { 
      path: '/',
      element: <Pages/>,
      children: [
        { path: '/', element: <ShowCreators/> },
        { path: '/creatorview/:id', element: <ViewCreator/> },
        { path: '/creatoredit/:id', element: <EditCreator/> },
        { path: '/creatoradd', element: <AddCreator/> },
      ]
    }
  ]);
  
  return element;
}

export default App;
