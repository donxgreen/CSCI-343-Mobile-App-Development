import WheelPicker from 'react-native-wheely';

// Browser scrolling has no native momentum-end event. Keep the same wheel
// component while reporting its scroll position in the browser preview.
export default function WheelControl(props) {
  function updateSelection(event) {
    const index = Math.round(event.target.scrollTop / props.itemHeight);
    props.onChange(Math.max(0, Math.min(props.options.length - 1, index)));
  }

  return (
    <div style={{ width: '100%' }} onScrollCapture={updateSelection}>
      <WheelPicker {...props} />
    </div>
  );
}
