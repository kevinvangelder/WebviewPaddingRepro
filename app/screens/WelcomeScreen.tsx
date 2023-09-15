import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle, SectionList, Dimensions } from "react-native"
import { colors, spacing } from "../theme"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"
import WebView from "react-native-webview"
import { Text } from "app/components"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
) {
  return (
    <View style={$container}>
      <WebView
        source={{
          uri: "https://reactnative.dev/docs/scrollview",
        }}
        style={[$webView, { paddingTop: 240 }]}
        webviewDebuggingEnabled
        pullToRefreshEnabled
      />
      <View style={{height: 240, width: Dimensions.get("window").width, backgroundColor: "gray", justifyContent: "center", alignItems: "center", position: 'absolute', top: 0, left: 0, right: 0}}>
        <Text>This is a header</Text>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
const $webView: ViewStyle = { flex: 1, height: Dimensions.get("window").height }
