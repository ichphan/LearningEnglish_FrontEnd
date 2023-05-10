
import { Layout, Row, Col, Menu, Select, Typography,Input,Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import './Navbar.css';
const { Title, Link,Text } = Typography;

const { Header } = Layout;
const { Search } = Input;
const item : MenuProps['items']=[
    {
        label:(
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Course
            </a>
          ),
          key:'COURSE'
    }
]

function Navbar() {
    return (
        <Header className='clearfix'>
            <Row aria-flowto='nowrap' style={{flexFlow:"nowrap"}}>
                <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4}>
                    <Title>
                        <Link href="/">
                            <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" preview={false} height={50}></Image><Text>Ant Design</Text>
                        </Link>
                    </Title>
                </Col>
                <Col xs={0} sm={0} md={18} lg={18} xl={19} xxl={20} className='nav-box'>
                    <Search placeholder="Type Keyword" prefix={true} style={{ width: 200,border: 0 }} />
                    <Menu mode='horizontal' items={item} >
                    </Menu>
                </Col>
            </Row>
        </Header>
    );
}
export default Navbar;