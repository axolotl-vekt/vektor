import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDom from 'react-dom/client';
import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NewEntry from './components/NewEntry';
import Games from './components/Games';
import MemoryGame from './components/MemoryGame';

//declare queryClient w/ infinity staleTime and cacheTime to store the cache without refetching
const queryClient = new QueryClient( {
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    // added BrowserRouter to make a context, and be able to use useParams
    <BrowserRouter>
    {/* <QueryClientProvider client={queryClient}> */}
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/homepage' element={<Homepage />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/games' element={<Games />}/>
        <Route exact path='/memoryGame' element={<MemoryGame />} />
      </Routes>
    {/* </QueryClientProvider> */}
    </BrowserRouter>
  );
}


export default App;
