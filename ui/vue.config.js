const path=require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../backend/templates/"),
  assetsDir: "../static/",
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ]
}