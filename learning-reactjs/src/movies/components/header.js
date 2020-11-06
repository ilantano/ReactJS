import React from 'react'
import { Layout, Menu } from 'antd';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import * as api from '../services/login';


const { Header } = Layout;

const HeaderComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const history = useHistory();
  const infoUser=api.decodeTokenFromLocalStorage();
  
  const logout = () => {
    if (infoUser !== null) {
      api.removeTokenLocalStorage();
      history.push('/login');
    }
  }

  return (
    <Header>
      <NavLink to="/">
       <div className="logo" />
      </NavLink>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="home">
          <NavLink to="/home">Home</NavLink>
        </Menu.Item>
        <Menu.Item key="new-film">
          <NavLink to="/new-film">Phim Moi</NavLink>
        </Menu.Item>
        <Menu.Item key="/search-film">
          <NavLink to="/search-film">Tim Kiem</NavLink>
        </Menu.Item>
        
        {infoUser === null &&(
          <Menu.Item key="/login">
          <NavLink to="/login">Dang nhap</NavLink>
          </Menu.Item>
        )}

        <Menu.Item>
          <strong>
            {infoUser !== null ? ` Hi: ${infoUser.username}` : null}
          </strong>
        </Menu.Item>
        {infoUser !== null && (
          <Menu.Item>
          <span onClick={() => logout()}>Thoat</span>
        </Menu.Item>
        )}
        
      </Menu>
    </Header>

  )
}
export default React.memo(HeaderComponent)
