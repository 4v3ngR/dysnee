export const getImages = (lang) => {
  const imgRoot = 'default/';
  const img = (path) => `${imgRoot}${path}`;
  return {
    Background: img('background.png'),
    Transparent: img('blank.png'),
    Selector: {
      Mike: img('select_mike.png'),
      Mini: img('select_mini.png'),
			Tips: img('tips.png'),
			Select: img('select.png'),
			Mask: img('mask.png')
    },
    Mike: {
      LeftBody: img('mike/left_body.png'),
      LeftHead: img('mike/left_head.png'),
      LeftHour: img('mike/left_hour.png'),
      LeftHour2: img('mike/left_hour_2.png'),
      LeftHour3: img('mike/left_hour_3.png'),
      LeftMinute1: img('mike/left_minute_1.png'),
      LeftMinute2: img('mike/left_minute_2.png'),
      RightBody: img('mike/right_body.png'),
      RightHead: img('mike/right_head.png'),
      RightHour: img('mike/right_hour.png'),
      RightHour2: img('mike/right_hour_2.png'),
      RightHour3: img('mike/right_hour_3.png'),
      RightMinute1: img('mike/right_minute_1.png'),
      RightMinute2: img('mike/right_minute_2.png')
    },
    Mini: {
      LeftBody: img('mini/left_body.png'),
      LeftHead: img('mini/left_head.png'),
      LeftHour: img('mini/left_hour.png'),
      LeftHour2: img('mini/left_hour_2.png'),
      LeftHour3: img('mini/left_hour_3.png'),
      LeftMinute1: img('mini/left_minute_1.png'),
      LeftMinute2: img('mini/left_minute_2.png'),
      RightBody: img('mini/right_body.png'),
      RightHead: img('mini/right_head.png'),
      RightHour: img('mini/right_hour.png'),
      RightHour2: img('mini/right_hour_2.png'),
      RightHour3: img('mini/right_hour_3.png'),
      RightMinute1: img('mini/right_minute_1.png'),
      RightMinute2: img('mini/right_minute_2.png')
    }
  };
}
