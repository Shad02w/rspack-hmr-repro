import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function memo(displayName, fn) {
    const m = React.memo(fn)
    m.displayName = displayName
    return m
}

const UnwrappedApp = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Rspack + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Rspack and React logos to learn more</p>
        </div>
    )
}

// memo() make the whole app reload when updating in UnwrappedApp
export const App = memo('App', UnwrappedApp)

// Following Component work as expected
// export const App = React.memo(UnwrappedApp)
// App.displayName = 'App'
