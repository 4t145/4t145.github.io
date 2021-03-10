import './App.css';
import { Layout, Affix, Button  } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Navi } from './components/Navi';
import 'antd/dist/antd.css'; 

const { Header, Footer, Sider, Content } = Layout;
const menu = [
    {
        name: '机器人历史',
        files: [
            '机器人历史', 
        ]
    },
    {
        name: '特殊函数',
        files: [
            '贝塞尔函数', 
            '厄米多项式',
            '二阶常线性微分方程',
            '幂和数列的算法',
            '一阶微分方程',
            '一些多项式'
        ]
    },
    {
        name: '力学',
        files: [
            '李括号与李导数',
            '最速降线问题'
        ],
    },
    {
        name: '流体力学',
        files: [
            '流体力学',
            '可压缩流动',
            '粘性流体',
            '量纲分析与相似原理'
        ],
    },
    {
        name: '热力学',
        files: [
            '热力过程'
        ],
    },
    {
        name: '系统',
        files: [
            '二维傅里叶变换'
        ],
    },
    {
        name: '优化方法',
        files: [
            '线性规划的对偶问题'
        ],
    },
    {
        name: '机电传动',
        files: [
            '机电传动'
        ],
    },
]
function App() {
    return (
        <div className="App" style={{height:"100%"}}>
            <Layout style={{minHeight:"100%", height:"100%"}}>
                <Navi menu={menu} ></Navi>
                <Footer>
                    <GithubOutlined/>
                    <a href="https://github.com/4t145">@4t145</a>
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
