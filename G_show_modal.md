# 插件特点
1.简单易用,导入即用。
2.无须而外配置。
3.自定义灵活度高
4.全局使用，原始用法。
5.代码量少，原生渲染。
# options参数说明
|变量名|说明|类型|默认值|
|--	|--	|--	|--	|
|opacity|蒙布透明度|number|0.4|
|title|	提示框标题|string|温馨提示|
|concent|提示框内容|string|请输入内容~|
|align|内容对齐方式,可取值：left,right,center|string|center|
|delCancel|删除取消项|boolean|false|
|IsclickEvent|是否点击模板关闭弹框|boolean|false|
|cancelVal|左边按钮文字|string|'取消'|
|confirmVal|右边按钮文字|string|'确认'|
|cancelColor|左边按钮文字颜色|string|#0F7EF5|
|confirmColor|左边按钮文字颜色|string|#0F7EF5|


# 使用方式
在main.js 引入G_show_modal并挂载全局

``` javascript
import G_show_modal from '@/common/G_show_modal/g_show_modal.js'
Vue.use(G_show_modal)
```
在页面上使用：

``` javascript
	onLoad() {
          this.$showModal({concent:'测试测试~'}).then(res=>{
          	console.log(res);
          	//确认
          }).catch(res=>{
          	//取消
          	console.log(res);
          })
		}
```

# 注意：该插件暂时只支持app端。