import { ROUTES } from "./routes";

export const UserRoles = {
  role: "role",
};

/**
 * The below function define redirection for a particular route based on the role
 */
export const Redirections = (userRole) => {
  switch (userRole) {
    default:
      return "";
  }
};

/**
 * The below function define redirection to a particular route based on the role
 */
export const LoginSuccess = (userRole) => {
  switch (userRole) {
    default:
      return "/";
  }
};

/**
 * The below function define number of routes that can accessible by the
 * different role.
 */
export const Access = (userRole, path) => {
  debugger;
  switch (userRole) {
    case UserRoles.role:
      return [...Object.values(ROUTES)].indexOf(path);
    default:
      return false;
  }
};
