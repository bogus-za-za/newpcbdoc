import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'f2d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '835'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2f4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7c2'),
            routes: [
              {
                path: '/docs/嘉立创操作/单位换算',
                component: ComponentCreator('/docs/嘉立创操作/单位换算', '391'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/层叠设计与布线/demo',
                component: ComponentCreator('/docs/学习路线/层叠设计与布线/demo', '680'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/尺寸和弯曲区域设计/demo',
                component: ComponentCreator('/docs/学习路线/尺寸和弯曲区域设计/demo', 'a5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/基础电路设计/1.1 PCB 典型结构',
                component: ComponentCreator('/docs/学习路线/基础电路设计/1.1 PCB 典型结构', 'a54'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/基础电路设计/1.2 PCB的加工工艺',
                component: ComponentCreator('/docs/学习路线/基础电路设计/1.2 PCB的加工工艺', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/基础电路设计/基本认知',
                component: ComponentCreator('/docs/学习路线/基础电路设计/基本认知', 'b20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/模拟与分析/demo',
                component: ComponentCreator('/docs/学习路线/模拟与分析/demo', '29e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/设计规则检查（DRC）/demo',
                component: ComponentCreator('/docs/学习路线/设计规则检查（DRC）/demo', '7df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/输出Gerber文件与BOM/demo',
                component: ComponentCreator('/docs/学习路线/输出Gerber文件与BOM/demo', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/信号完整性和电源设计/demo',
                component: ComponentCreator('/docs/学习路线/信号完整性和电源设计/demo', '054'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/选择合适的材料和厚度/demo',
                component: ComponentCreator('/docs/学习路线/选择合适的材料和厚度/demo', '4e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/原理图构成',
                component: ComponentCreator('/docs/学习路线/原理图构成', '886'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/原理图与PCB布局/demo',
                component: ComponentCreator('/docs/学习路线/原理图与PCB布局/demo', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/学习路线/FPC特殊设计要求/demo',
                component: ComponentCreator('/docs/学习路线/FPC特殊设计要求/demo', '134'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FPC板制作规范及工艺流程/单位换算',
                component: ComponentCreator('/docs/FPC板制作规范及工艺流程/单位换算', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FPC板制作规范及工艺流程/嘉立创工厂制作规范',
                component: ComponentCreator('/docs/FPC板制作规范及工艺流程/嘉立创工厂制作规范', 'c9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
