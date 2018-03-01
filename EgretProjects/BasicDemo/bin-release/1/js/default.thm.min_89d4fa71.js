function __extends(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);i.prototype=t.prototype,e.prototype=new i}window.skins={},window.generateEUI={},generateEUI.paths={},generateEUI.skins={"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml",TEST:"resource/eui_skins/TEST.exml"},generateEUI.paths["resource/askins/P2CameraSkin.exml"]=window.P2CameraSkin=function(e){function t(){e.call(this),this.skinParts=[],this.height=1500,this.width=2e3,this.elementsContent=[this._Image1_i()]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return e.anchorOffsetX=0,e.anchorOffsetY=0,e.fillMode="repeat",e.percentHeight=100,e.name="bg",e.source="bg_jpg",e.percentWidth=100,e.x=0,e.y=0,e},t}(eui.Skin),generateEUI.paths["resource/askins/ScaleModeSkin.exml"]=window.ScaleModeSkin=function(e){function t(){e.call(this),this.skinParts=[],this.height=1136,this.width=640,this.elementsContent=[this._Image1_i(),this._Button1_i()]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return e.percentHeight=100,e.source="bg_jpg",e.percentWidth=100,e.x=0,e.y=0,e},i._Button1_i=function(){var e=new eui.Button;return e.bottom=18,e.label="Button",e.right=27,e},t}(eui.Skin),generateEUI.paths["resource/askins/TestSkin.exml"]=window.TestSkin=function(e){function t(){e.call(this),this.skinParts=["tt","btn","ll","group"],this.height=640,this.width=640,this.tt_i(),this.elementsContent=[this.btn_i(),this.ll_i(),this.group_i()],eui.Binding.$bindProperties(this,["ll"],[0],this._TweenItem1,"target"),eui.Binding.$bindProperties(this,[238],[],this._Object1,"y"),eui.Binding.$bindProperties(this,[23],[],this._Object2,"y"),eui.Binding.$bindProperties(this,["btn"],[0],this._TweenItem2,"target"),eui.Binding.$bindProperties(this,[90.87],[],this._Object3,"rotation"),eui.Binding.$bindProperties(this,[271.61],[],this._Object4,"rotation"),eui.Binding.$bindProperties(this,[59],[],this._Object4,"x"),eui.Binding.$bindProperties(this,[37.06],[],this._Object4,"y"),eui.Binding.$bindProperties(this,["group"],[0],this._TweenItem3,"target"),eui.Binding.$bindProperties(this,[39.25],[],this._Object5,"rotation"),eui.Binding.$bindProperties(this,[278.54],[],this._Object6,"x"),eui.Binding.$bindProperties(this,[18.58],[],this._Object6,"y")}__extends(t,e);var i=t.prototype;return i.tt_i=function(){var e=new egret.tween.TweenGroup;return this.tt=e,e.items=[this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i()],e},i._TweenItem1_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem1=e,e.paths=[this._Set1_i(),this._To1_i(),this._To2_i()],e},i._Set1_i=function(){var e=new egret.tween.Set;return e},i._To1_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object1_i(),e},i._Object1_i=function(){var e={};return this._Object1=e,e},i._To2_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object2_i(),e},i._Object2_i=function(){var e={};return this._Object2=e,e},i._TweenItem2_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem2=e,e.paths=[this._Set2_i(),this._To3_i(),this._To4_i()],e},i._Set2_i=function(){var e=new egret.tween.Set;return e},i._To3_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object3_i(),e},i._Object3_i=function(){var e={};return this._Object3=e,e},i._To4_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object4_i(),e},i._Object4_i=function(){var e={};return this._Object4=e,e},i._TweenItem3_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem3=e,e.paths=[this._Set3_i(),this._To5_i(),this._To6_i()],e},i._Set3_i=function(){var e=new egret.tween.Set;return e},i._To5_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object5_i(),e},i._Object5_i=function(){var e={};return this._Object5=e,e},i._To6_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object6_i(),e},i._Object6_i=function(){var e={};return this._Object6=e,e},i.btn_i=function(){var e=new eui.Button;return this.btn=e,e.anchorOffsetX=0,e.anchorOffsetY=0,e.label="Button",e.name="ghjg",e.x=262,e.y=162,e},i.ll_i=function(){var e=new eui.Label;return this.ll=e,e.text="Label",e.x=174,e.y=0,e},i.group_i=function(){var e=new eui.Group;return this.group=e,e.height=200,e.width=200,e.x=0,e.y=80,e.elementsContent=[this._Button1_i(),this._Button2_i()],e},i._Button1_i=function(){var e=new eui.Button;return e.label="Button",e.name="btn1-1",e.x=17,e.y=12,e},i._Button2_i=function(){var e=new eui.Button;return e.label="Button",e.name="rterter",e.x=96,e.y=80,e},t}(eui.Skin),generateEUI.paths["resource/askins/WHG_control.exml"]=window.WHG_control=function(e){function t(){e.call(this),this.skinParts=["arrow_r","arrow_l","arrow_d","arrow_u"],this.height=1136,this.width=640,this.elementsContent=[this._Image1_i(),this.arrow_r_i(),this.arrow_l_i(),this.arrow_d_i(),this.arrow_u_i()]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return e.height=380,e.horizontalCenter=0,e.source="arrowControl_png",e.verticalCenter=300,e.width=380,e},i.arrow_r_i=function(){var e=new eui.Image;return this.arrow_r=e,e.height=73,e.source="arrow_png",e.width=105,e.x=373,e.y=835.14,e},i.arrow_l_i=function(){var e=new eui.Image;return this.arrow_l=e,e.height=73,e.rotation=180,e.source="arrow_png",e.width=105,e.x=268,e.y=906.8,e},i.arrow_d_i=function(){var e=new eui.Image;return this.arrow_d=e,e.height=73,e.rotation=90.09,e.source="arrow_png",e.width=105,e.x=356.58,e.y=924.91,e},i.arrow_u_i=function(){var e=new eui.Image;return this.arrow_u=e,e.height=73,e.rotation=270.09,e.source="arrow_png",e.width=105,e.x=283.42,e.y=819.03,e},t}(eui.Skin),generateEUI.paths["resource/askins/WHG_level1.exml"]=window.WHG_level1=function(e){function t(){e.call(this),this.skinParts=["test1","image","image0","image1","image2"],this.height=640,this.width=640,this.test1_i(),this.elementsContent=[this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.image_i(),this.image0_i(),this.image1_i(),this.image2_i()],eui.Binding.$bindProperties(this,["image"],[0],this._TweenItem1,"target"),eui.Binding.$bindProperties(this,[200.9],[],this._Object1,"x"),eui.Binding.$bindProperties(this,[370.1],[],this._Object1,"y"),eui.Binding.$bindProperties(this,[200.5],[],this._Object2,"x"),eui.Binding.$bindProperties(this,[271.3],[],this._Object2,"y"),eui.Binding.$bindProperties(this,["image0"],[0],this._TweenItem2,"target"),eui.Binding.$bindProperties(this,[272.8],[],this._Object3,"y"),eui.Binding.$bindProperties(this,[271.9],[],this._Object4,"x"),eui.Binding.$bindProperties(this,[369.3],[],this._Object4,"y"),eui.Binding.$bindProperties(this,["image1"],[0],this._TweenItem3,"target"),eui.Binding.$bindProperties(this,[368.4],[],this._Object5,"x"),eui.Binding.$bindProperties(this,[369.3],[],this._Object5,"y"),eui.Binding.$bindProperties(this,[366.4],[],this._Object6,"x"),eui.Binding.$bindProperties(this,[271.3],[],this._Object6,"y"),eui.Binding.$bindProperties(this,["image2"],[0],this._TweenItem4,"target"),eui.Binding.$bindProperties(this,[438.9],[],this._Object7,"x"),eui.Binding.$bindProperties(this,[272.8],[],this._Object7,"y"),eui.Binding.$bindProperties(this,[369.3],[],this._Object8,"y")}__extends(t,e);var i=t.prototype;return i.test1_i=function(){var e=new egret.tween.TweenGroup;return this.test1=e,e.items=[this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i()],e},i._TweenItem1_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem1=e,e.paths=[this._Set1_i(),this._To1_i(),this._To2_i()],e},i._Set1_i=function(){var e=new egret.tween.Set;return e},i._To1_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object1_i(),e},i._Object1_i=function(){var e={};return this._Object1=e,e},i._To2_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object2_i(),e},i._Object2_i=function(){var e={};return this._Object2=e,e},i._TweenItem2_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem2=e,e.paths=[this._Set2_i(),this._To3_i(),this._To4_i()],e},i._Set2_i=function(){var e=new egret.tween.Set;return e},i._To3_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object3_i(),e},i._Object3_i=function(){var e={};return this._Object3=e,e},i._To4_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object4_i(),e},i._Object4_i=function(){var e={};return this._Object4=e,e},i._TweenItem3_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem3=e,e.paths=[this._Set3_i(),this._To5_i(),this._To6_i()],e},i._Set3_i=function(){var e=new egret.tween.Set;return e},i._To5_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object5_i(),e},i._Object5_i=function(){var e={};return this._Object5=e,e},i._To6_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object6_i(),e},i._Object6_i=function(){var e={};return this._Object6=e,e},i._TweenItem4_i=function(){var e=new egret.tween.TweenItem;return this._TweenItem4=e,e.paths=[this._Set4_i(),this._To7_i(),this._To8_i()],e},i._Set4_i=function(){var e=new egret.tween.Set;return e},i._To7_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object7_i(),e},i._Object7_i=function(){var e={};return this._Object7=e,e},i._To8_i=function(){var e=new egret.tween.To;return e.duration=500,e.props=this._Object8_i(),e},i._Object8_i=function(){var e={};return this._Object8=e,e},i._Image1_i=function(){var e=new eui.Image;return e.percentHeight=100,e.name="background",e.source="bg2_jpg",e.percentWidth=100,e.x=0,e.y=0,e},i._Image2_i=function(){var e=new eui.Image;return e.percentHeight=100,e.name="wall",e.source="wall_png",e.percentWidth=100,e.x=0,e.y=0,e},i._Image3_i=function(){var e=new eui.Image;return e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=183,e.name="safeArea1",e.source="safeArea_png",e.width=97,e.x=24,e.y=228,e},i._Image4_i=function(){var e=new eui.Image;return e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=183,e.name="safeArea2",e.source="safeArea_png",e.width=96,e.x=522,e.y=227.5,e},i._Image5_i=function(){var e=new eui.Image;return e.anchorOffsetX=10,e.anchorOffsetY=10,e.height=20,e.name="player",e.source="player_png",e.width=20,e.x=99,e.y=395.25,e},i.image_i=function(){var e=new eui.Image;return this.image=e,e.anchorOffsetX=8,e.anchorOffsetY=8,e.height=16,e.source="enemy_png",e.width=16,e.x=200.5,e.y=274.5,e},i.image0_i=function(){var e=new eui.Image;return this.image0=e,e.anchorOffsetX=8,e.anchorOffsetY=8,e.height=16,e.source="enemy_png",e.width=16,e.x=272.4,e.y=365.8,e},i.image1_i=function(){var e=new eui.Image;return this.image1=e,e.anchorOffsetX=8,e.anchorOffsetY=8,e.height=16,e.source="enemy_png",e.width=16,e.x=366.4,e.y=272.8,e},i.image2_i=function(){var e=new eui.Image;return this.image2=e,e.anchorOffsetX=8,e.anchorOffsetY=8,e.height=16,e.source="enemy_png",e.width=16,e.x=442.4,e.y=369.3,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/ButtonSkin.exml"]=window.skins.ButtonSkin=function(e){function t(){e.call(this),this.skinParts=["labelDisplay","iconDisplay"],this.minHeight=50,this.minWidth=100,this.elementsContent=[this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","source","button_down_png")]),new eui.State("disabled",[new eui.SetProperty("_Image1","alpha",.5)])]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.percentHeight=100,e.scale9Grid=new egret.Rectangle(1,3,8,8),e.source="button_up_png",e.percentWidth=100,e},i.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.bottom=8,e.left=8,e.right=8,e.size=20,e.textAlign="center",e.textColor=16777215,e.top=8,e.verticalAlign="middle",e},i.iconDisplay_i=function(){var e=new eui.Image;return this.iconDisplay=e,e.horizontalCenter=0,e.verticalCenter=0,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/CheckBoxSkin.exml"]=window.skins.CheckBoxSkin=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.elementsContent=[this._Group1_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","alpha",.7)]),new eui.State("disabled",[new eui.SetProperty("_Image1","alpha",.5)]),new eui.State("upAndSelected",[new eui.SetProperty("_Image1","source","checkbox_select_up_png")]),new eui.State("downAndSelected",[new eui.SetProperty("_Image1","source","checkbox_select_down_png")]),new eui.State("disabledAndSelected",[new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")])]}__extends(t,e);var i=t.prototype;return i._Group1_i=function(){var e=new eui.Group;return e.percentHeight=100,e.percentWidth=100,e.layout=this._HorizontalLayout1_i(),e.elementsContent=[this._Image1_i(),this.labelDisplay_i()],e},i._HorizontalLayout1_i=function(){var e=new eui.HorizontalLayout;return e.verticalAlign="middle",e},i._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.alpha=1,e.fillMode="scale",e.source="checkbox_unselect_png",e},i.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.fontFamily="Tahoma",e.size=20,e.textAlign="center",e.textColor=7368816,e.verticalAlign="middle",e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/HScrollBarSkin.exml"]=window.skins.HScrollBarSkin=function(e){function t(){e.call(this),this.skinParts=["thumb"],this.minHeight=8,this.minWidth=20,this.elementsContent=[this.thumb_i()]}__extends(t,e);var i=t.prototype;return i.thumb_i=function(){var e=new eui.Image;return this.thumb=e,e.height=8,e.scale9Grid=new egret.Rectangle(3,3,2,2),e.source="roundthumb_png",e.verticalCenter=0,e.width=30,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/HSliderSkin.exml"]=window.skins.HSliderSkin=function(e){function t(){e.call(this),this.skinParts=["track","thumb"],this.minHeight=8,this.minWidth=20,this.elementsContent=[this.track_i(),this.thumb_i()]}__extends(t,e);var i=t.prototype;return i.track_i=function(){var e=new eui.Image;return this.track=e,e.height=6,e.scale9Grid=new egret.Rectangle(1,1,4,4),e.source="track_sb_png",e.verticalCenter=0,e.percentWidth=100,e},i.thumb_i=function(){var e=new eui.Image;return this.thumb=e,e.source="thumb_png",e.verticalCenter=0,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/ItemRendererSkin.exml"]=window.skins.ItemRendererSkin=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.minHeight=50,this.minWidth=100,this.elementsContent=[this._Image1_i(),this.labelDisplay_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","source","button_down_png")]),new eui.State("disabled",[new eui.SetProperty("_Image1","alpha",.5)])],eui.Binding.$bindProperties(this,["hostComponent.data"],[0],this.labelDisplay,"text")}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.percentHeight=100,e.scale9Grid=new egret.Rectangle(1,3,8,8),e.source="button_up_png",e.percentWidth=100,e},i.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.bottom=8,e.fontFamily="Tahoma",e.left=8,e.right=8,e.size=20,e.textAlign="center",e.textColor=16777215,e.top=8,e.verticalAlign="middle",e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/PanelSkin.exml"]=window.skins.PanelSkin=function(e){function t(){e.call(this),this.skinParts=["titleDisplay","moveArea","closeButton"],this.minHeight=230,this.minWidth=450,this.elementsContent=[this._Image1_i(),this.moveArea_i(),this.closeButton_i()]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return e.bottom=0,e.left=0,e.right=0,e.scale9Grid=new egret.Rectangle(2,2,12,12),e.source="border_png",e.top=0,e},i.moveArea_i=function(){var e=new eui.Group;return this.moveArea=e,e.height=45,e.left=0,e.right=0,e.top=0,e.elementsContent=[this._Image2_i(),this.titleDisplay_i()],e},i._Image2_i=function(){var e=new eui.Image;return e.bottom=0,e.left=0,e.right=0,e.source="header_png",e.top=0,e},i.titleDisplay_i=function(){var e=new eui.Label;return this.titleDisplay=e,e.fontFamily="Tahoma",e.left=15,e.right=5,e.size=20,e.textColor=16777215,e.verticalCenter=0,e.wordWrap=!1,e},i.closeButton_i=function(){var e=new eui.Button;return this.closeButton=e,e.bottom=5,e.horizontalCenter=0,e.label="close",e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/ProgressBarSkin.exml"]=window.skins.ProgressBarSkin=function(e){function t(){e.call(this),this.skinParts=["thumb","labelDisplay"],this.minHeight=18,this.minWidth=30,this.elementsContent=[this._Image1_i(),this.thumb_i(),this.labelDisplay_i()]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return e.percentHeight=100,e.scale9Grid=new egret.Rectangle(1,1,4,4),e.source="track_pb_png",e.verticalCenter=0,e.percentWidth=100,e},i.thumb_i=function(){var e=new eui.Image;return this.thumb=e,e.percentHeight=100,e.source="thumb_pb_png",e.percentWidth=100,e},i.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.fontFamily="Tahoma",e.horizontalCenter=0,e.size=15,e.textAlign="center",e.textColor=7368816,e.verticalAlign="middle",e.verticalCenter=0,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/RadioButtonSkin.exml"]=window.skins.RadioButtonSkin=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.elementsContent=[this._Group1_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","alpha",.7)]),new eui.State("disabled",[new eui.SetProperty("_Image1","alpha",.5)]),new eui.State("upAndSelected",[new eui.SetProperty("_Image1","source","radiobutton_select_up_png")]),new eui.State("downAndSelected",[new eui.SetProperty("_Image1","source","radiobutton_select_down_png")]),new eui.State("disabledAndSelected",[new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")])]}__extends(t,e);var i=t.prototype;return i._Group1_i=function(){var e=new eui.Group;return e.percentHeight=100,e.percentWidth=100,e.layout=this._HorizontalLayout1_i(),e.elementsContent=[this._Image1_i(),this.labelDisplay_i()],e},i._HorizontalLayout1_i=function(){var e=new eui.HorizontalLayout;return e.verticalAlign="middle",e},i._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.alpha=1,e.fillMode="scale",e.source="radiobutton_unselect_png",e},i.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.fontFamily="Tahoma",e.size=20,e.textAlign="center",e.textColor=7368816,e.verticalAlign="middle",e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/ScrollerSkin.exml"]=window.skins.ScrollerSkin=function(e){function t(){e.call(this),this.skinParts=["horizontalScrollBar","verticalScrollBar"],this.minHeight=20,this.minWidth=20,this.elementsContent=[this.horizontalScrollBar_i(),this.verticalScrollBar_i()]}__extends(t,e);var i=t.prototype;return i.horizontalScrollBar_i=function(){var e=new eui.HScrollBar;return this.horizontalScrollBar=e,e.bottom=0,e.percentWidth=100,e},i.verticalScrollBar_i=function(){var e=new eui.VScrollBar;return this.verticalScrollBar=e,e.percentHeight=100,e.right=0,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/TextInputSkin.exml"]=window.skins.TextInputSkin=function(e){function t(){e.call(this),this.skinParts=["textDisplay","promptDisplay"],this.minHeight=40,this.minWidth=300,this.elementsContent=[this._Image1_i(),this._Rect1_i(),this.textDisplay_i()],this.promptDisplay_i(),this.states=[new eui.State("normal",[]),new eui.State("disabled",[new eui.SetProperty("textDisplay","textColor",16711680)]),new eui.State("normalWithPrompt",[new eui.AddItems("promptDisplay","",1,"")]),new eui.State("disabledWithPrompt",[new eui.AddItems("promptDisplay","",1,"")])]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return e.percentHeight=100,e.scale9Grid=new egret.Rectangle(1,3,8,8),e.source="button_up_png",e.percentWidth=100,e},i._Rect1_i=function(){var e=new eui.Rect;return e.fillColor=16777215,e.percentHeight=100,e.percentWidth=100,e},i.textDisplay_i=function(){var e=new eui.EditableText;return this.textDisplay=e,e.height=24,e.left="10",e.right="10",e.size=20,e.textColor=0,e.verticalCenter="0",e.percentWidth=100,e},i.promptDisplay_i=function(){var e=new eui.Label;return this.promptDisplay=e,e.height=24,e.left=10,e.right=10,e.size=20,e.textColor=11119017,e.touchEnabled=!1,e.verticalCenter=0,e.percentWidth=100,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/ToggleSwitchSkin.exml"]=window.skins.ToggleSwitchSkin=function(e){function t(){e.call(this),this.skinParts=[],this.elementsContent=[this._Image1_i(),this._Image2_i()],this.states=[new eui.State("up",[new eui.SetProperty("_Image1","source","off_png")]),new eui.State("down",[new eui.SetProperty("_Image1","source","off_png")]),new eui.State("disabled",[new eui.SetProperty("_Image1","source","off_png")]),new eui.State("upAndSelected",[new eui.SetProperty("_Image2","horizontalCenter",18)]),new eui.State("downAndSelected",[new eui.SetProperty("_Image2","horizontalCenter",18)]),new eui.State("disabledAndSelected",[new eui.SetProperty("_Image2","horizontalCenter",18)])]}__extends(t,e);var i=t.prototype;return i._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.source="on_png",e},i._Image2_i=function(){var e=new eui.Image;return this._Image2=e,e.horizontalCenter=-18,e.source="handle_png",e.verticalCenter=0,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/VScrollBarSkin.exml"]=window.skins.VScrollBarSkin=function(e){function t(){e.call(this),this.skinParts=["thumb"],this.minHeight=20,this.minWidth=8,this.elementsContent=[this.thumb_i()]}__extends(t,e);var i=t.prototype;return i.thumb_i=function(){var e=new eui.Image;return this.thumb=e,e.height=30,e.horizontalCenter=0,e.scale9Grid=new egret.Rectangle(3,3,2,2),e.source="roundthumb_png",e.width=8,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/VSliderSkin.exml"]=window.skins.VSliderSkin=function(e){function t(){e.call(this),this.skinParts=["track","thumb"],this.minHeight=30,this.minWidth=25,this.elementsContent=[this.track_i(),this.thumb_i()]}__extends(t,e);var i=t.prototype;return i.track_i=function(){var e=new eui.Image;return this.track=e,e.percentHeight=100,e.horizontalCenter=0,e.scale9Grid=new egret.Rectangle(1,1,4,4),e.source="track_png",e.width=7,e},i.thumb_i=function(){var e=new eui.Image;return this.thumb=e,e.horizontalCenter=0,e.source="thumb_png",e},t}(eui.Skin);