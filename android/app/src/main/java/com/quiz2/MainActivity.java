package com.quiz2;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
// import org.pgsqlite.SQLitePluginPackage;

public class MainActivity extends ReactActivity {
//     private ReactInstanceManager mReactInstanceManager;
//     private ReactRootView mReactRootView;
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "QUIZ2";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);

  }

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         mReactRootView = new ReactRootView(this);
//         mReactInstanceManager = ReactInstanceManager.builder()
//                 .setApplication(getApplication())
//                 .setBundleAssetName("index.android.bundle")  // this is dependant on how you name you JS files, example assumes index.android.js
//                 .setJSMainModuleName("index.android")        // this is dependant on how you name you JS files, example assumes index.android.js
//                 .addPackage(new MainReactPackage())
//                 .addPackage(new SQLitePluginPackage())       // register SQLite Plugin here
//                 .setUseDeveloperSupport(BuildConfig.DEBUG)
//                 .setInitialLifecycleState(LifecycleState.RESUMED)
//                 .build();
//         mReactRootView.startReactApplication(mReactInstanceManager, "AwesomeProject", null); //change "AwesomeProject" to name of your app
//         setContentView(mReactRootView);
//     }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new MainActivityDelegate(this, getMainComponentName());
  }

  public static class MainActivityDelegate extends ReactActivityDelegate {
    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {
      super(activity, mainComponentName);
    }

    @Override
    protected ReactRootView createRootView() {
      ReactRootView reactRootView = new ReactRootView(getContext());
      // If you opted-in for the New Architecture, we enable the Fabric Renderer.
      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
      return reactRootView;
    }

    @Override
    protected boolean isConcurrentRootEnabled() {
      // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
      // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }
  }
}
