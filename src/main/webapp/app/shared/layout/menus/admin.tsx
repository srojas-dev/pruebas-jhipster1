import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import {
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavDropdown } from './menu-components';


const adminMenuItems = () => (
  <>
    <MenuItem icon="tachometer-alt" to="/admin/metrics">資源監控</MenuItem>
    <MenuItem icon="heart" to="/admin/health">服務狀態</MenuItem>
    <MenuItem icon="cogs" to="/admin/configuration">設定</MenuItem>
    <MenuItem icon="tasks" to="/admin/logs">紀錄</MenuItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
  </>
);

const openAPIItem = () => (
  <MenuItem icon="book" to="/admin/docs">API</MenuItem>
);


export const AdminMenu = ({ showOpenAPI }) => (
  <NavDropdown icon="users-cog" name="管理" id="admin-menu" data-cy="adminMenu">
      {adminMenuItems()}
      {showOpenAPI && openAPIItem()}
  </NavDropdown>
);

export default AdminMenu;
