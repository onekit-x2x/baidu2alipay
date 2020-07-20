Component({
  mixins: [],
  data: {},
  props: {
    value: "",
    type: "text",
    password: false,
    placeholder: "",
    placeholderStyle: "",
    placeholderClass: "",
    disabled: false,
    maxlength: 140,
    cursorSpacing: 0,
    autoFocus: false,
    focus: false,
    confirmType: "done",
    confirmHold: false,
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    input_Input(e) {
      if (this.props.onInput) {
        this.props.onInput({})
      }
    },
    input_Focus(e){
      if (this.props.onFocus) {
        this.props.onFocus({})
      }
    },
    input_Blur(e){
      if (this.props.onBlur) {
        this.props.onBlur({})
      }
    },
    input_Confirm(e){
      if (this.props.onConfirm) {
        this.props.onConfirm({})
      }
    }
  },
});
