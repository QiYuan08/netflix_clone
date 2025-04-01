import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("signup", "routes/signup.tsx"),

  layout("routes/layout/guest.tsx", [
    index("routes/home.tsx"),
    route("login", "routes/login.tsx"),
  ]),

  layout("routes/layout/customer.tsx", [
    route("dashboard", "routes/customer/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
