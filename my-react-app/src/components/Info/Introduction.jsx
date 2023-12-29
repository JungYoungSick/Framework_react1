import React from "react";

export default function Introduction({ name }) {
  return <h1 className={`Introduction ${name}`}>{`${name} 소개`}</h1>;
}
