import React from "react";

interface Props {
  children: React.ReactNode;
  pt: string;
  title: string;
  location: string;
  desc: string;
}

const detail = (props: Props) => {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-7xl my-28">
      <div>{props.children}</div>
      <div className="py-6 px-6">
        <div>{props.pt}</div>
        <div>{props.title}</div>
        <div>{props.location}</div>
        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default detail;
