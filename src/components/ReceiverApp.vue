<template>
  <div id="receiver-app">
    <div>
        <h2>Receiver</h2>
        <div v-for="item in list">
            <el-alert
                v-if="list"
                title="이벤트 전송완료"
                type="info"
                :closable="false"
                :description="item">
            </el-alert>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'receiver-app',
    data () {
        return {
            list: []
        }
    },
    created() {
        this.$eventBus.$on('message', this.onReceive);
    },
    methods: {
        onReceive(text) {
            var self = this;
            this.list.push(text);
            setTimeout(function() {
                self.list.shift()
            }, 5000);
        }
    }
}
</script>

<style>

#receiver-app {
    border:1px solid #BBBBBB;
    border-radius: 10px;
    padding:20px;
}

</style>