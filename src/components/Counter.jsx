function Counter(props) {
  // function Counter({value}) {
  // object destructuring in props loses reactivity

  return <p id="counter">{props.value}</p>;
}

export default Counter;
