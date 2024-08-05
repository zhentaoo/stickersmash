import { StyleSheet } from 'react-native';
import { adjustSize, adjustFontSize } from './adjustSize.js'; // 导入自定义单位工具

// 创建自定义 StyleSheet
const createStyles = (styles) => {
  const adjustedStyles = {};

  for (const key in styles) {
    const style = styles[key];
    const adjustedStyle = {};

    for (const property in style) {
        debugger
      const value = style[property];

      if (property === 'fontSize') {
        adjustedStyle[property] = adjustFontSize(value);
      } else if (typeof value === 'number') {
        adjustedStyle[property] = adjustSize(value);
      } else {
        adjustedStyle[property] = value;
      }
    }

    adjustedStyles[key] = adjustedStyle;
  }

  return StyleSheet.create(adjustedStyles);
};

export default createStyles;
