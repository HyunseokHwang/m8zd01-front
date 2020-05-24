import React ,{Component} from 'react';
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import m8zd010001Container from './pages/m8zd010001/container/m8zd010001Container'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{padding:20, border:'5px solid gray'}}>
          <Link to="/bdsbds">홈</Link><br/>
          <Link to="/photo">사진</Link><br/>
          <Link to="/m8zd010001">m8zd010001</Link><br/>
          <Switch>
            <Route exact path="/bdsbds" component={Home}/>
            <Route path="/photo" component={Photo}/>
            <Route path="/m8zd010001" component={m8zd010001Container}/>
            <Route path="/m8zd010002" component={m8zd010001Container}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
function Home({match}){
  return <h2>여기는 홈페이지입니다.</h2>
}
function Photo({match}) {
  return <h2>여기서 사진을 감상하세요.</h2>
}
export default App;