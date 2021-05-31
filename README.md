# BYU_RN_Template
Barebones-Yet-Useful React Native starter template

Idea: Barebones-Yet-Useful puts in only the very important extra libraries for navigation, basic components, etc and gets you started with building react native apps without initial setup of very useful features most app ideas require.

How to?

1. Clone the repo
2. Change folder name to something of your choice
3. ```cd <folder_name> && yarn install```
4. ```cd ios && pod install```

How to change name?

1. A super useful package "react-native-rename" already gets installed as part of previous yarn install
2. ```npx react-native-rename <new_name>```
3. For Android to change the bundle name as well - ```$ npx react-native-rename <newName> -b <bundleIdentifier>```
4. For iOS, clean the build folder (or use XCode), re-build, and then re-install all packages.
