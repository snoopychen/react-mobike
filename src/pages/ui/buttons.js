import React from 'react'
import { Card, Button, Radio, Icon } from 'antd'
import './ui.less'

const ButtonGroup = Button.Group;

export default class Buttons extends React.Component {
    state = {
        loading: true,
        size: 'large'
    }

    handleCloseLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    handleSizeChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        const size = this.state.size;
        return (
            <div>
                <Card title="基础按钮" className="card card-wrap">
                    <Button type="primary">FrontEnd</Button>
                    <Button>FrontEnd</Button>
                    <Button type="dashed">FrontEnd</Button>
                    <Button type="danger">FrontEnd</Button>
                    <Button disabled>FrontEnd</Button>
                </Card>
                <Card title="图形按钮" className="card card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>{this.state.loading ? '关闭' : '开启'}</Button>
                </Card>
                <Card title="按钮组" className="card">
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" /> 返回
                        </Button>
                        <Button type="primary">
                            前进<Icon type="right" />
                        </Button>
                    </ButtonGroup>
                </Card>
                <Card title="按钮尺寸" className="card card-wrap">
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio value="large">Large</Radio>
                        <Radio value="default">Default</Radio>
                        <Radio value="small">Small</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>FrontEnd</Button>
                    <Button size={size}>FrontEnd</Button>
                    <Button type="dashed" size={size}>FrontEnd</Button>
                    <Button type="danger" size={size}>FrontEnd</Button>
                </Card>
            </div>
        )
    }
}