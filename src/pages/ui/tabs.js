import React from 'react'
import { Card, Button, Tabs, message, Icon } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane;

export default class Tab extends React.Component {

    componentWillMount() {
        this.newTabIndex = 0;
        const panes = [
            {
                title: 'Tab1',
                content: 'Content of Tab Pane 1',
                key: '1'
            },
            {
                title: 'Tab2',
                content: 'Content of Tab Pane 2',
                key: '2'
            },
            {
                title: 'Tab3',
                content: 'Content of Tab Pane 3',
                key: '3',
                closable: false
            }
        ]
        this.setState({
            panes,
            activeKey: panes[0].key
        })
    }

    handleCallback = (key) => {
        message.info("Hi,您选择了页签：" + key)
    }

    onChange = (activeKey) => {
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render() {
        return (
            <div>
                <Card title="Tab页签" className="card card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带图的页签" className="card card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type="chrome" />Tab 3</span>} key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title="新增和关闭页签" className="card-wrap">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map(pane =>
                                <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                                    {pane.content}
                                </TabPane>
                            )
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}