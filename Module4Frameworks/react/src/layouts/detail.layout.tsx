import React from "react";

interface Props {
    children?: React.ReactNode;
  }

export const DetailLayout: React.FC<Props> = ({children}) => (
    <>
    <div className="detalle">{children}</div>
    </>
)