<template>
  <div id="main">
    <headerTop ></headerTop>
    <div id="modulars"> <!-- 模块 -->
        <ul>
          <li @click="changeType(1,'喜事（婚庆）')" class="type1" ref="refType1">喜事（婚庆）</li>
          <li @click="changeType(2,'喜事（乔迁之喜）')" class="type2" ref="refType2">喜事（乔迁之喜）</li>
          <li @click="changeType(3,'喜事（冠礼）')" class="type3" ref="refType3">喜事（冠礼）</li>
          <li @click="changeType(4,'喜事（升官）')" class="type4" ref="refType4">喜事（升官）</li>
          <li @click="changeType(5,'喜事（开府）')" class="type5" ref="refType5">喜事（开府）</li>
          <li @click="changeType(6,'喜事（满月）')" class="type6" ref="refType6">喜事（满月）</li>
          <li @click="changeType(7,'丧葬')" class="type7" ref="refType7">丧葬</li>
        </ul>
    </div>
    <div id="list">
      <el-table
          :data="tableData.slice((queryInfo.page - 1) * queryInfo.pageSize,queryInfo.page * queryInfo.pageSize)"
          style="width: 100%;"
          ref="multipleTable">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="date"
            label="类别"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="礼金"
            sortable
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            width="250">
        </el-table-column>
        <el-table-column
            align="right" key="slot">
          <template slot="header" >
            <el-input
                v-model="searchName"
                size="mini"
                clearable
                placeholder="输入关键字搜索 姓名" /><br />
            <el-input
                v-model="searchAddress"
                size="mini"
                clearable
                placeholder="输入关键字搜索 地址" />
          </template>
          <template #default="scope">
            <el-button
                size="mini"
                @click="dialogFormVisible = true" icon="el-icon-edit" circle></el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row.id)" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 选择完成按钮 -->
      <div style="text-align: right;margin-top: 5px">
        <el-button type="primary" round  @click="dialogFormVisible=true"  size="small">新增来访客人</el-button>
      </div>

      <!-- 嵌套表单的 Dialog -->
      <el-dialog :title="holdName" :visible.sync="dialogFormVisible" align="center">
        <el-form :model="form">
          <el-form-item label="活动名称：" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="活动区域：" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible=false">取 消</el-button>
          <el-button type="primary" @click="open">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 分页功能 -->

      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.page"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="queryInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          style="text-align: center;margin-top: 10px"
      ></el-pagination>




    </div>

  </div>
</template>

<script>

import headerTop from "@/components/Header";
import {ref} from 'vue'
import {cashGift, userLogin} from '@/http' ;

// const sectionRef = ref()


export default {
  /** 组件调用 */
  components:{
    headerTop
  },
  name: "CshGiftCalculation"    ,//礼金计算
  mounted () {
    document.body.style.backgroundImage = ''

    let _this = this ;
  },
  watch:{
    searchName:function(uname){
          // alert(uname)
    },
    searchAddress:function(uname){
      // alert(uname)
    }
  },
  methods: {
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.dialogFormVisible = false ;
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize;
    },
    handleCurrentChange(newPage) {
      this.queryInfo.page = newPage;
    },
    changeType(type,tname){
      let _this = this ;
      _this.holdType = type ;
      _this.holdName = tname ;
      let token = _this.$cookies.get("token") ;
      let param = {"type":type,"token":token};

      // 待修改
      cashGift(param).then((res) => {

        let type = res.code === 200 ? 'success' : 'warning' ;
        _this.$message({
          message: res.message,
          type:type
        });

        if(res.code === 200){
          this.$cookies.set("token",res.data.token,'1d')
          _this.$router.push("/HomeBlog");
        }

      }).catch((error) => {
        console.log('账号或密码有误，请重新登陆！')
      })
    },
    handleEdit(hid) {
      console.log(hid);
    },
    handleDelete(hid) {
      console.log(hid);
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      queryInfo:{
        page:1,
        pageSize: 10,
        userName: null
      },
      holdType: 1 ,
      holdName:'喜事（婚庆）',
      searchName: '',
      searchAddress:'',
      form: {
        sponsor: '',
        holdTime: '',
        guest: '',
        operationTime: '',
        cashGift: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogFormVisible: false,
      formLabelWidth: '100px'
    }
  }
}

</script>

<style scoped>
#modulars ul{
  text-align: center;
}
#modulars ul li{
  list-style-type: none;
  display: inline;
  margin: 20px;
  padding: 10px 10px 10px 10px;
  border: indianred solid 1px;
  background-color: pink;
  border-radius: 5px;
}
#modulars ul li:hover{
  cursor: pointer;
}
#modulars ul li:hover{
  cursor: pointer;
  color: white;
  background-color: #2796dc;
}

el-table{
  margin: 30px auto;
  text-align: center;
}
#list{
  margin: 30px auto;
  /*border: #00bbff solid 1px;*/
  /*width: 80%;*/
  /*padding-left: 100px;*/
}
.el-dialog{
  width: 32%;
}
</style>