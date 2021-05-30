/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {
  PermissionsAndroid,
  ActivityIndicator,
  StyleSheet,
  View,
  BackHandler,
} from 'react-native';
import {WEB_URL} from './config';

function LoadingIndicatorView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#009b88" size="large" />
    </View>
  );
}

class MyWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: true};
    this.WEBVIEW_REF = React.createRef();
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Permission',
        message: 'We would like to use your location',
        buttonPositive: 'Okay',
      },
    );
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    this.WEBVIEW_REF.current.goBack();
    return true;
  };

  hideSpinner() {
    this.setState({visible: false});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{uri: WEB_URL}}
          originWhitelist={['*']}
          style={{flex: 1}}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          geolocationEnabled={true}
          javaScriptEnabled={true}
          onLoad={() => this.hideSpinner()}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
        {this.state.visible && <LoadingIndicatorView />}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MyWeb;
