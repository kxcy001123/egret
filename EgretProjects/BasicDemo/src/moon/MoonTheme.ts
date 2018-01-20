class Button extends eui.Button{};
class ImageIcon extends eui.Image{};
class TextField extends egret.TextField {};
class Sprite extends egret.Sprite {};
class Shape extends egret.Shape {};
class DisplayObject extends egret.DisplayObject {};
class DisplayObjectContainer extends egret.DisplayObjectContainer {};
class Point extends egret.Point{};
class Rectangle extends egret.Rectangle{};
class Bitmap extends egret.Bitmap{};
class BitmapData extends egret.BitmapData{};
class Stage extends egret.Stage{};
//----------------------------------------------
var trace=function(...arg):void
{
    var str:string="";
	for(let i:number=0;i<arg.length;i++){
         str+=arg[i]+",";
    }
	str=str.substr(0,str.length-1);
	moon.showLog.getIns().logMessage(str)
}
var simpleTrace=function(...arg):void
{
	var str:string="";
	for(let i:number=0;i<arg.length;i++){
         str+=arg[i]+",";
    }
	str=str.substr(0,str.length-1);
    moon.showLog.getIns().log(str);
}
//----------------------------------------------
module moon
{
	export class FONT{
		public static fontName:string="黑体";
	}
	export class Const{
		public static readonly buttonStatusNormal:number=0;
		public static readonly buttonStatusDown:number=1;
	}
	export interface IFace{  
		update():void;
		addItem(item:DisplayObject):void;
		removeItem(item:DisplayObject):void;
    }
	/**颜色 */
	export class Color
	{
		public static get random():number{return Math.random()*0XFFFFFF};
		public static get white():number {return 0XFFFFFF};
		public static get black():number {return 0X000000};
		public static get gray():number {return 0X666666};
		public static get red():number {return 0XFF0000};
		public static get green():number {return 0X00FF00};
		public static get bule():number {return 0X0000FF};
		public static get skinNormal():number{return 0X15191C};
		public static get skinDown():number{return 0X20262B};
		public static get titleBackground():number{return 0X20262B};
	}
	/**皮肤 */
	export class Skin
	{
		public static get pointNormal():Sprite{return moon.MoonUI.getCircle(6,moon.Color.black)};
		public static get pointDown():Sprite{return moon.MoonUI.getCircle(6,moon.Color.gray)};
		public static get buttonNormal():Sprite{return moon.MoonUI.getRect(60,60,moon.Color.skinNormal)};
		public static get buttonDown():Sprite{return moon.MoonUI.getRect(60,60,moon.Color.skinDown)};
		public static get randomRect():Sprite{return moon.MoonUI.getRect(60,60,moon.Color.random)};
		public static get randomCircle():Sprite{return moon.MoonUI.getCircle(50,moon.Color.random)};
		public static get radioNormal():Sprite{return moon.MoonUI.getRadioCircle(moon.Color.white,moon.Color.white)};
		public static get radioDown():Sprite{return moon.MoonUI.getRadioCircle(moon.Color.white,moon.Color.black,1)};
		public static get checkBoxOnNormal():Sprite{return moon.MoonUI.getCheckBoxRect(moon.Color.white,moon.Color.white)};
		public static get checkBoxOnDown():Sprite{return moon.MoonUI.getCheckBoxRect(moon.Color.white,moon.Color.white)};
		public static get checkBoxOffNormal():Sprite{return moon.MoonUI.getCheckBoxRect(moon.Color.white,moon.Color.black,1)};
		public static get checkBoxOffDown():Sprite{return moon.MoonUI.getCheckBoxRect(moon.Color.white,moon.Color.black,1)};
		
		public static get switchOnNormal():Sprite{
			var node:Sprite=moon.MoonUI.getRoundRect(80,50,moon.Color.skinNormal,60,60);
			node.addChild(moon.MoonUI.getCircle(22,moon.Color.white,25,25));
			return node;
		};
		public static get switchOnDown():Sprite{
			var node:Sprite=moon.MoonUI.getRoundRect(80,50,moon.Color.skinDown,60,60);
			node.addChild(moon.MoonUI.getCircle(22,moon.Color.white,25,25));
			return node;
		};
		public static get switchOffNormal():Sprite{
			var node:Sprite=moon.MoonUI.getRoundRect(80,50,moon.Color.skinNormal,60,60);
			node.addChild(moon.MoonUI.getCircle(22,moon.Color.white,55,25));
			return node;
		};
		public static get switchOffDown():Sprite{
			var node:Sprite=moon.MoonUI.getRoundRect(80,50,moon.Color.skinDown,60,60);
			node.addChild(moon.MoonUI.getCircle(22,moon.Color.white,55,25));
			return node;
		};

	}
    /**
	 * ...
	 * 默认参数x轴,y轴,w宽,h高,r半径,c颜色,ew圆角宽,eh圆家高
	 * @author vinson
	 */
    export class MoonUI
	{
        /**得到随机色*/
		public static get randomColor():number{
			return Math.random()*0XFFFFFF;
		}
		/**得到矩形*/
		public static getRect(w:number,h:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite()
			s.graphics.beginFill(c);
			s.graphics.drawRect(x,y,w,h);
			s.graphics.endFill();
			return s;
		}
		/**得到矩形和一个X*/
		public static getRectAndX(w:number,h:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=this.getRect(w,h,c,x,y)
			var l1:Sprite=new Sprite;
			l1.graphics.lineStyle(0.1);
			l1.graphics.moveTo(0,0);
			l1.graphics.lineTo(w,h);
			var l2:Sprite=new Sprite;
			l2.graphics.lineStyle(0.1);
			l2.graphics.moveTo(w,0);
			l2.graphics.lineTo(0,h);
			s.addChild(l1);
			s.addChild(l2);
			return s;
		}
		/**得到圆角矩形*/
		public static getRoundRect(w:number,h:number,c:number=0,ew:number=5,eh:number=5,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite()
			s.graphics.beginFill(c);
			s.graphics.drawRoundRect(x,y,w,h,ew,eh);
			s.graphics.endFill();
			return s;
		}
		/**得到圆形*/
		public static getCircle(r:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var s:Sprite=new Sprite();
			s.graphics.beginFill(c);
			s.graphics.drawCircle(x,y,r);
			s.graphics.endFill();
			return s;
		}
		/**得到多边形,side边数,rotation角度*/
		public static getPolygon(side:number=3,r:number=10,c:number=0,rotation:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			s.rotation=rotation;
			s.graphics.beginFill(c);
			for (var i:number =0; i <=side; i++) {
				var lineX:number =  Math.cos((i * (360 / side) * Math.PI / 180)) * r;
				var lineY:number =  Math.sin((i * (360 / side) * Math.PI / 180)) * r;
				if (i == 0) s.graphics.moveTo(lineX,lineY);
				else		s.graphics.lineTo(lineX, lineY);
				
			}
			s.graphics.endFill();
			return s;
		}
		/**得到圆角矩形与三角形合体rc是正方形颜色,pc是三角形颜色*/
		public static getArrowRoundRect(w:number,h:number,rc:number,pc:number=0,rotation:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,rc));
			var p:Sprite=this.getPolygon(3,w/3,pc,30+rotation);
			p.x=s.width>>1;p.y=s.height>>1;
			s.addChild(p);
			return s;
		}
		/**得到滚动条的bar*/
		public static getScrollLineBar(w:number,h:number,c:number):Sprite
		{
			var s:Sprite = new Sprite;
			var _h:number=h/3;
			for(var i:number=0;i<3;i++){
				var r:Sprite=this.getRect(w,1,c,0,i*_h);
				s.addChild(r);
			}
			return s;
		}
		/**得到圆角矩形-加*/
		public static getAddRoundRect(w:number,h:number,c:number):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var r1:Sprite=this.getRect(w/2,2,0,w/4,h/2-1);
			var r2:Sprite=this.getRect(2,h/2,0,w/2-1,h/4);
			s.addChild(r1);
			s.addChild(r2);
			return s;
		}
		/**得到圆角矩形-减*/
		public static getRemoveRoundRect(w:number,h:number,c:number):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var r:Sprite=this.getRect(w/2,2,0,w/4,h/2-1);
			s.addChild(r);
			return s;
		}
		/**得到带文字的圆角方形*/
		public static getRoundRectText(w:number,h:number,c:number,str:string="click"):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRoundRect(w,h,c));
			var text:TextField=new TextField;
			text.text=str;
			text.x=(s.width-text.width)>>1;
			text.y=(s.height-text.height)>>1;
			s.addChild(text);
			return s;
		}
		/**得到矩形-复选框 bc背景颜色，gc钩的颜色,type为0是没有钩为1是有钩*/
		public static getCheckBoxRect(bc:number=0XFFFFFF,gc:number=0,type:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getRect(20,20,bc));
			if(type==1){
				var r:Sprite=new Sprite;
				r.graphics.beginFill(gc);
				r.graphics.moveTo(0,10);
				r.graphics.lineTo(10,18);r.graphics.lineTo(22,4);r.graphics.lineTo(18,0);r.graphics.lineTo(10,9);
				r.graphics.lineTo(6,4);r.graphics.lineTo(0,10);
				s.addChild(r);
			}
			s.scaleX=s.scaleY=1.5;
			return s;
		}
		/**得到矩形-单选框 bc背景颜色，gc钩的颜色,type为0是没有圆为1是有圆*/
		public static getRadioCircle(bc:number=0XFFFFFF,gc:number=0,type:number=0):Sprite
		{
			var s:Sprite = new Sprite;
			s.addChild(this.getCircle(16,bc,16,16));
			s.graphics.lineStyle(1,0);
			if(type==1){
				var r:Sprite=this.getCircle(8,gc,16,16)
				s.addChild(r);
			}
			return s;
		}
		/**得到矩形-网格
		 * rect.x是x轴数量
		 * rect.y是y轴数量
		 * rect.width是网格宽
		 * rect.height是网格高
		 * lc网格线颜色
		 * */
		public static getGridding(rect:Rectangle,lc:number=0):Sprite
		{
			var s:Sprite=new Sprite;
			s.graphics.lineStyle(0.1,lc);
			var disx:number=rect.width/rect.x;
			var disy:number=rect.height/rect.y;
			for(var i:number=0;i<rect.x;i++){
				s.graphics.moveTo(0,i*disy);
				s.graphics.lineTo(rect.width,i*disy);
			}
			for(i=0;i<rect.y;i++){
				s.graphics.moveTo(i*disx,0);
				s.graphics.lineTo(i*disx,rect.height);
			}
			return s;
		}
    }
    //--------------
	export class showLog
	{
		private static instance:showLog;
		private txtSimple:TextField;
		private txtMessage:TextField;
		public static getIns():showLog{
				if(this.instance == null){
						this.instance = new showLog();
				}
				return this.instance;
		}
		public init(stage:Stage):void
		{
			var txt:TextField=(new Label).textField;
			txt.textAlign = egret.HorizontalAlign.LEFT;
			stage.addChild(txt);
			this.txtSimple=txt;

			var txt:TextField=(new Label).textField;
			txt.size=25;
			stage.addChild(txt);
			this.txtMessage=txt;
		}
		/**每次都覆盖上一次信息 */
		public log(value:string):void
		{
			this.txtSimple.text=value;
		}
		/**显示所有信息 */
		public logMessage(value:string):void
		{
			this.txtMessage.appendText(value+"\n");
		}
		public setLogColor(color:number):void
		{
			this.txtSimple.textColor=color;
		}
		public setLogMessageColor(color:number):void
		{
			this.txtMessage.textColor=color;
		}
	}
	export class TipsManager
	{
		private static instance:TipsManager;
		private stage:Stage;
		private tipsView:BasicTips;
		public static getIns():TipsManager{
			if(this.instance == null){
					this.instance = new TipsManager();
			}
			return this.instance;
		}
		public init(stage:Stage):void
		{
			this.stage=stage;
		}
		public simpleTips(value:string,pos:Point):void
		{
			if(this.tipsView==null){
				this.tipsView=new moon.BasicTips("tips_png");
        		this.tipsView.setValue(value)
        		this.stage.addChild(this.tipsView);
				this.setPosition(pos);
				this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.removeTips,this);
			}
		}
		protected setPosition(pos:Point):void
		{
			if(pos){
				this.tipsView.x=pos.x-(this.tipsView.width>>1);
				this.tipsView.y=pos.y-this.tipsView.height*2;
				if(this.tipsView.y<0){
					this.tipsView.x=pos.x+50
					this.tipsView.y=pos.y;
				}
				if(this.tipsView.x<0){
					this.tipsView.x=pos.x+50
					this.tipsView.y=pos.y;
				}
				if((this.tipsView.x+this.tipsView.width)>this.stage.stageWidth){
					this.tipsView.x=pos.x-(this.tipsView.width+50);
					this.tipsView.y=pos.y;
				}
			}
		}
		public removeTips():void
		{
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.removeTips,this);
			var parent:DisplayObjectContainer=this.tipsView.parent;
			if(parent!=null){
				parent.removeChild(this.tipsView);
				this.tipsView=null;
			}
		}
	}
	export class MoonEvent extends egret.EventDispatcher
	{
		//button event
		public static readonly MOUSE_OVER:string="event-over";
		public static readonly MOUSE_OUT:string="event-out";
		public static readonly MOUSE_DOWN:string="event-down";
		public static readonly MOUSE_MOVE:string="event-move";
		public static readonly MOUSE_UP:string="event-up";
		public static readonly CLICK:string="event-click";
		
		//tabbar event
		public static readonly CHANGE:string="change";
		public static readonly COMPLETE:string="complete";
		public static readonly RENDER_COMPLETE:string="render complete";
		public static readonly UPDATE:string="update";
		public static readonly START:string="start";
		public static readonly OVER:string="over";
		public static readonly PAUSE:string="pause";
		
		public currentTarget:Object;
		public type:string;
		public data:Object;
		public dataType:Object;
		public constructor(type:string="",data:Object=null,currentTarget:Object=null)
		{
			super();
			this.type=type;
			this.data=data;
			this.currentTarget=currentTarget;
		}
	}
	/**基础皮肤类 */
	export class BasicSkinComponent extends eui.Component
	{
		isCreateChildren: boolean;
		isLoadComplete: boolean;
		constructor() {
			super();
		}
		public setSkinName(skinName: string): void {
			this.addEventListener(eui.UIEvent.COMPLETE, this.onComplete, this);
			this.skinName = skinName;
		}
		protected createChildren(): void {
			super.createChildren();
			this.isCreateChildren = true;
			this.init();
		}
		private onComplete(): void {
			this.isLoadComplete = true;
			this.init();
		}
		private init(): void {
			if (this.isCreateChildren && this.isLoadComplete) {
				this.render();
			}
		}
		/**从这个渲染开始*/
		protected render(): void {

		}
	}
    export class MoonContainer extends DisplayObjectContainer
	{
		private dataEvent:Object=new Object;
		protected stageWidth:number;
		protected stageHeight:number;
        public constructor()
        {
            super();
            this.init();
			this.once(egret.Event.ADDED_TO_STAGE,this.addToStage,this);
        }
        private addToStage():void
        {
            this.render();
        }
        /**加载到舞台之前调用 */
        protected init():void
        {

        }
        /**加载到舞台之后调用 */
        protected render():void
        {
			this.stageWidth=this.stage.stageWidth;
			this.stageHeight=this.stage.stageHeight;
        }
		/**发布事件*/
		public newDispatchEvent(type:string,data:Object=null,dataType:Object=null):void
		{
			if(this.dataEvent){
				var fun:Function=this.dataEvent[type] as Function;
				if(fun!=null){
					var moonEvent:MoonEvent=new MoonEvent;
					moonEvent.currentTarget=this;
					moonEvent.data=data;
					moonEvent.type=type;
					moonEvent.dataType=dataType;
					fun(moonEvent);
				}
			}
		}
		/**帧听事件*/
		public newAddEventListener(type:string, listener:Function):void
		{
			if(this.dataEvent&&this.dataEvent[type]==null){
				this.dataEvent[type]=listener;
			}
		}
		/**删除事件*/
		public newRemoveEventListener(type:string, listener:Function):void
		{
			if(this.dataEvent&&this.dataEvent[type]){
				delete this.dataEvent[type];
			}
		}
		/**把自己从父级删除*/
		public removeFromParent(dispose:Boolean=false):void
		{
			var _parent:DisplayObjectContainer=this.parent as DisplayObjectContainer;
			if(dispose)		this.dispose();
			if(_parent&&_parent.contains(this))		_parent.removeChild(this);
			_parent=null;
		}
		/**删除所有的*/
		public removeChildAll(beginIndex:number=0, endIndex:number=2147483647,dispose:Boolean=false):void
		{
			if (endIndex < 0 || endIndex >= this.numChildren) 
				endIndex = this.numChildren - 1;
			
			for (var i:number=beginIndex; i<=endIndex; ++i)
				this.removeChildIndex(beginIndex, dispose);
		}
		/**删除index层的*/
		public removeChildIndex(beginIndex:number, dispose:Boolean):void
		{
			if (beginIndex >= 0 || beginIndex < this.numChildren){ 
				var basicContent:MoonContainer=this.getChildAt(beginIndex) as MoonContainer;
				if(basicContent instanceof MoonContainer){
					basicContent.removeFromParent(dispose);
				}else{
					var display:DisplayObject=this.getChildAt(beginIndex) as DisplayObject;
					if(display.parent)	display.parent.removeChild(display);
				}
				
			}
		}
		/**销毁*/
		public dispose():void
		{
			this.removeChildAll(0,-1,true);
			this.dataEvent=null;
		}
    }
	export class BasicView extends MoonContainer
	{
		protected createText(x:number=0,y:number=0,s:string=""):TextField
		{
			var text:TextField=(new Label).textField;
			text.x=x;text.y=y;text.text=s;
			this.addChild(text);
			return text;
		}
		protected createRect(w:number,h:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var sprite:Sprite=moon.MoonUI.getRect(w,h,c,x,y);
			this.addChild(sprite);
			return sprite;
		}
		protected createCircle(r:number,c:number=0,x:number=0,y:number=0):Sprite
		{
			var sprite:Sprite=moon.MoonUI.getCircle(r,c,x,y);
			this.addChild(sprite);
			return sprite;
		}
		protected createRectBySprite(s:Sprite,w:number,h:number,c:number=0,x:number=0,y:number=0):void
		{
			s.graphics.clear();
			s.graphics.beginFill(c);
			s.graphics.drawRect(x,y,w,h);
			s.graphics.endFill();
		}
	}
    export class MapHorizontalHouse extends MoonContainer
	{
        private rect:Rectangle;
        private house:Rectangle;
        private color:number
        public constructor(rect:Rectangle,house:Rectangle,color:number=-1)
        {
            super();
            this.rect=rect;
            this.house=house;
            this.color=color;
        }
        protected render():void
        {
            var house:Rectangle=this.house;
            var bg:Sprite=moon.MoonUI.getRect(this.rect.width,this.rect.height);
            bg.alpha=0.1;
            this.addChild(bg);

            var count:number=this.rect.width/house.width;
            var prevx:number=0;
            for(var i:number=0;i<count;i++){
                var color=this.color==-1?Math.random()*0XFFFFFF:this.color;
                var width:number=house.width+Math.random()*house.x;
                var height:number=house.height+Math.random()*house.y;
                var rect=moon.MoonUI.getRect(width,height,color);
                this.addChild(rect);
                rect.y=this.rect.height-rect.height;
                rect.x=prevx;
                prevx=rect.x+rect.width;
            }
        }
    }
	export class Scale9Image extends MoonContainer
	{
		private image:eui.Image;
		public constructor(name:string)
        {
            super();
			this.image=new eui.Image(name);
			this.image.scale9Grid=new Rectangle(4,4,2,2);
			this.addChild(this.image);
		}
		/**设置宽高，默认为0是不改变大小 */
		public setSize(w:number=0,h:number=0):void
		{
			if(w>0)	this.image.width=w;
			if(h>0)	this.image.height=h;
		}
	}
	export class BasicTips extends MoonContainer
	{
		protected image:Scale9Image;
		protected text:TextField;
		public side:number=14;//文字离边框的距离
		public lineSpacing:number=4;//行间距
		public constructor(skinName:string)
        {
            super();
			this.image=new Scale9Image(skinName);
			this.addChild(this.image);

			this.text=(new Label).textField;
			this.text.textAlign = egret.HorizontalAlign.CENTER;
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.text.lineSpacing=this.lineSpacing;
			this.addChild(this.text);
		}
		/**设置普通文字*/
		public setValue(value:string):void
		{
			this.text.text=value;
			this.setCenter();
		}
		/**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
		public setTextFlow(textFlow:egret.ITextElement[]):void
		{
			this.text.textFlow=textFlow;
			this.setCenter();
		}
		protected setCenter():void
		{
			var image:Scale9Image=this.image;
			var text:TextField=this.text;
			var side:number=this.side;
			var w:number=text.width+side;
			var h:number=text.height+side;
			image.setSize(w,h);
			text.x=text.y=side>>1;
		}
	}
	export class Label extends MoonContainer
	{
		private text:TextField;
		public constructor(str:string="",c:number=0XFFFFFF)
        {
			super();
			this.text=new TextField;
			this.text.textAlign = egret.HorizontalAlign.LEFT;
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.text.text=str;
			this.text.textColor=c;
			this.text.fontFamily=moon.FONT.fontName;
			this.addChild(this.text);
		}
		get textField():TextField
		{
			return this.text;
		}
	}
	export class BasicButton extends MoonContainer
	{
		protected statusNormal:DisplayObject;
		protected statusDown:DisplayObject;
		protected skinContainer:DisplayObjectContainer;
		protected text:TextField;
		/**皮肤大小随字体大小变化 */
		public skinAutoScale:boolean=true;
		public status:number=0;
		public constructor(normal:DisplayObject=null,down:DisplayObject=null)
        {
			super();
			this.statusNormal=normal||Skin.buttonNormal;
			this.statusDown=down||Skin.buttonDown;
			this.skinContainer=new DisplayObjectContainer;
			this.addChild(this.skinContainer);
			this.updateSkin(this.statusNormal);
			this.text=(new Label).textField;
			this.text.textAlign = egret.HorizontalAlign.CENTER;
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.addChild(this.text);

			this.touchEnabled=true;
			this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
		}
		public setLabelPoint(x:number,y:number):void
		{
			this.text.anchorOffsetX=0;
			this.text.anchorOffsetY=0;
			this.text.x=x;this.text.y=y;
		}
		set labelCircle(value:string)
		{
			this.text.text=value;
			this.skinAutoScale=false;
			this.text.x=this.text.y=0;
			this.text.anchorOffsetX=this.text.textWidth>>1;
			this.text.anchorOffsetY=this.text.textHeight>>1;
		}
		set labelColor(value:number)
		{
			this.text.textColor=value;
		}
		set label(value:string)
		{
			this.text.text=value;
			var width:number=this.text.width+20;
			this.setSkinSize();
			this.setTextPosition();
		}
		get label():string
		{
			return this.text.text;
		}
		/**设置富文字 {text:"string",style:{"size":50,"textColor":0}}*/
		public setTextFlow(textFlow:egret.ITextElement[]):void
		{
			this.text.textFlow=textFlow;
			this.setSkinSize();
			this.setTextPosition();
		}
		public setSkinNormal():void
		{
			this.updateSkin(this.statusNormal);
		}
		public setSkinDown():void
		{
			this.updateSkin(this.statusDown);
		}
		protected onTouch(e:egret.TouchEvent):void
		{
			if(e.type==egret.TouchEvent.TOUCH_BEGIN){
				this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
				this.updateSkin(this.statusDown);
			}else{
				this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
				this.updateSkin(this.statusNormal);
			}										
		}
		protected get textWidth():number
		{
			return this.text.width+20;
		}
		protected get textHeight():number
		{
			return this.text.height+20;
		}
		protected setSkinSize():void
		{
			if(this.skinAutoScale&&this.text.text!=""){
				var scale:number=this.textWidth/this.statusNormal.width;
				this.statusNormal.scaleX=this.statusDown.scaleX=scale;
				var height:number=this.textHeight;
				if(height>=this.statusNormal.height){
					scale=height/this.statusNormal.height;
					this.statusNormal.scaleY=this.statusDown.scaleY=scale;
				}
			}
		}
		protected setTextPosition():void
		{
			this.text.anchorOffsetX=this.text.width>>1;
			this.text.anchorOffsetY=this.text.height>>1;
			this.text.x=this.textWidth>>1;
			this.text.y=this.statusNormal.height>>1;
			if(this.textHeight>this.statusNormal.height){
				this.text.y=this.textHeight>>1;
			}
		}
		protected updateSkin(skin:DisplayObject):void
		{
			this.skinContainer.removeChildren();
			this.skinContainer.addChild(skin);
			this.status=skin==this.statusNormal?Const.buttonStatusNormal:Const.buttonStatusDown;
		}
		public dispose():void
		{
			this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouch,this);
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_END,this.onTouch,this);
			super.dispose();
		}
	}
	/**类似多个皮肤按钮,构造函数的参数必须大于2个且必须是2的次方
	 * 使用四个皮肤就可以模拟ToggleSwitch了
	*/
	export class MoreSkinButton extends BasicButton
	{
		protected _currentPage:number=0;
		protected skins:any[];
		protected _toggleSwitch:Boolean;
		public constructor(skins:any[])
        {
			super(skins[0],skins[1]);
			this.skins=skins;
		}
		set currentPage(value:number)
		{
			value=value*2==this.skins.length?0:value;
			this._currentPage=value;
			this.statusNormal=this.skins[value*2];
			this.statusDown=this.skins[(value*2)+1];
			this.setSkinSize();
		}
		get currentPage():number
		{
			return this._currentPage;
		}
		set toggleSwitch(value:Boolean)
		{
			this._toggleSwitch=value;
		}
		protected onTouch(e:egret.TouchEvent):void
		{
			if(e.type==egret.TouchEvent.TOUCH_END){
				if(this._toggleSwitch){
					this.currentPage=1-this.currentPage;
				}
			}
			super.onTouch(e);								
		}
	}
	/***进度条 */
	export class ProgressBar extends MoonContainer
	{
		protected skinBg:DisplayObject;
		protected skinValue:DisplayObject;
		protected text:TextField;
		protected _value:number=0;
		public constructor(bg:DisplayObject,value:DisplayObject)
        {
			super();
			this.skinBg=bg;
			this.skinValue=value;
			this.addChild(this.skinBg);
			this.addChild(this.skinValue);
			this.value=0;
			this.text=(new Label).textField;
			this.text.textAlign = egret.HorizontalAlign.CENTER;
			this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.addChild(this.text);
		}
		/**值只能是0－1之间 */
		set value(v:number)
		{
			v=v<0?0:v>1?1:v;
			this._value=v;
			this.skinValue.scaleX=v;
		}
		get value():number
		{
			return this._value;
		}
		public showText(v:string,x:number=-1,y:number=-1):void
		{
			this.text.text=v;
			if(x==-1)		this.text.x=(this.skinBg.width-this.text.width)>>1
			else			this.text.x=x;
			if(y==-1)		this.text.y=this.skinBg.height+5;
			else			this.text.y=y;
		}
	}
	/**复选框按钮 */
	export class CheckBoxBar extends BasicView implements IFace
	{
		protected items:MoreSkinButton[]=[];
		public addItemLabel(item:MoreSkinButton,str:string):void
		{
			item.skinAutoScale=false;
			item.label=str;
			this.addItem(item)
		}
		public addItem(item:MoreSkinButton):void
		{
			item.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			this.addChild(item);
			this.items.push(item);
		}
		public removeItem(item:MoreSkinButton):void
		{
			item.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			var index:number=this.items.indexOf(item);
			if(index>0) this.items.splice(index,1);
			item.removeFromParent(true);
		}
		public hasItem(index:number):boolean
		{
			return index>=0||index<this.items.length;
		}
		public getItem(index:number):MoreSkinButton
		{
			return this.items[index];
		}
		public update():void
		{

		}
		protected onClick(e:egret.TouchEvent):void
		{
			var item:MoreSkinButton=e.currentTarget as MoreSkinButton;
			this.newDispatchEvent(moon.MoonEvent.CHANGE)
		}
	}
	/**单选框按钮 */
	export class RadioButtonBar extends BasicView implements IFace
	{
		protected _selectIndex:number;
				protected items:BasicButton[]=[];
		public isAutoLayout:Boolean=false;
		public addItemLabel(item:BasicButton,str:string):void
		{
			item.skinAutoScale=false;
			item.label=str;
			this.addItem(item)
		}
		public addItem(item:BasicButton):void
		{
			item.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			this.addChild(item);
			this.items.push(item);
		}
		public removeItem(item:BasicButton):void
		{
			item.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this);
			var index:number=this.items.indexOf(item);
			if(index>0) this.items.splice(index,1);
			item.removeFromParent(true);
		}
		public hasItem(index:number):boolean
		{
			return index>=0||index<this.items.length;
		}
		public getItem(index:number):BasicButton
		{
			return this.items[index];
		}
		protected render():void
		{
			this.update();
		}
		public update():void
		{
			var item:BasicButton;
			if(this.isAutoLayout==true){
				for(var i:number=0;i<this.items.length;i++){
					item=this.items[i];
					item.x=(item.width+10)*i;
				}
			}
		}
		protected onClick(e:egret.TouchEvent):void
		{
			var item:BasicButton=e.currentTarget as BasicButton;
			this.selectIndex=this.items.indexOf(item);
			this.newDispatchEvent(moon.MoonEvent.CHANGE);
		}
		set selectIndex(index:number){
			this._selectIndex=index;
			var item:BasicButton=this.items[index];
			this.items.map(setSkinNormal,this);
			function setSkinNormal(i:BasicButton):void{
				i.setSkinNormal();
			}
			item.setSkinDown();
		}
		get selectIndex(){
			return this._selectIndex;
		}
	}
	
	export class PanelBar extends BasicView implements IFace
	{
		protected titleBg:Sprite;
		protected title:TextField;
		protected containerBg:Sprite;
		protected container:MoonContainer;
		protected containerMask:Shape;
		protected pWidth:number;
		protected pHeight:number;
		protected titleHeight:number=60;
		public constructor(pWidth:number=0,pHeight:number=0)
        {
			super();
			this.pWidth=pWidth;
			this.pHeight=pWidth;
			this.titleBg=new Sprite;
			this.containerBg=new Sprite;
			this.title=(new Label).textField;
			this.container=new MoonContainer;
        }
		/**加载到舞台之后调用 */
        protected render():void
        {
			if(this.pWidth==0&&this.pWidth==0){
				super.render();
			}else{
				this.stageWidth=this.pWidth;
				this.stageHeight=this.pHeight;
			}
			
			this.createRectBySprite(this.titleBg,this.stageWidth,this.titleHeight,moon.Color.titleBackground);
			this.createRectBySprite(this.containerBg,this.stageWidth,this.stageHeight-this.titleHeight,moon.Color.white,0,this.titleHeight);
			this.addChild(this.titleBg);
			this.addChild(this.containerBg);
			this.title.textAlign = egret.HorizontalAlign.CENTER;
			this.title.verticalAlign = egret.VerticalAlign.MIDDLE;
			this.title.anchorOffsetX=this.title.textWidth>>1;
			this.title.anchorOffsetY=this.title.textHeight>>1;
			this.title.x=this.stageWidth>>1;
			this.title.y=this.titleHeight>>1;
			this.addChild(this.title);
			this.container.y=this.titleHeight;
			this.addChild(this.container);
			this.containerMask=this.createRect(this.stageWidth,this.stageHeight-this.titleHeight,moon.Color.white,0,this.titleHeight);
			this.container.mask=this.containerMask;
			this.newDispatchEvent(MoonEvent.RENDER_COMPLETE);
        }
		public addItem(item:DisplayObject,x:number=0,y:number=0):void
		{
			if(x!=0)item.x=x;if(y!=0)item.y=y;
			this.container.addChild(item)
		}
		public removeItem(item:DisplayObject):void
		{
			if(this.container.contains(item)) this.container.removeChild(item);
		}
		public update():void{

		}
		set label(value:string){
			this.title.text=value;
		}
		get label():string{
			return this.title.text;
		}
		set colorTop(c:number){
			var w:number=this.titleBg.width,h:number=this.titleBg.height;
			this.createRectBySprite(this.titleBg,w,h,c);
		}
		set colorBottom(c:number){
			var w:number=this.containerBg.width,h:number=this.containerBg.height;
			this.createRectBySprite(this.containerBg,w,h,c,0,this.titleHeight);
		}
		get windowRect():Rectangle
		{
			var rect:Rectangle=new Rectangle(0,0,this.stageWidth,this.stageHeight);
			return rect;
		}
		public removeAll():void
		{
			this.container.dispose();
		}
	}
	export class PanelMoreManager extends BasicView implements IFace
	{
		protected items:PanelBar[]=[];
		protected radioButton:RadioButtonBar=new RadioButtonBar;
		protected container:MoonContainer;
		protected pWidth:number;
		protected pHeight:number;
		protected currentPage:number=0;
		protected posStartX:number=0;
		protected moveItems:PanelBar[]=[];
		protected panelWidth:number;
		public constructor()
        {
			super();
			this.container=new MoonContainer;
			this.addChild(this.container);
			this.radioButton.isAutoLayout=true;
		}
		public addItem(item:PanelBar):void
		{
			this.items.push(item);
		}
		public removeItem(item:PanelBar):void
		{
			var index:number=this.items.indexOf(item)
			if(index>0) this.items.splice(index,1);
		}
		public hasItem(index:number):boolean
		{
			return index>=0||index<this.items.length;
		}
		public getItem(index:number):PanelBar
		{
			return this.items[index];
		}
		public update():void
		{
			this.container.removeChildren();
			var itemW:number;
			var itemH:number;
			if(this.items.length>0){
				var item:PanelBar=this.items[0];
				this.container.addChild(item);
				itemW=item.windowRect.width;
				itemH=item.windowRect.height;
				this.panelWidth=itemW;
			}
			var len:number=this.items.length;
			for(var i:number=0;i<len;i++){
				var btn:BasicButton=new BasicButton(moon.Skin.pointNormal,moon.Skin.pointDown);
				this.radioButton.addItem(btn);
			}
			btn=this.radioButton.getItem(0);
			btn.setSkinDown();
			this.radioButton.x=(itemW-len*22)>>1;
			this.radioButton.y=itemH-20;
			this.addChild(this.radioButton);
		}
		protected render():void
		{
			this.update();
			if(this.items.length>1){
				this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
			}
        }
        protected onTouch(e: egret.TouchEvent){
            switch (e.type) {
                case egret.TouchEvent.TOUCH_BEGIN:
					this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
					this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.posStartX=e.stageX;
                    break;
				case egret.TouchEvent.TOUCH_MOVE:
					this.moveDo(e.stageX)
				break;
                case egret.TouchEvent.TOUCH_END:
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
					this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouch, this);
                    this.moveEnd(e.stageX);
                    break;
            }
        }
		protected moveDo(x:number):void
		{
			var disx:number=x-this.posStartX;
			if(Math.abs(disx)>20){
				if(this.moveItems.length==0){
					var item:PanelBar=this.items[this.currentPage];
					var width:number=this.panelWidth;
					this.moveItems.push(item);
					if(this.currentPage==0){
						item=this.items[this.currentPage+1];
						this.container.addChild(item);
						item.x=width;
						this.moveItems.push(item);
					}else if(this.currentPage==this.items.length-1){
						item=this.items[this.currentPage-1];
						this.container.addChild(item);
						item.x=-width;
						this.moveItems.push(item);
					}else{
						item=this.items[this.currentPage-1];
						this.container.addChild(item);
						item.x=-width;
						this.moveItems.push(item);
						item=this.items[this.currentPage+1];
						this.container.addChild(item);
						item.x=width;
						this.moveItems.push(item);
					}
				}
				var boo1:boolean=(this.currentPage==0&&disx>0);
				var boo2:boolean=((this.currentPage==this.items.length-1)&&disx<0)
				if(!boo1&&!boo2){
					this.container.x=disx;
				}
			}
		}
		protected moveEnd(x:number):void
		{
			if(this.container.x==0){
				this.backCall(0);
				return;
			}
			var disx:number=x-this.posStartX;
			var tw:egret.Tween=egret.Tween.get(this.container);
			var currX=this.panelWidth;
			var turnDis:number=this.panelWidth>>2;
			//至少滑动窗口宽的四分之一才可以算翻页
			if(Math.abs(disx)>turnDis){
				currX=this.panelWidth;
				currX*=disx>0?1:-1;
			}else{
				disx=0;
				currX=0;
			}
			var time:number=200;
			tw.to({x:currX},time);
			tw.call(this.backCall,this,[disx]);
		}
		/**结束翻页后的回调函数 */
		protected backCall(disx:number):void
		{
			if(disx>0){
				this.currentPage--;
				this.currentPage=this.currentPage<0?0:this.currentPage;
			}else if(disx<0){
				this.currentPage++;
				this.currentPage=this.currentPage==this.items.length?this.items.length-1:this.currentPage;
			}
			this.container.removeChildren();
			var item:PanelBar=this.items[this.currentPage];
			item.x=0;
			this.container.addChild(item);
			this.radioButton.selectIndex=this.currentPage;
			this.moveItems.length=0;
			this.container.x=0;
		}
	}
}