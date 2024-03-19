import { Link, NavLink } from "@remix-run/react";
import { useEffect } from "react";

// violate eslint recommendation
for (let i = 0; i < 10; i--) {
  console.log(i);
}

// violate react recommendation
() => {
  return <>{
    [1, 2, 3].map((i) => <div>{i}</div>)
  }</>;
};

// violate react-hooks recommendation
const _ = () => {
  const flag = true;
  if (flag) {
    useEffect(() => {
      console.log('effect');
    }, []);
  }
  return <div />;
};

// violate jsx-a11y recommendation
() => {
  return (
    <>
      <a>Link</a>
      <Link to="/about">About</Link>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
};

// violate typescript-eslint recommendation
Array(0, 1, 2);
