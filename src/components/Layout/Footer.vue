<template>
    <div id="footer">
        <div id="footer_main">
            <div class="links">
                <a class="dark" href="//cnodejs.org/rss">RSS</a>
                |
                <a class="dark" href="https://github.com/cnodejs/nodeclub/">源码地址</a>
            </div>
            <div class="col_fade">
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>服务器赞助商为
                    <a href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=cnodejs&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=cnodejs_logo" class="sponsor_outlink" data-label="ucloud_bottom" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgkr.cn-bj.ufileos.com/97d16205-f30d-4715-8611-cf839aa90e8b.png" title="ucloud" alt="ucloud" width="92px" />
                    </a>
                    ，存储赞助商为
                    <a href="http://www.qiniu.com/?ref=cnode" class="sponsor_outlink" data-label="qiniu_bottom" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgkr.cn-bj.ufileos.com/6336bad9-fd99-4d79-b859-a4dc4388c15e.png" title="七牛云存储" alt="七牛云存储" width="115px" />
                    </a>
                    ，由
                    <a href="https://alinode.aliyun.com/?ref=cnode" class="sponsor_outlink" data-label="alinode_bottom" target="_blank" rel="noopener noreferrer">
                        <img src="https://imgkr.cn-bj.ufileos.com/d9cda139-5a9c-4968-a294-4b95a85f276c.png" title="alinode" alt="alinode" height="54px" width="166px" />
                    </a>提供应用性能服务。
                </p>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank" rel="noopener noreferrer">DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({})
    export default class Footer extends Vue {
    };
</script>
