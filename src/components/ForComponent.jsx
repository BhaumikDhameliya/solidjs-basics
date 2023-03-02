function ForComponent() {
  const posts = ["post 1", "post 2", "post 3"];
  return (
    <For each={posts}>
      {(post, index) => {
        return <div>{post}</div>;
      }}
    </For>
  );
}

export default ForComponent;
