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
    <div className="grid grid-cols-2">
      <div>{props.children}</div>
      <div>
        <div>{props.pt}</div>
        <div>{props.title}</div>
        <div>{props.location}</div>
        <div>{props.desc}</div>
      </div>
    </div>
  );
};

export default detail;
