<template>
    <div id="sidebar">
        <div v-if="info && showInfo">
            <div class="panel">
                <div class="header">
                    <span class="col_fade">{{ isAuthor? '作者' : '个人信息' }}</span>
                </div>
                <div class="inner">
                    <div class="user_card">
                        <div>
                            <router-link class="user_avatar" :to="'/user/' + info.loginname">
                                <img :src="info.avatar_url" :alt="info.loginname" title="info.loginname" />
                            </router-link>
                            <span class="user_name"><router-link class="dark" :to="'/user/' + info.loginname">{{ info.loginname }}</router-link></span>
                            <div class="board clearfix">
                                <div class="floor">
                                    <span class="big">积分: {{ info.score ? info.score : 0 }} </span>
                                </div>
                            </div>
                            <div class="space clearfix"></div>
                            <span class="signature">
                                “
                                    sunshine
                                ”
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="inner">
                    <router-link :to="'/create/new'" id="create_topic_btn">
                        <span class="span-success">发布话题</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="panel" v-else>
            <div class="inner">
                <p>CNode：Node.js专业中文社区</p>
                <div>
                    您可以&nbsp;
                    <a>
                        <span class="span-info" @click="signIn">输入accesstoken登录</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="panel">
            <div class="inner ads">
                <a href="https://alinode.aliyun.com/?ref=cnode" target="_blank" rel="noopener noreferrer" class="banner sponsor_outlink" data-label="alinode">
                    <img src="https://imgkr.cn-bj.ufileos.com/19c54099-104e-49f0-a77b-4d3164a45c72.png" alt="" />
                </a>
                <div class="sep10"></div>
                <a href="http://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=multicloud&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" rel="noopener noreferrer" class="banner sponsor_outlink" data-label="ucloud-banner">
                    <img src="https://imgkr.cn-bj.ufileos.com/94c41aa7-90a8-443b-b994-3b6a92056ab2.png" alt="" />
                </a>
                <div class="sep10"></div>
                <a href="https://0x7.me/UDyj" class="banner sponsor_outlink" data-label="qiniu-sidebar" target="_blank" rel="noopener noreferrer">
                    <img src="https://imgkr.cn-bj.ufileos.com/4d2723a6-5982-4583-8500-56f61cc15674.png" alt="" />
                </a>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <span class="col_fade">友情社区</span>
            </div>
            <div class="inner">
                <ol class="friendship-community">
                    <li>
                        <a href="http://react-china.org/" target="_blank" rel="noopener noreferrer">
                            <img src="https://imgkr.cn-bj.ufileos.com/5df4e6c4-ec42-4001-9c83-bd9cb4461bc9.png" alt="React中文社区" />
                        </a>
                    </li>
                    <div class="sep10"></div>
                    <li>
                        <a href="http://golangtc.com/" target="_blank" rel="noopener noreferrer">
                            <img src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt="" />
                        </a>
                    </li>
                    <!-- <div class="sep10"></div>
                    <li>
                        <a href="http://phphub.org/" target="_blank" rel="noopener noreferrer">
                            <img src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="" />
                        </a>
                    </li>
                    <div class="sep10"></div>
                    <li>
                        <a href="https://testerhome.com/" target="_blank" rel="noopener noreferrer">
                            <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK" alt="" />
                        </a>
                    </li> -->
                </ol>
            </div>
        </div>
        <div class="panel">
            <div class="header">
                <span class="col_fade">个人联系方式</span>
            </div>
            <div class="inner cnode-app-download">
                <img width="290" src="https://imgkr.cn-bj.ufileos.com/216b06a3-e7b2-4961-98de-f555ad2b6499.jpg" alt="" />
                <br />
                <span style="font-size: 18px;font-weight: bold;">wechat: qjqdedream77</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';
    import Dialog from '../Dialog/index';
    import Warning from '../Warning/index';

    @Component({})
    export default class Sider extends Vue {
        get info(): object {
            return this.$store.state.app.info;
        }
        get showInfo(): boolean {
            return this.$store.state.app.showInfo;
        }
        get isAuthor(): boolean {
            return this.$store.state.app.isAuthor;
        }
        signIn(): void {
            let self = this;
            Dialog.open({
                showInput: true,
                inputPlaceholder: '请输入accesstoken',
                confirmButtonText: '登陆',
                confirmCallBack: async function (accesstoken: string) {
                    if (accesstoken === '' || !accesstoken) {
                        Warning.info('accesstoken不能为空！');
                    } else {
                        await self.$store.dispatch('accesstoken', {accesstoken});
                        let accessInfo = self.$store.state.app.accessInfo;
                        console.log(accessInfo);
                        if (accessInfo.success) {
                            self.$store.dispatch('changeAccesstoken', {accesstoken});
                            await self.$store.dispatch('getMessage', {accesstoken,
                                mdrender: true
                            });
                            await self.$store.dispatch('getInfo', {
                                username: accessInfo.loginname
                            });
                            Dialog.close();
                            Warning.info('登录成功！');
                            window.localStorage.setItem('accesstoken', accesstoken);
                            setTimeout(() => {
                                window.location.reload();
                            }, 1000);
                        } else {
                            Warning.info('accesstoken不正确，请重新输入！');
                        }
                    }
                },
                cancelCallBack(accesstoken: string) {
                    Dialog.close();
                },
            });
        }
    };
</script>
