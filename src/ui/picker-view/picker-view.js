Component({
  mixins: [],
  data: {},
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: '',
    value: '',
    indicatorStyle: '',
    indicatorClass: '',
    maskStyle: '',
    maskClass: ''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    pickerView_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    }
  },
})