import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import {
  DropdownItem
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavDropdown } from './menu-components';


const adminMenuItems = () => (
  <>
    <MenuItem icon="tachometer-alt" to="/admin/metrics">Meetrika</MenuItem>
    <MenuItem icon="heart" to="/admin/health">Tervis</MenuItem>
    <MenuItem icon="cogs" to="/admin/configuration">Konfiguratsioon</MenuItem>
    <MenuItem icon="tasks" to="/admin/logs">Logid</MenuItem>
    {/* jhipster-needle-add-element-to-admin-menu - JHipster will add entities to the admin menu here */}
  </>
);

const openAPIItem = () => (
  <MenuItem icon="book" to="/admin/docs">API</MenuItem>
);


export const AdminMenu = ({ showOpenAPI }) => (
  <NavDropdown icon="users-cog" name="Administreerimine" id="admin-menu" data-cy="adminMenu">
      {adminMenuItems()}
      {showOpenAPI && openAPIItem()}
  </NavDropdown>
);

export default AdminMenu;
