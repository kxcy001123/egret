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
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Button;
}(moon.BasicButton));
__reflect(Button.prototype, "Button");
;
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**加载到舞台之后调用 */
    Game.prototype.render = function () {
        _super.prototype.render.call(this);
        moon.showLog.getIns().init(this.stage);
        this.createBgGradientFill();
        this.txtScore = this.createText();
        this.txtLevel = this.createText(120);
        this.txtBlood = this.createText(240);
        this.panelStart = new PanelStart;
        this.panelStart.addEvent(moon.MoonEvent.START, this.start, this);
        this.panelOver = new PanelOver;
        this.panelOver.addEvent(moon.MoonEvent.START, this.start, this);
        this.addChild(this.panelStart);
    };
    Game.prototype.start = function (e) {
        this.level = 1;
        this.score = 0;
        this.blood = 300;
        this.updateBlood();
        this.updateLevel();
        this.updateScore();
        this.play();
    };
    Game.prototype.loop = function (n) {
        this.blood--;
        this.score += 10;
        this.updateBlood();
        this.updateScore();
        return true;
    };
    Game.prototype.over = function () {
        this.addChild(this.panelOver);
        this.panelOver.update({ score: this.score, level: this.level });
        this.stop();
    };
    Game.prototype.updateLevel = function () {
        this.txtLevel.text = "level:" + this.level;
    };
    Game.prototype.updateScore = function () {
        this.txtScore.text = "score:" + this.score;
    };
    Game.prototype.updateBlood = function () {
        this.txtBlood.text = "blood:" + this.blood;
        if (this.blood == 0) {
            this.over();
        }
    };
    return Game;
}(moon.GameView));
__reflect(Game.prototype, "Game");
/**游戏开始界面 */
var PanelStart = (function (_super) {
    __extends(PanelStart, _super);
    function PanelStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**加载到舞台之后调用 */
    PanelStart.prototype.render = function () {
        _super.prototype.render.call(this);
        var bg = this.createBackground();
        bg.alpha = 0.5;
        this.initView();
    };
    PanelStart.prototype.initView = function () {
        this.createBtn("开始游戏");
        this.createTitle("游戏标题");
    };
    PanelStart.prototype.createBtn = function (value) {
        var btn = this.createButton(value);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        btn.x = (this.stageWidth - btn.width) >> 1;
        btn.y = (this.stageHeight - btn.height) >> 1;
        return btn;
    };
    PanelStart.prototype.createTitle = function (value) {
        var title = this.createText(0, 0, value);
        title.x = (this.stageWidth - title.width) / 2;
        title.y = (this.stageHeight - title.height) / 2 - 100;
        return title;
    };
    PanelStart.prototype.onClick = function (e) {
        this.removeFromParent();
        this.dispEvent(moon.MoonEvent.START);
    };
    return PanelStart;
}(moon.GameView));
__reflect(PanelStart.prototype, "PanelStart");
/**游戏结束界面 */
var PanelOver = (function (_super) {
    __extends(PanelOver, _super);
    function PanelOver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelOver.prototype.initView = function () {
        this.createBtn("再来一次");
        this.txtScore = this.createText();
        this.txtLevel = this.createText();
    };
    PanelOver.prototype.update = function (data) {
        this.txtScore.text = "score:" + data["score"];
        this.txtLevel.text = "level:" + data["level"];
        this.txtScore.x = (this.stageWidth - this.txtScore.width) / 2;
        this.txtLevel.x = (this.stageWidth - this.txtLevel.width) / 2;
        this.txtScore.y = (this.stageHeight - this.txtScore.height) / 2 - 60;
        this.txtLevel.y = this.txtScore.y - 60;
    };
    return PanelOver;
}(PanelStart));
__reflect(PanelOver.prototype, "PanelOver");
//# sourceMappingURL=Game.js.map