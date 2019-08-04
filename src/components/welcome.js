import React from 'react'
import { Card } from 'antd';

// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch'

export default class welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [],
            result: ''
        }
    }

    // 获取数据
    fetchFn = () => {
        fetch('http://localhost:8081/welcome')
            .then((res) => {
                    console.log(res.status);
                    return res.json() 
                }
            )
            .then((data) => {
                    console.log("fetchFn data:",data);
                    this.setState({
                        lists:data.dataList
                    })
                }
            )
            .catch((e) => {
                console.log(e.message)
            })
    }

    fetchJava = () => {
        fetch('http://localhost:8081/get')
            .then((res) => {
                    console.log(res.status);
                    return res.json() 
                }
            )
            .then((data) => {
                    console.log("fetchJava data:",data);
                    this.setState({
                        result:data.data
                    })
                }
            )
            .catch((e) => {
                console.log(e.message)
            })
    }

    handleBack = () => {
        console.log("点击了内容！");
        this.fetchJava();
    }


    componentDidMount() {
        this.fetchFn()
    }

    render() {
        return (
            <Card title="后台接口数据" style={{ width: "800px", margin: "0 auto" }} className="animated zoomIn">
                {
                    this.state.lists.map((e) => {
                        return (
                            <div>
                                <p className="doclist">标题：{ e.title }</p>
                                <p className="doclist" onClick={this.handleBack}>内容：{ e.content }</p>
                            </div>
                           
                        )
                    })
                }
            </Card>
        )
    }
}

