import { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log('FUCK YOU');

  return (
    <button
      className="btn btn-primary"
      onClick={increment}
    >
      Increment
    </button>
  )
})
