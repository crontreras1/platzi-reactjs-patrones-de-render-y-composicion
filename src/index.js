import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App (props) {
  return (
    <h1>
      { props.greeting }, { props.nombre } ;)
    </h1>
  )
}

function withGreeting (greeting) {
  return function ComponenteDeVerdad (WrappedComponent) {
    return function WrappedComponentWithGreeting (props) {
      return (
        <React.Fragment>
          <WrappedComponent { ...props } greeting={ greeting }/>

          <p>Esto es un componente de verdad</p>
        </React.Fragment>
      )
    }
  }
}

const AppWithGreeting = withGreeting('Buenas las tengan')(App)

ReactDOM.render(
  <AppWithGreeting 
    // saludo={'Holi'}
    nombre={'Mundillo'}
  />,
  document.getElementById('root')
);
