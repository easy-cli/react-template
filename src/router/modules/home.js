import Loadable from 'react-loadable';

// 在定义我们的路由对象，使用react-loadable 对路由组件进行懒加载，
const loadable = filename =>
  Loadable({
    loader: () => import(`../../views/${filename}`),
    loading: () => ''
  });

export default [
  {
    path: '/',
    exact: true,
    component: loadable('Home')
  },
  {
    path: '/about',
    component: loadable('About')
  }
];
