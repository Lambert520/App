复习：

    支付（element-ui + qrcode） + 个人中心（二级路由）

1）个人中心完成

    面试的时候：是否封装过组件，封装过：分页器日历
    个人中心中：分页器

2）全局守卫

    未登录访问：
        交易相关（trade）
        支付相关（pay、paysuccess）
        用户中心（center）
        要相关跳转到登录页

3）路由独享守卫

    beforeEnter
    只给某一个路由使用

    只有从购物车界面才能跳转到交易界面（创建订单）
    只有从交易界面（创建订单）页面擦能跳转到支付界面
    只有从支付界面才能跳转到支付成功界面

4）图片的懒加载（插件，还有进度条，二维码）

    http://www.npmjs.com/package/vue-lazyload
    自定义插件（为了解释懒加载组件用法而讲）

5）vee-validate 基本使用

    第一步：插件安装与引入
    cnpm i vee-validate@2 --save 安装的插件安装 2版本的
    import VeeValidate from 'vee-validate
    import zh_CN from 'vee-validate/dist/locale/zh_CN'
    Vue.use(VeeValidate)

    第二步：提示信息
    VeeValidate.Validator.localize('zh_CN',{
        messages: {
            ...zh_CN.messages,
            is: (field) => `${field}必须与密码相同` //修改内置规则的 message，让确认密码和密码相同
        },
        attributes: {
            //给校验的 field 属性名映射中文名称
            phone: '手机号',
            code: '验证码',
            password: '密码',
            passwordChecked: '确认密码',
            isChecked: '协议'
        }
    })

    第三步：基本使用
    <input 
        placeholder="请输入你的手机号"
        v-model="phone"
        name = "phone"
        v-validate="{required: true, regex: ./^1\d{10}$/.}"
        :class="{invalid: errors.has('phone')}"
    />
    <span class="error-msg">{{errors.first('phone')}}</span>

    const success = await this.$validator.validateAll(); //全部表单是否验证成功

    VeeValidate.Validator.extend('agree', {
        validate: value = >{
            return value
        },
        getMessage: field = >field + '必须同意'
    })

6）路由的懒加载（进行路由的按需加载，访问到哪个路由，就加载那个路由）
    当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

7）打包上线
    7.1 打包 npm run build
    项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
    有了map就可以向未加密的代码一样，准确的输出哪一行哪一列出错，
    项目上线以后，不需要这个报错信息，所以该文件如果项目不需要可以去除掉
    vue.config.js文件中 配置
    productionSourceMap:false

    7.2 购买服务器
    1：阿里云 2：腾讯云
    2：设置安全组，也就是让服务器的一些端口号打开
    3：利用xshell工具登录服务器

    7.3 安全组设置

    7.4 xshell连接服务器与linux指令
    cd / [根目录] mkdir 创建文件 ls 查看 pwd 绝对路径

    7.5 nginx 反向代理
        yum install nginx [etc]

        location / {
            root  /root/jch/www/shangpinhui/dist
            index index.html
            try_files $url $url/ /index.html
        }

        location /api {
            proxy_pass http://101.35.46.63 
        }

        service nginx start
        service nginx restart
        service nginx stop
    
    7.6 nginx?
        1：为啥直接访问 ip http://101.35.46.63 就能找到下面的文件（需要配置一些东西）
        刚刚在服务器上-> /root/jch/www/shangpinhui/dist

        2：项目的数据来自于http://39.98.123.211
    