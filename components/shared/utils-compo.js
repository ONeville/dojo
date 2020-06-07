/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/core";


export const Spinner = () =>{
      const spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
return (
  <div
    css={css`
      border-top-color: #3498db;
      -webkit-animation: ${spinner} 1.5s linear infinite;
      animation: ${spinner} 1.5s linear infinite;
    `}
    className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"
  ></div>
);
}