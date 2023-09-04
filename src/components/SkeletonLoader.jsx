import React from 'react'

function SkeletonLoader({children, className, ...props}) {
  return (
    <div className={["animate-pulse", className].join(" ")} {...props}>
    {children}
  </div>
  )
}

export default SkeletonLoader