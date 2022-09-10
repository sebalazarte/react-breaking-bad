import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeScreen/>} />
        <Route path='/detail/:id' element={<DetailScreen/>} />
    </Routes>
  )
}
