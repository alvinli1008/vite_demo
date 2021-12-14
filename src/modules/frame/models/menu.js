/**
 * 菜单配置:
 * src/models/account/accountDetail.js,src/models/authAdd/authAdd.js 有用到
 * 统一 auth 字段是后端接口数据中的菜单项标示
 * 注意菜单的声明顺序,父菜单的顺序要在子菜单之前 (_)
 *
 */

const accountMenus = [
 {
   id: 1,
   bpid: 1,
   name: 'frame.menu_setting',
   icon: 'line-settings',
   activeIcon: 'fill-settings',
   router: '/',
   isActive: false,
   childRouter: [],
   type: ''
 },
 {
   id: 2,
   bpid: 2,
   name: 'frame.menu_store',
   icon: 'nv-line-stores',
   activeIcon: 'nv-fill-stores',
   router: '/demo',
   isActive: false,
   childRouter: [],
   type: ''
 },
];

export default accountMenus;
