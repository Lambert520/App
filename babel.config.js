module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //element-ui按需引入管理
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
