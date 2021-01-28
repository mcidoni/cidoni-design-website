/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss'

// Import React.
import React from 'react'
import ReactDOM from 'react-dom'

// Import our components.
import Home from 'components/Home'
import NotFound from 'components/NotFound'
import Portfolio from 'components/Portfolio'

// Import React Router things.
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


// Top-level classes on the body. Feel free to remove / change.
document.body.className = 'bg-black-80 fw4 white-80'

// Mount our app.
ReactDOM.render(
  <Router >
    <header className="header pv1 bg-black white-95 df justify-end f-2rem b pa4">
      <Link to="/" className="ml6 hp-link home">home</Link>
      <Link to-="/portfolio" className="ml16hp-link portfolio">portfolio</Link>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.querySelector('#app')
)
