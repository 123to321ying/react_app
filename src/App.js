import { Component, React } from "react"
import { Tabs, InputItem } from 'antd-mobile'
import mockData from './mockData/info'

class App extends Component {

  constructor(props) {
    super(props);
    this.tabList = [
      { title: 'Map', sub: '1' },
      { title: 'List', sub: '2' },
    ];
    this.state = {
      CTitle: '',
      CText: ''
    }
    this.defaultData = {
      textArr: mockData['text']
    }
  }

  titleChange = (e) => {  
    this.setState({CTitle: e}) 
    this.tabList[0].title = e
  }

  initData = () => {
    return this.defaultData.textArr.map((el, index) => {
      return (<div>{this.defaultData.textArr[index].name}</div>)
    })
  }

  render() {
    return (
      <div>
        <InputItem
            clear
            placeholder="auto focus"
            ref={el => this.autoFocusInst = el}
          >标题</InputItem>
          <InputItem
            clear
            placeholder="click the button below to focus"
            ref={el => this.inputRef = el}
          >标题</InputItem>

        <Tabs tabs={this.tabList}
          initialPage={0}
          tabBarPosition="top"
        >
          {this.initData()}
        </Tabs>
      </div>
    );
  }
}

export default App;
