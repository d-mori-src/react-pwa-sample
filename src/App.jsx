import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/style.css';
import { Index } from './pages/index';

// head情報
const title = 'KissPRESS PWA Samle';
const description = 'This is KissPRESS PWA App Samle.';
document.title = title;
const headData = document.head.children;
for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}
// ここまでhead情報

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ Index } />
      </Switch>
    </Router>
  );
}

export default App;
