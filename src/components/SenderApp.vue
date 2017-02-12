<template>
  <div id="sender-app">
    <div>
        <h2>Sender</h2>
        <el-input placeholder="Please input" v-model="text"></el-input>
        <el-button @click="sender">send event</el-button>
        <transition name="fade">
            <el-alert
                v-if="receiveText"
                title="이벤트 전송완료"
                type="success"
                :closable="false"
                :description="receiveText">
            </el-alert>
        </transition>
    </div>
  </div>
</template>

<script>
export default {
    name: 'sender-app',
    data () {
        return {
            text: '',
            receiveText: ''
        }
    },
    created() {
        this.$eventBus.$on('message', this.onReceive);
    },
    methods: {
        sender() {
            this.$eventBus.$emit('message', this.text);
            this.text = '';
            var input = document.getElementsByTagName('input')[0];
            input.focus();
        },
        onReceive(text) {
            var self = this;
            this.receiveText = text;
            setTimeout(function() {
                self.receiveText = '';
            }, 1500);
        }
    }
}
</script>

<style>

#sender-app {
    border:1px solid #BBBBBB;
    border-radius: 10px;
    padding:20px;
}

</style>