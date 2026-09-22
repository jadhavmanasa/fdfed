function Counter(props) {
  return (
    <div>
      <button onClick={props.onIncrease}>
        Increase
      </button>

      <button onClick={props.onDecrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;