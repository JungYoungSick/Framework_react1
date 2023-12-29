import React from "react";

export default function Advantages({ name }) {
  return <h1 className={`Introduction ${name}`}>{`${name} 장점`}</h1>;
}
