/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import baidu_behavior from '../../behavior/baidu_behavior'

Component({
  mixins: [onekit_behavior, baidu_behavior],
  data: {},
  props: {
    devicePosition: 'back',
    flash: 'auto'
  },
  didMount() {
    const onekitId = this.props.onekitId || `id_${Math.random() * 1000}`
    this.setData({
      onekitId
    })
    getApp().onekit_camera = my.createCameraContext(onekitId)
    //
    my.createSelectorQuery().select('.onekit-camera').boundingClientRect().exec((rect) => {
      this.setData({
        rect: rect[0]
      })
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    camera_stop({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onStop) {
        this.props.onStop({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    camera_error({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onError) {
        this.props.onError({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
