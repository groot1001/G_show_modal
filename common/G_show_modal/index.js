/**
 * author:G brother
 * date:20200430
 * Thank:chunLei所提供的思路和参照
 * **/
export class show_model{
	constructor(option={}) {
	
		this.bodyModel=null;
		this.cancelModel=null;
		this.confirmModel=null;
		let pageHeight=uni.getSystemInfoSync().screenHeight;
		let opacity = option.opacity || 0.4;
		let model_tit=option.title||'温馨提示';
		let model_concent=option.concent||"请输入内容~"
		let clickEvent=option.IsclickEvent||false;
		let cancelVal=option.cancelVal||'取消';
		let confirmVal=option.confirmVal||'确认';
		let cancelColor=option.cancelColor||'#0F7EF5';
		let confirmColor=option.confirmColor||'#0F7EF5';
		let delCancel=option.delCancel||false;
		let align=option.align||"center"
		let fn = ()=>{}
		this.$event = option.$event || fn
		
		//#ifdef APP-PLUS
		this.creatView({height:`${pageHeight}px`,top:0},opacity,clickEvent,{'tit':model_tit,'concent':model_concent,cancelVal,confirmVal,confirmColor,cancelColor,delCancel,align})
		//#endif
	}

	//生成提示框view
	creatView(style,opa,clickEvent,modelInfo){
		style = {
			left:'0px',
			width:'100%',
			...style
		}
		
		let view = new plus.nativeObj.View('showModalView',style);
		view.draw([
			{tag:'rect',id:'modal',color:`rgba(0,0,0,${opa})`,position:{top:'0px',left:'0px',width:'100%',height:'100%'}},
		    {tag:'rect',id:'concent',color:`rgb(255,255,255)`,rectStyles:{borderWidth:'2px',radius:'5px'},position:{top:'40%',left:'10%',width:'80%',height:'21%'}},
		    {tag:'font',id:'title',text:modelInfo.tit,textStyles:{size:'20px',color:'#000'},position:{top:'42%',left:'10%',width:'80%',height:'3%'}},
		    {tag:'font',id:'text',text:modelInfo.concent,textStyles:{size:'16px',color:'#666',whiteSpace:'normal',align:modelInfo.align},position:{top:'43%',left:'14%',width:'72%',height:'11%'}},
		    {tag:'rect',id:'line',color:'#dcdcdc',position:{top:'54%',left:'10%',width:'80%',height:'1px'}},
			{tag:'rect',id:'line2',color:'#dcdcdc',position:{top:'54%',left:'49%',width:modelInfo.delCancel?'0px':'1px',height:modelInfo.delCancel?'0px':'7%'}}
			
		]);

		if(!modelInfo.delCancel){
			// 取消	
			let viewCancel=new plus.nativeObj.View('cancel',{width:'38%',height:'5%',top:'55%',left:'11%',backgroundColor:'#ffffff'});
			    viewCancel.draw([
				  {tag:'font',id:'cancel',text:modelInfo.cancelVal,textStyles:{color:modelInfo.cancelColor,size:'18px'}},
				]);
				
				viewCancel.addEventListener("click",(e)=>{
					this.$event({res:false,types:'cancel'});
					this.hide()
				},false);
				this.cancelModel=viewCancel;
		}
		
		// 确认
		let viewconfirm=new plus.nativeObj.View('confirm',{width:modelInfo.delCancel?'80%':'38%',height:'5%',top:'55%',left:modelInfo.delCancel?'10%':'51%',backgroundColor:'#ffffff'});
	        viewconfirm.draw([
			  {tag:'font',id:'confirm',text:modelInfo.confirmVal,textStyles:{color:modelInfo.confirmColor,size:'18px'}},
			]);
		
			viewconfirm.addEventListener("click",(e)=>{
				this.$event({res:true,types:'confirm'});
				this.hide();
			},false);	
		  //点击蒙布
		  if(clickEvent){
			
			 view.addEventListener("click", (e) => {
				this.$event({res:false,types:'cover'});
				this.hide()
			}, false);
		}
	   this.bodyModel=view;
	   this.confirmModel=viewconfirm;
	}
    showModalAnimationClose(){
		var options = {type:'pop-out',duration:300};
			plus.nativeObj.View.startAnimation(options,{bitmap:this.bodyModel},{bitmap:this.cancelModel},{bitmap:this.viewconfirm},function(){
				console.log('plus.nativeObj.View.startAnimation动画结束');
				// 关闭原生动画
				plus.nativeObj.View.clearAnimation();
			});
	}
	showModalAnimationOpen(){
		var options = {type:'pop-in',duration:300};
			plus.nativeObj.View.startAnimation(options,{bitmap:this.bodyModel},{bitmap:this.cancelModel},{bitmap:this.viewconfirm},function(){
				console.log('plus.nativeObj.View.startAnimation动画结束');
				// 关闭原生动画
				plus.nativeObj.View.clearAnimation();
			});
	}
	show(){
		this.showModalAnimationOpen();
		this.bodyModel.show();
		if(this.cancelModel){
			this.cancelModel.show();
		}
		this.confirmModel.show();
	
	}
	hide(){
		this.showModalAnimationClose();
		this.bodyModel.hide();
		if(this.cancelModel){
	      this.cancelModel.hide();	
		}
		this.confirmModel.hide();
		
		
	}
}

export default show_model