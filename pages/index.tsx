import ReactRouterRoutes from "../components/ReactRouterRoutes";
import NextLink from "next/link";

export default function App() {
  return (
    <div>
      <ReactRouterRoutes />
      <div>
        <ul>
          <li>
            <NextLink href="/static">Static (Static Generation)</NextLink>
          </li>
          <li>
            <NextLink href="/settings">Settings (SSR)</NextLink>
          </li>
          <li>
            <NextLink href="/ssg/1">SSG 1(SSG)</NextLink>
          </li>
          <li>
            <NextLink href="/ssg/3">SSG 3(SSG)</NextLink>
          </li>
          <li>
            <NextLink href="/ssg/15">SSG 15(SSG)</NextLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
