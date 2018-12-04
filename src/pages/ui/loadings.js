import React from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.less'

export default class Loadings extends React.Component {
    render() {
        const icon = <Icon type="plus" style={{ fontSize: 24 }} />
        const iconLoading = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title='Spin用法' className="card card-wrap">
                    <Spin size="small" />
                    <Spin style={{ margin: '0 15px' }} />
                    <Spin size="large" style={{ marginRight: '15px' }} />
                    <Spin indicator={icon} spinning={true} />
                </Card>
                <Card title="内容遮罩">
                    <Alert
                        message="React"
                        description="欢迎学习React"
                        type="info"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="warning"
                            style={{ margin: '10px 0' }}
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="warning"
                            style={{ marginBottom: 10 }}
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎学习React"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}