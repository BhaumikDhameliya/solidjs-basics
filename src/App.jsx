import { createEffect, createSignal } from "solid-js";
import Counter from "./components/Counter";
import ForComponent from "./components/ForComponent";
import Header from "./components/Header";
import RefComponent from "./components/RefComponent";
import ShowComponent from "./components/ShowComponent";

function App() {
  const [counter, setCounter] = createSignal(0);
  const doubleCounter = () => counter() * 2;

  createEffect(() => {
    console.log("Effect - execute because counter updated", counter());
  });

  // setInterval(() => {
  //   setCounter(counter() + 1);
  // }, 1000);

  // onClick  and  onclick  both  works
  return (
    <>
      <Header />

      <Counter value={counter()} />

      <button
        onClick={() => {
          setCounter((prev) => prev - 1);
        }}
      >
        -
      </button>
      {/* <p>{counter()}</p> */}
      <button
        onclick={() => {
          setCounter(counter() + 1);
        }}
      >
        +
      </button>

      <ForComponent />
      <ShowComponent when={false} />
      <RefComponent />
    </>
  );
}

export default App;
