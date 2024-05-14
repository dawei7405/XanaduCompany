<template>
  <el-card>
    <el-table
      :data="tableData"
      height="500"
      stripe
      :row-style="{height:50+'px'}"
      :cell-style="{padding:0+'px'}"
      style="width: 100%"
    >
      <!--      :default-sort="{prop: 'username', order: 'ascending'}"-->
      <el-table-column
        v-if="false"
        prop="id"
        label="id"
      ></el-table-column>

      <el-table-column
        prop="username"
        label="客户姓名"
        width="120"
        show-overflow-tooltip
        header-align="center"
        align="center"
        sortable></el-table-column>
      <el-table-column
        prop="phone"
        label="客户电话"
        width="150"
        show-overflow-tooltip
        header-align="center"
        align="center"></el-table-column>
      <el-table-column
        prop="email"
        label="客户邮箱"
        min-width="150"
        show-overflow-tooltip
        header-align="center"
        align="center"></el-table-column>
      <el-table-column
        prop="desc"
        label="反馈信息"
        width="150"
        show-overflow-tooltip
        header-align="center"
        align="center"></el-table-column>
      <el-table-column
        prop="result"
        label="处理结果"
        width="150"
        show-overflow-tooltip
        header-align="center"
        align="center"></el-table-column>
      <el-table-column
        v-slot="scope"
        label="处理状态"
        width="80"
        header-align="center"
        align="center"
      >
        <el-tag
          v-if="scope.row.status=='0'"
          type="danger"
        >
          待处理
        </el-tag>
        <el-tag
          v-else
          type="success"
        >
          已处理
        </el-tag>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="反馈时间"
        width="150"
        show-overflow-tooltip
        header-align="center"
        align="center"
        sortable></el-table-column>

      <el-table-column
        prop="updateTime"
        label="更新时间"
        width="150"
        show-overflow-tooltip
        header-align="center"
        align="center"
        sortable></el-table-column>

      <el-table-column
        v-slot="scope"
        label="操作"
        width="100"
        header-align="center"
        align="center"
      >
        <el-button type="primary" round plain size="small" @click="editClick(scope.row)">处理</el-button>

      </el-table-column>
    </el-table>

    <div>
      <el-dialog
        title="处理反馈信息"
        style="text-align: center ;"
        :visible.sync="dialogVisible"
        width="50%"
        class="message-edit-dialog"
      >
        <el-form
          style="text-align: center"
          ref="messageForm"
          :model="messageForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="客户姓名">
                <el-input disabled v-model="messageForm.username"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="客户电话">
                <el-input disabled v-model="messageForm.phone"></el-input>
              </el-form-item>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="客户邮箱">
                <el-input disabled v-model="messageForm.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="反馈信息">
                <el-input disabled type="textarea" rows="5" v-model="messageForm.desc"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="处理结果">
                <el-input type="textarea" maxlength="500" show-word-limit="true"
                          rows="5" v-model="messageForm.result"></el-input>
              </el-form-item>
            </el-col>
          </el-row>


          <el-row>
            <el-col :span="24">
              <el-form-item
                label="处理状态"
                prop="role_id"
              >
                <el-select
                  v-model="messageForm.status"
                  filterable
                >
                  <el-option
                    v-for="item in statusList"
                    :key="item.key"
                    :label="item.value"
                    :value="item.key"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-button
          round
          plain
          type="danger"
          @click="dialogVisible = false"
        >取 消
        </el-button>
        <el-button
          round
          plain
          type="primary"
          @click="dealMessage"
        >确定处理
        </el-button>
      </el-dialog>
    </div>
  </el-card>

</template>

<script>
  import {getMessageList, dealMessage} from '@/api/message'

  export default {
    name: 'ProductList',
    components: {},
    data() {
      return {
        dialogVisible: false,
        tableData: [],
        messageForm: {
          id: '',
          username: '',
          phone: '',
          email: '',
          desc: '',
          status: '',
          result: ''
        },
        statusList: [
          {
            key: 0,
            value: '未处理'
          },
          {
            key: 1,
            value: '已处理'
          }
        ]

      }
    },
    // 每次进入路有前，重新获取数据
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.MessageList()
      })
    },
    methods: {
      MessageList() {
        getMessageList().then(response => {
          const res = response.data
          if (res.status === 200) {
            this.tableData = res.data.list
          } else {
            this.$message.error('获取反馈列表失败')
          }
        })
      },
      // // 点击编辑产品按钮
      editClick(value) {
        this.dialogVisible = true
        this.messageForm = {
          id: value.id,
          username: value.username,
          phone: value.phone,
          email: value.email,
          desc: value.desc,
          status: value.status,
          result: value.result
        }
      },
      dealMessage() {
        dealMessage(this.messageForm).then(response => {
          const res = response.data
          if (res.status === 200) {
            this.$message.success(res.msg)
            this.dialogVisible = false
            this.MessageList()
          } else {
            this.$message.error(res.msg)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-card {
    margin: 20px;
  }

  .el-popover__reference {
    margin-left: 20px;
  }


</style>
