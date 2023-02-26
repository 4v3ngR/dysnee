import { getImages } from './includes/images';
import { Selector } from './includes/selector';

WatchFace({
  initView() {
    const deviceInfo = hmSetting.getDeviceInfo();
    const screenType = hmSetting.getScreenType();

    this.Images = getImages(hmSetting.getLanguage());

    this.background = hmUI.createWidget(hmUI.widget.IMG, {
      x: px(0),
      y: px(0),
      w: px(deviceInfo.width),
      h: px(deviceInfo.height),
      src: this.Images.Background,
      show_level: hmUI.show_level.ONLY_NORMAL,
    });

    this.selector = new Selector(101, this.Images);
  },

  onInit() {
    const widgetDelegate = hmUI.createWidget(hmUI.widget.WIDGET_DELEGATE, {
      resume_call: (() => {
        if (this.selector) this.selector.onResume();
      }),
      pause_call: (() => {
        if (this.selector) this.selector.onPause();
      }),
    })
  },

  build() {
    try {
      this.initView();
    } catch (ex) { }
  },

  onDestroy() {
  },
})
