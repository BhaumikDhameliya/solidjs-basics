function ShowComponent(props) {
  return (
    <Show when={props.when}>
      <div id="show">This will be shown when when=show</div>
    </Show>
  );
}
export default ShowComponent;
