import { memo } from "react";

//el memo se utiliza para memorizar un componente y que no se renderize si su padre lo hace, solo lo hara cuando cambien sus props.
export const Small = memo(({ value }) => {

  console.log('me dibuje');

  return (
    <small>{value}</small>
  )
})
