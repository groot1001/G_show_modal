<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onShow() {
			this.$showModal({concent:'测试测试~'}).then(res=>{
				console.log(res);
				//确认
			}).catch(res=>{
				//取消
				console.log(res);
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
