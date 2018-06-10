//----------------------------------------------------------------------------------------------------------------------
//ExitGame.js
//----------------------------------------------------------------------------------------------------------------------
/*:
 * 在主菜单和游戏菜单中添加退出按钮。
 */
//prototype用于实现继承扩展
(function() {

    var params = PluginManager.parameters('退出游戏');   //定义参数
    var sceneTitleWindow = Scene_Title.prototype.createCommandWindow;  //定义事件标题窗口  
    var windowTitleCommandList = Window_TitleCommand.prototype.makeCommandList;  //定义窗口命令列表
    var sceneGameEndWindow = Scene_GameEnd.prototype.createCommandWindow;   //场景窗
    var windowGameEndCommandList = Window_GameEnd.prototype.makeCommandList;
    var textExit = String(params['Button Text'] || '退出游戏');  //文本编辑

    //-------------------------------------
    // 处理标题菜单退出游戏
    //-------------------------------------
    Window_TitleCommand.prototype.makeCommandList = function() {
        windowTitleCommandList.call(this); //调用原始的makeCommandList函数功能
        this.addCommand(textExit, '退出游戏'); //将命令添加到命令列表中
    };

    Scene_Title.prototype.createCommandWindow = function () {
        sceneTitleWindow.call(this); //调用原始的makeCommandList函数功能
        this._commandWindow.setHandler('退出游戏', this.commandExitGame.bind(this)); //将函数绑定到退出按钮
    };
    
	//退出游戏按钮
    Scene_Title.prototype.commandExitGame = function() {
        this._commandWindow.close(); //closes the window
        this.fadeOutAll(); //fades out the screen
        SceneManager.exit(); //closes the actual game
    };

    //----------------------------------
    // 处理游戏中的退出游戏
    //----------------------------------
    Window_GameEnd.prototype.makeCommandList = function() {
        windowGameEndCommandList.call(this); //calls the original makeCommandList function
        this.addCommand(textExit, '退出游戏');
    };

    Scene_GameEnd.prototype.createCommandWindow = function() {
        sceneGameEndWindow.call(this); //calls the original createCommandWindow function
        this._commandWindow.setHandler('退出游戏', this.commandExit.bind(this));
    };

    Scene_GameEnd.prototype.commandExit = function() {
        this.fadeOutAll(); //fades out the screen
        SceneManager.exit(); //closes the actual game
    }
})();
