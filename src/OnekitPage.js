/* eslint-disable no-console */
/* eslint-disable camelcase */
export default function OnekitPage(swan_object) {
  const my_object = {
    events: {
      onKeyboardHeight(e) {
        for (const onKeyboardHeight of getApp().onekit_onKeyboardHeight) {
          onKeyboardHeight(e)
        }
      }
    },
    onLoad(query) {
      if (!getApp().onekit_onKeyboardHeight) {
        getApp().onekit_onKeyboardHeight = []
      }
      if (swan_object.onLoad) {
        swan_object.onLoad.call(this, query)
      }
    },
    animate() {},
    selectComponent(selector) {
      // selector = selector.replace(".","$");
      // selector = selector.replace("-","_");
      for (const key of Object.keys(this)) {
        if (key.indexOf(selector) >= 0) {
          return this[key]
        }
      }
      return null
    },
    selectAllComponents(selector) {
      //  selector = selector.replace(".","$");
      //   selector = selector.replace("-","_");
      for (const key of Object.keys(this)) {
        if (key.indexOf(selector) >= 0) {
          return [this[key]]
        }
      }
      return []
    }
  }
  if (swan_object.behaviors) {
    for (const behavior of swan_object.behaviors) {
      for (const behavior_key of Object.keys(behavior)) {
        const behavior_value = behavior[behavior_key]
        switch (behavior_key) {
          case 'methods':
            for (const method_key of Object.keys(behavior_value)) {
              const method = behavior_value[method_key]
              my_object[method_key] = method
            }
            break
          default:
            my_object[behavior_key] = behavior_value
            break
        }
      }
    }
  }
  for (const key of Object.keys(swan_object)) {
    const value = swan_object[key]
    switch (key) {
      case 'behaviors':
        break
      case 'onLoad':
        break
      default:
        my_object[key] = value
        break
    }
  }
  return Page(my_object)
}
