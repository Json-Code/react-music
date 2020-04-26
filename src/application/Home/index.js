import React from 'react';
import { renderRoutes } from "react-router-config";
import { 
  Top,
  Tab,
  TabItem 
} from './style';
import { NavLink } from 'react-router-dom'; // 利用 NavLink 组件进行跳转

function Home (props) {
  const { route } = props;

  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Webapp</span>
        <span className="iconfont menu">&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" className="selected"><TabItem><span>推荐</span></TabItem></NavLink>
        <NavLink to="/singers" className="selected"><TabItem><span>歌手</span></TabItem></NavLink>
        <NavLink to="/rank" className="selected"><TabItem><span>排行榜</span></TabItem></NavLink>
      </Tab>
      { renderRoutes (route.routes) }
    </div>
  )
}

export default React.memo (Home);