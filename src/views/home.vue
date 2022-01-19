<template>
  <div class="container">
    <div class="chat-content">
      <template v-if="chatList && chatList.length">
        <div
          v-for="(chat, index) in chatList"
          class="message-box"
          :class="{'right-message': chat.user.id === userInfo.user.id}"
          :key="index"
        >
          <div v-if="chat.user.id !== userInfo.user.id" class="user">
            <el-avatar  class="avatar" :src="chat.user.avatar" ></el-avatar>
            <div class="info">
              <div class="name">{{chat.user.name}}</div>
              <div class="time">{{chat.createTime}}</div>
            </div>
          </div>
          <div v-else class="user">
            <div class="info">
              <div class="time">{{chat.createTime}}</div>
              <div class="name">{{chat.user.name}}</div>
            </div>
            <el-avatar  class="avatar" :src="chat.user.avatar" ></el-avatar>
          </div>
          <div class="message"><div class="block">{{chat.message}}</div></div>
        </div>
      </template>
      <div v-else class="empty">
        没有消息
      </div>
    </div>
    <div class="chat-bottom">
      <el-input v-model="chatMsg" class="chat-input" placeholder="请输入内容" />
      <el-button class="chat-btn" type="primary" @click="sendMsg">发送</el-button>
    </div>
    <div style="margin-top: 10px;">当前用户：
      <el-select v-model="userInfo.user" value-key="id" @change="selectUser" placeholder="Select">
        <el-option
          v-for="item in userList"
          :key="item.id"
          :label="item.name"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, reactive } from 'vue';
import io from 'socket.io-client';

const avatar = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png';

export default {
  name: 'HomePage',
  setup() {
    const chatList = ref([]);
    const chatMsg = ref('');
    const userList = [{ name: '舔狗', id: 0, avatar }, { name: '女神', id: 1, avatar }];
    const userInfo = reactive({ user: userList[0] });
    let socket;
    onMounted(() => {
      socket = io('http://localhost:3001');
      socket.on('connect', () => {
        console.log(socket.id, '监听客户端连接成功-connect');
      });
      socket.on('fresh-message', (data) => {
        chatList.value = data;
      });
    });
    const selectUser = (user) => {
      userInfo.user = user;
    };
    const sendMsg = () => {
      socket.emit('send-message', userInfo.user, chatMsg.value);
      chatMsg.value = '';
    };
    return {
      chatMsg,
      chatList,
      userList,
      userInfo,

      sendMsg,
      selectUser,
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin flex($align) {
  display: flex;
  align-items: $align;
}
.container {
  padding: 24px;
}
.chat-bottom {
  @include flex(center)
}
.chat-content {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-bottom: none;
  box-sizing: border-box;
  .message-box  {
    margin-bottom: 10px;
    .message {
       margin-left: 42px;
      border-radius: 4px;
      box-sizing: border-box;
      margin-top: 5px;
      width: 100%;
      .block {
        display: inline-block;
        font-size: 14px;
        line-height: 1.5;
        border-radius: 4px;
        padding: 8px;
        background-color: #eee;
      }
    }
    .user {
      .avatar {
        width: 32px;
        height: 32px;
        margin-right: 10px;
      }
      @include flex(center);
    }
    .info {
      @include flex(center);
      font-size: 12px;
      color: #999;
      .name {
        margin-right: 10px;
      }
    }
    &.right-message {
      text-align: right;
      .message {
        padding-right: 42px;
        margin-left: auto;
      }
      .user {
        .name { margin-right: 0px; margin-left: 10px; }
        justify-content: flex-end
      }
      .avatar {
        margin-right: 0px;
        margin-left: 10px;
      }
    }
  }
}
.empty {
  font-size: 14px;
  padding: 50px 0;
  text-align: center;
}
.chat-input {
  &:deep(.el-input__inner) {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
.chat-btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
