/*: 
 * @plugindesc 随时随地更改游戏屏幕尺寸
 * @author: Mandarava（鳗驼螺）
 * 
 * @param Screen width * @desc 游戏启动时游戏屏幕的宽度 
 * 默认值：816 
 * @default 816 
 * 
 * @param Screen height 
 * @desc 游戏启动时游戏屏幕的高度
 * 默认值：624 
 * @default 624 
 */

var params = PluginManager.parameters("MND_ChangeScreenSize");
var screenWidth = Number(params["Screen width"]) || 816;
var screenHeight = Number(params["Screen height"]) || 624;

setScreenSize(screenWidth, screenHeight);

function setScreenSize(screenWidth, screenHeight) {
    var deltaWidth = screenWidth - window.innerWidth;
    var deltaHeight = screenHeight - window.innerHeight;
    window.moveBy(-deltaWidth / 2, -deltaHeight / 2);
    window.resizeBy(deltaWidth, deltaHeight);
}