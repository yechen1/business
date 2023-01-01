import { history, Link, useModel } from "@umijs/max"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { useState } from "react";
import styles from './index.less';
import logo from '../../../assets/logo.png';
import ProForm, { ProFormCheckbox, ProFormText } from "@ant-design/pro-form";
import Footer from "@/components/Footer";
import { message } from "antd";
import { login } from "./service";

const Login: React.FC = () => {
    const {  setInitialState } = useModel('@@initialState');
    const [ submitting, setSubmitting ] = useState(false);

    // 账号数据，用户,密码，是否记住密码
    const accountData =async () => {
        const accountStr = localStorage.getItem("account") || "{}";
        const { loginName='', password='', isRemeberPass } =JSON.parse(accountStr) || {};
        return {loginName,password,isRemeberPass};
    }

    // 保存用户数据 
    const saveUserData = async (token:string, currentUser:API.UserListItem, accountObj: API.AccountData) => {

        // 获取菜单权限 
        console.log("获取菜单权限")
        // 初始化菜单权限

        // 设置全局
        setInitialState((s:any)=>({...s, currentUser}))
    }

    // 提交 登录
    const handleSubmit = async (data: API.AccountData) => {
        const { loginName,password,isRemeberPass } =data;
        setSubmitting(true)
        try{ 
            // 登录
            const {result, result: {token }} = await login({loginName,password});
            
            await saveUserData(token, result, {loginName, password, isRemeberPass});

            // 此方法会跳转到 redirect 参数所在的位置
            const { query: { redirect }} = history.location as any;
            setTimeout(()=>{
                try {
                    history.replace(redirect || '/');
                    message.success("登录成功")
                } catch (error:any) {
                    // redirect后的地址错误，做兼容处理
                    message.error('页面不存在')
                    history.replace('/')
                }
            },0)

        } catch(error:any){
            message.error("登录失败，请重试！")
        } finally {
            setSubmitting(false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.lang}>lang</div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.header}>
                        <Link to="/">
                            <img alt='logo' className={styles.logo} src={logo} />
                            <span className={styles.title}>STL 中台管理系统</span>
                        </Link>
                    </div>
                    <div className={styles.desc}>STL商城的数据，维护商家与用户的关系</div>
                </div>
                <div className={styles.main}>
                    <ProForm
                        request={accountData}
                        isKeyPressSubmit
                        submitter={{
                            searchConfig:{
                                submitText:'登录',
                            },
                            render: (_, dom) =>dom.pop(),
                            submitButtonProps: {
                                loading:submitting,
                                size: 'large',
                                style: {
                                    width: '100%',
                                }
                            }
                        }}
                        onFinish={
                           async (data) => {
                                await handleSubmit(data);
                           }
                        }
                    >
                        <>
                            <ProFormText
                                name='loginName'
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className={styles.prefixIcon} />
                                }}
                                placeholder="用户名:"
                                rules={[
                                    {
                                        required:true,
                                        message: '请输入用户名!',
                                    }
                                ]}
                            />
                            <ProFormText.Password 
                                name="password"
                                fieldProps={{
                                    size:'large',
                                    prefix:<LockOutlined className={styles.prefixIcon} />,
                                }}
                                placeholder="密码:"
                                rules={[
                                    {
                                        required:true,
                                        message:'请输入密码！'
                                    }
                                ]}
                            />
                            <div style={{ marginBottom:24 }}></div>
                            <ProFormCheckbox
                                noStyle
                                name="isRemeberPass"
                            >记住密码</ProFormCheckbox>
                        </>
                    </ProForm>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;