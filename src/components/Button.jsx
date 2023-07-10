function Button({children, color, size}) {
  return (
    <button className={`${color} ${size} btn`}>{ children }</button>
  )
}

export default Button