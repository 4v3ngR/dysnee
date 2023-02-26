export class Character {
	constructor(Images, show_level) {
		show_level = show_level || hmUI.show_level.ONLY_NORMAL;

		this.Images = Images;
		this.isAOD = show_level === hmUI.show_level.ONAL_AOD;

		this.rightBodyImage = hmUI.createWidget(hmUI.widget.IMG, {
			x: 0,
			y: 0,
			src: this.Images.RightBody,
			show_level
		});

		this.rightHourTime = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
			hour_centerX: 188,
			hour_centerY: 187,
			hour_posX: 36,
			hour_posY: 130,
			hour_path: this.Images.RightHour,
			show_level
		});

		this.rightHeadImage = hmUI.createWidget(hmUI.widget.IMG, {
			x: 0,
			y: 0,
			src: this.Images.RightHead,
			show_level
		});

		this.rightMinute1Time = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
			minute_centerX: 150,
			minute_centerY: 186,
			minute_posX: 24,
			minute_posY: 149,
			minute_path: this.Images.RightMinute1,
			show_level
		});

		this.rightMinute2Time = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
			minute_centerX: 150,
			minute_centerY: 186,
			minute_posX: 24,
			minute_posY: 149,
			minute_path: this.Images.RightMinute2,
			show_level
		});

		this.leftBodyImage = hmUI.createWidget(hmUI.widget.IMG, {
			x: 0,
			y: 0,
			src: this.Images.LeftBody,
			show_level
		});

		this.leftHourTime = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
			hour_centerX: 148,
			hour_centerY: 187,
			hour_posX: 36,
			hour_posY: 130,
			hour_path: this.Images.LeftHour,
			show_level
		});

		this.leftHeadImage = hmUI.createWidget(hmUI.widget.IMG, {
			x: 0,
			y: 0,
			src: this.Images.LeftHead,
			show_level
		});

		this.leftMinute1Time = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
			minute_centerX: 186,
			minute_centerY: 186,
			minute_posX: 24,
			minute_posY: 149,
			minute_path: this.Images.LeftMinute1,
			show_level
		});

		this.leftMinute2Time = hmUI.createWidget(hmUI.widget.TIME_POINTER, {
			minute_centerX: 186,
			minute_centerY: 186,
			minute_posX: 24,
			minute_posY: 149,
			minute_path: this.Images.LeftMinute2,
			show_level
		});

		if (this.isAOD) {
			this.timer = timer.createTimer(500, 60000, this.updateCharacter);
		}
	}

	hide() {
		this.rightHourTime.setProperty(hmUI.prop.VISIBLE, false);
		this.rightBodyImage.setProperty(hmUI.prop.VISIBLE, false);
		this.rightHeadImage.setProperty(hmUI.prop.VISIBLE, false);
		this.rightMinute1Time.setProperty(hmUI.prop.VISIBLE, false);
		this.rightMinute2Time.setProperty(hmUI.prop.VISIBLE, false);

		this.leftHourTime.setProperty(hmUI.prop.VISIBLE, false);
		this.leftBodyImage.setProperty(hmUI.prop.VISIBLE, false);
		this.leftHeadImage.setProperty(hmUI.prop.VISIBLE, false);
		this.leftMinute1Time.setProperty(hmUI.prop.VISIBLE, false);
		this.leftMinute2Time.setProperty(hmUI.prop.VISIBLE, false);
	}

	show() {
		this.updateCharacter();
	}

	destroy() {
		hmUI.deleteWidget(this.rightBodyImage);
		hmUI.deleteWidget(this.rightHourTime);
		hmUI.deleteWidget(this.rightHeadImage);
		hmUI.deleteWidget(this.rightMinute1Time);
		hmUI.deleteWidget(this.rightMinute2Time);
		hmUI.deleteWidget(this.leftBodyImage);
		hmUI.deleteWidget(this.leftHourTime);
		hmUI.deleteWidget(this.leftHeadImage);
		hmUI.deleteWidget(this.leftMinute1Time);
		hmUI.deleteWidget(this.leftMinute2Time);

		this.rightBodyImage = null;
		this.rightHourTime = null;
		this.rightHeadImage = null;
		this.rightMinute1Time = null;
		this.rightMinute2Time = null;
		this.leftBodyImage = null;
		this.leftHourTime = null;
		this.leftHeadImage = null;
		this.leftMinute1Time = null;
		this.leftMinute2Time = null;
	}

	updateCharacter() {
		const date = new Date();
		const m = date.getMinutes();
		let h = date.getHours();

		h = h >= 12 ? h - 12 : h; // ensure 12 hr
		let r = (0 <= h && h < 6); // facing right
		let m2 = r ? (m >= 45) : (m < 15); // using secondary minute hand

		if (r) {
			this.leftHourTime.setProperty(hmUI.prop.VISIBLE, false);
			this.leftBodyImage.setProperty(hmUI.prop.VISIBLE, false);
			this.leftHeadImage.setProperty(hmUI.prop.VISIBLE, false);
			this.leftMinute1Time.setProperty(hmUI.prop.VISIBLE, false);
			this.leftMinute2Time.setProperty(hmUI.prop.VISIBLE, false);

			this.rightHourTime.setProperty(hmUI.prop.VISIBLE, true);
			this.rightBodyImage.setProperty(hmUI.prop.VISIBLE, true);
			this.rightHeadImage.setProperty(hmUI.prop.VISIBLE, true);

			if (!m2) {
				this.rightMinute1Time.setProperty(hmUI.prop.VISIBLE, true);
				this.rightMinute2Time.setProperty(hmUI.prop.VISIBLE, false);
			} else {
				this.rightMinute1Time.setProperty(hmUI.prop.VISIBLE, false);
				this.rightMinute2Time.setProperty(hmUI.prop.VISIBLE, true);
			}
		} else {
			this.rightHourTime.setProperty(hmUI.prop.VISIBLE, false);
			this.rightBodyImage.setProperty(hmUI.prop.VISIBLE, false);
			this.rightHeadImage.setProperty(hmUI.prop.VISIBLE, false);
			this.rightMinute1Time.setProperty(hmUI.prop.VISIBLE, false);
			this.rightMinute2Time.setProperty(hmUI.prop.VISIBLE, false);

			this.leftHourTime.setProperty(hmUI.prop.VISIBLE, true);
			this.leftBodyImage.setProperty(hmUI.prop.VISIBLE, true);
			this.leftHeadImage.setProperty(hmUI.prop.VISIBLE, true);

			if (!m2) {
				this.leftMinute1Time.setProperty(hmUI.prop.VISIBLE, true);
				this.leftMinute2Time.setProperty(hmUI.prop.VISIBLE, false);
			} else {
				this.leftMinute1Time.setProperty(hmUI.prop.VISIBLE, false);
				this.leftMinute2Time.setProperty(hmUI.prop.VISIBLE, true);
			}
		}
	}

	onResume() {
		this.updateCharacter();
	}

	onPause() {
	}
}
