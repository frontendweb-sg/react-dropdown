import React from 'react';

interface IProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

const Button = (props: IProps) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
