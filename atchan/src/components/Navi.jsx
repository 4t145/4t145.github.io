import { Menu } from 'antd';
import {PlusSquareOutlined, FileMarkdownOutlined} from '@ant-design/icons';
import React from 'react';
import { Layout } from 'antd';
import ReactDOM from 'react-dom';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

class Navi extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page: '力学/最速降线问题',
            v: (
                <ViewPort 
                src={'https://4t145.github.io/mkdown/力学/最速降线问题.html'}
                >
                </ViewPort>
            )
        };
    }

    handleClick = e => {
        const page = e.keyPath[1]+'/'+e.keyPath[0]
        this.setState({
            page: page,
            v: (
                <ViewPort 
                src={'https://4t145.github.io/mkdown/'+page+'.html'}
                >
                </ViewPort>
            )
        });
        console.log(this.state.page);
        console.log('click ', e);
    };

    render() {
        let submenus = [];
        let global_item_index = 1;
        let global_dir_index = 1;
        for (let index = 0; index < this.props.menu.length; index++) {
            const dir = this.props.menu[index];
            const key = dir.name;
            let items = [];
            for (let item_index = 0; item_index < dir.files.length; item_index++) {
                const page = dir.files[item_index];
                items.push(<Menu.Item key={page} icon={<FileMarkdownOutlined/>}>
                    {page}
                </Menu.Item>);
                global_item_index+=1;
            }
            submenus.push(
                <SubMenu key={key} icon={<PlusSquareOutlined />} title={dir.name}>
                    {items}
                </SubMenu>
            );
            global_dir_index+=1;
        }
        return (
            <Layout>
                <Sider style={{width:"200px"}}>
                    <Menu
                        onClick={this.handleClick}
                        style={{minHeight:"100%", height:"100%"}}
                        mode="inline"
                    >
                        {submenus}
                    </Menu>
                </Sider>
                {this.state.v}
            </Layout>
            
        );
    }
}

class ViewPort extends React.Component {
    render() {
        return (
            <Content>
                <iframe src={this.props.src}
                    style = {{border:0}}
                    width = "100%"
                    height = "100%"
                ></iframe>
            </Content>
        )
    }
}
export {
    Navi
}