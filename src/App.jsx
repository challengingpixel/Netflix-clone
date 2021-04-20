import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {ThemeProvider} from '@material-ui/core'
import { theme } from './styles/Theme';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import LoginScreen from './screens/LoginScreen';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        // logged out
        dispatch(logout())
      }
    })

    return unsubscribe
  },[])
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundColor:'#111'}}>
        <Router>
          {!user ? (
            <LoginScreen/>
          ): (
            <Switch>
              <Route path='/profile'>
                <ProfileScreen/>
              </Route>
              <Route path="/">
                <HomeScreen/>
              </Route>
            </Switch>
          )}

        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
