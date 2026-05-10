const config = {
  appId: 'com.invoicekit.app',
  appName: 'InvoiceKit',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0F1729',
      showSpinner: false
    }
  }
};

module.exports = config;
