# doc
https://docs.expo.dev/tutorial/image-picker/

# site
https://expo.dev/accounts/panghu666

# dev

npx create-expo-app StickerSmash --template blank

cd StickerSmash

npx expo start

npx expo install react-dom react-native-web @expo/metro-runtime

npx expo install expo-image-picker


# build
npx expo install expo-dev-client (执行后，将不再使用expo go进行开发 )

npm install -g eas-cli

eas login (需要先注册expo账号)

eas init 

eas build:configure 

eas build --platform android --profile development （进行云端构建）

Build details: https://expo.dev/accounts/panghu666/projects/StickerSmash/builds/4799b66e-b518-4fdc-a454-97098e1697a7


eas build --platform ios --profile ios-simulator
