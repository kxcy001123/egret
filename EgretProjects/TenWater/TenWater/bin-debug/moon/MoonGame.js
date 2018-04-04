var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MButton = (function (_super) {
    __extends(MButton, _super);
    function MButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MButton;
}(moon.BasicButton));
__reflect(MButton.prototype, "MButton");
;
var MImage = (function (_super) {
    __extends(MImage, _super);
    function MImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MImage;
}(moon.Image));
__reflect(MImage.prototype, "MImage");
;
var Layout = (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Layout;
}(moon.ImageLayout));
__reflect(Layout.prototype, "Layout");
;
var Scale9Image = (function (_super) {
    __extends(Scale9Image, _super);
    function Scale9Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Scale9Image;
}(moon.Scale9Image));
__reflect(Scale9Image.prototype, "Scale9Image");
;
var MoonEvent = (function (_super) {
    __extends(MoonEvent, _super);
    function MoonEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MoonEvent;
}(moon.MoonEvent));
__reflect(MoonEvent.prototype, "MoonEvent");
;
var moon;
(function (moon) {
    /**游戏模版 */
    var BasicGamePanel = (function (_super) {
        __extends(BasicGamePanel, _super);
        function BasicGamePanel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**加载到舞台之后调用 */
        BasicGamePanel.prototype.render = function () {
            _super.prototype.render.call(this);
            this.initView();
        };
        BasicGamePanel.prototype.initView = function () {
            this.createImageBg("background_jpg");
            this.txtScore = this.createText();
            this.txtLevel = this.createText(200);
            this.txtBlood = this.createText(400);
            this.panelStart = new BasicGameStart;
            this.panelStart.addEvent(moon.MoonEvent.START, this.start, this);
            this.panelOver = new BasicGameOver;
            this.panelOver.addEvent(moon.MoonEvent.START, this.start, this);
            this.addChild(this.panelStart);
            this.initGame();
        };
        BasicGamePanel.prototype.initGame = function () {
            this.level = 1;
            this.score = 0;
            this.blood = 10;
            this.updateBlood();
            this.updateLevel();
            this.updateScore();
        };
        BasicGamePanel.prototype.start = function (e) {
            this.initGame();
            this.play();
        };
        BasicGamePanel.prototype.loop = function (n) {
            this.blood--;
            this.score += 10;
            this.updateScore();
            this.updateBlood();
            return true;
        };
        BasicGamePanel.prototype.over = function () {
            this.addChild(this.panelOver);
            this.panelOver.alpha = 0;
            Tween.get(this.panelOver).to({ alpha: 1 }, 300);
            this.panelOver.update({ score: this.score, level: this.level });
            this.stop();
        };
        BasicGamePanel.prototype.updateLevel = function () {
            this.txtLevel.text = "level:" + this.level;
        };
        BasicGamePanel.prototype.updateScore = function () {
            this.txtScore.text = "score:" + this.score;
            if (this.score > 0 && this.score % 200 == 0) {
                this.level++;
                this.updateLevel();
            }
        };
        BasicGamePanel.prototype.updateBlood = function () {
            this.txtBlood.text = "blood:" + this.blood;
            if (this.blood == 0) {
                this.over();
            }
        };
        BasicGamePanel.prototype.createImageBg = function (name) {
            this.addChild(new MImage(name));
        };
        BasicGamePanel.prototype.dispose = function () {
            this.stop();
            _super.prototype.dispose.call(this);
        };
        return BasicGamePanel;
    }(moon.GameView));
    moon.BasicGamePanel = BasicGamePanel;
    __reflect(BasicGamePanel.prototype, "moon.BasicGamePanel");
    /**游戏开始界面 */
    var BasicGameStart = (function (_super) {
        __extends(BasicGameStart, _super);
        function BasicGameStart() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**加载到舞台之后调用 */
        BasicGameStart.prototype.render = function () {
            _super.prototype.render.call(this);
            this.initView();
        };
        BasicGameStart.prototype.initView = function () {
            var bg = this.createBackground();
            bg.alpha = 0.5;
            this.createBtn("开始游戏");
            this.createTitle("游戏标题");
        };
        BasicGameStart.prototype.createBtn = function (value) {
            var btn = this.createButton(value);
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
            btn.x = (this.stageWidth - btn.width) >> 1;
            btn.y = (this.stageHeight - btn.height) >> 1;
            return btn;
        };
        BasicGameStart.prototype.createTitle = function (value) {
            var title = this.createText(0, 0, value);
            title.x = (this.stageWidth - title.width) / 2;
            title.y = (this.stageHeight - title.height) / 2 - 100;
            return title;
        };
        BasicGameStart.prototype.onClick = function (e) {
            this.dispEvent(moon.MoonEvent.START);
            Tween.get(this).to({ alpha: 0 }, 300).call(this.backCall, this);
        };
        BasicGameStart.prototype.backCall = function (e) {
            this.removeFromParent();
        };
        BasicGameStart.prototype.createImageBg = function (name) {
            this.addChild(new MImage(name));
        };
        return BasicGameStart;
    }(moon.GameView));
    moon.BasicGameStart = BasicGameStart;
    __reflect(BasicGameStart.prototype, "moon.BasicGameStart");
    /**游戏结束界面 */
    var BasicGameOver = (function (_super) {
        __extends(BasicGameOver, _super);
        function BasicGameOver() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BasicGameOver.prototype.initView = function () {
            this.createBtn("再来一次");
            this.txtScore = this.createText();
            this.txtLevel = this.createText();
        };
        BasicGameOver.prototype.update = function (data) {
            this.txtScore.text = "score:" + data["score"];
            this.txtLevel.text = "level:" + data["level"];
            this.txtScore.x = (this.stageWidth - this.txtScore.width) / 2;
            this.txtLevel.x = (this.stageWidth - this.txtLevel.width) / 2;
            this.txtScore.y = (this.stageHeight - this.txtScore.height) / 2 - 60;
            this.txtLevel.y = this.txtScore.y - 60;
        };
        return BasicGameOver;
    }(BasicGameStart));
    moon.BasicGameOver = BasicGameOver;
    __reflect(BasicGameOver.prototype, "moon.BasicGameOver");
})(moon || (moon = {}));
//# sourceMappingURL=MoonGame.js.map