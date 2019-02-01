import RouterConfig from './modules/index'; // 引入业务逻辑模块
import CommonRouters from './common'; // 引入通用模块

export default [...RouterConfig.concat(CommonRouters)];
