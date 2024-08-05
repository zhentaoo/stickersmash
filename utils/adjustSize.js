import { Dimensions } from "react-native";

export const adjustSize = (size) => {
  const deviceWidth = Dimensions.get("window").width;

  console.log("deviceWidth:", deviceWidth);

  const designWidth = 375; // 设计稿宽度调整

  const WLR = deviceWidth / designWidth;

  return size * WLR;
};

export const adjustFontSize = (size) => {
  return 14;
};
