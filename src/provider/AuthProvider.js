import React, { useEffect, useState} from "react";
import {decode} from './decode'
import './spinner.styles.scss';

export const Context = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  // const [cookie,setCookie] = useState(null)

  useEffect(() => {
    setCurrentUser(decode())
    setPending(false)
  }, [])


  if(pending){
    return(
         <>
          <div className='spin-contain'>
              <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
              </svg>
          </div>
          </>
    );
  }

  return (
    <Context.Provider
      value={[
        currentUser,setCurrentUser
      ]}
    >
      {children}
    </Context.Provider>
  );
};