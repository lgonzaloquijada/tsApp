import { User, ROLES } from './01-enum';

const currentUser: User = {
  username: 'luis',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = (): boolean => {
  return currentUser.role === ROLES.ADMIN;
};

const ans = checkAdminRole(); // true
console.log(`Is admin: ${ans}`);

export const checkUserRole = (role1: string, role2: string): boolean => {
  if (currentUser.role === role1 || currentUser.role === role2) {
    return true;
  }
  return false;
};

const ans2 = checkUserRole(ROLES.ADMIN, ROLES.SELLER); // true
console.log(`Is admin or seller: ${ans2}`);

export const checkUserRolev2 = (roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const ans3 = checkUserRolev2([ROLES.ADMIN, ROLES.SELLER]); // true
console.log(`Is admin or seller: ${ans2}`);

export const checkUserRolev3 = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

const ans4 = checkUserRolev3(ROLES.ADMIN, ROLES.SELLER); // true
console.log(`Is admin or seller: ${ans4}`);
