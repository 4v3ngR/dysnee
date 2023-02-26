import { Character } from './character';

export class Selector {
	constructor(id, Images) {
		this.mike = new Character(Images.Mike);
		this.mini = new Character(Images.Mini);
		this.mini.hide();
		this.mike.hide();

		const deviceInfo = hmSetting.getDeviceInfo();
		const optionalTypes = [
			{
				type: 100001,
				preview: Images.Selector.Mike,
				title_en: "Mick-E",
				title_sc: "Mick-E",
				title_tc: "Mick-E",
			},
			{
				type: 100002,
				preview: Images.Selector.Mini,
				title_en: "Min-E",
				title_sc: "Min-E",
				title_tc: "Min-E",
			}
		];

		this.selectorWidget = hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_GROUP, {
			edit_id: id,
			x: 0,
			y: 0,
			w: px(deviceInfo.width),
			h: px(deviceInfo.height),
			select_image: Images.Selector.Select,
			un_select_image: Images.Selector.Select,
			default_type: 100002,
			optional_types: optionalTypes,
			count: 2,
			tips_BG: Images.Selector.Tips,
			tips_x: 0,
			tips_y: 0,
			tips_width: px(deviceInfo.width),
			tips_height: 32,
			tips_margin: 10
		});

		const current = this.selectorWidget.getProperty(hmUI.prop.CURRENT_TYPE);

		switch (current) {
			case 100001:
				this.mike.show();
				this.mini.hide();
				break;
			case 100002:
				this.mike.hide();
				this.mini.show();
				break;
		}

		hmUI.createWidget(hmUI.widget.WATCHFACE_EDIT_FG_MASK, {
			x: 0,
			y: 0,
			w: px(deviceInfo.width),
			h: px(deviceInfo.height),
			src: Images.Mask,
			show_level: hmUI.show_level.ONLY_EDIT
		});
	}

	onResume() {
		const current = this.selectorWidget.getProperty(hmUI.prop.CURRENT_TYPE);
		switch (current) {
			case 100001:
				this.mike.onResume();
				break;
			case 100002:
				this.mini.onResume();
				break;
		}
	}

	onPause() {
		this.mike.onPause();
		this.mini.onPause();
	}
}
