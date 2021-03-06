import React, { Component } from 'react';
import { Row, Col, Card, Timeline, Progress, BackTop, Tag, Tooltip, Icon, message } from 'antd';
import './App.css';

class App extends Component {
  componentDidMount() {
    message.info('感谢阅读！');
    console.log('再次感谢您的阅读！');
    console.log('我只是想做一个有诚意的简历，找一份有诚意的工作，希望有机会能一起工作哦！');
    console.log('这只是为了做简历临时使用了一个项目，一个简单的页面，比较粗糙简陋。');
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Row type="flex" justify="center" gutter={24} className="to-bottom">
            <Col className="resume-header" span={22}>
              <h1>简&nbsp;&nbsp;历</h1>
              <div className="right">姓名：连海云&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：18310673100</div>
            </Col>
          </Row>
          <Row type="flex" justify="center" gutter={24}>
            <Col span={14}>
              <Card title="个人简介" className="to-bottom personal-card">
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;有丰富Web项目开发经验；有企业服务系统（SaaS）开发经验；可独立负责公司项目的构建、开发、维护。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;有丰富EmberJs项目开发经验、跨浏览器开发经验；有跨终端开发经验。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;熟练掌握JavaScript，HTML5，CSS3，Ajax，WebSocket等前端技术；熟练ES2015、React、Redux。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;熟练使用Linux系统、Git；熟练Gulp、Webpack等构建工具；熟悉NodeJs。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;工作认真负责，能快速解决问题；善于沟通；学习、抗压能力强。</p>
              </Card>
              <Card title="工作/项目经历">
                <Timeline pending={<span>至今</span>}>
                    <Timeline.Item color="green">
                      <div className="ex-header">2014-4 / 天津皖通科技</div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>梅江国际艺术馆官网</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>为天津梅江国际艺术馆开发的内容管理系统（CMS），同时负责前后端工作，网站地址：<a target="_blank" href="http://www.mj-arts.com/">http://www.mj-arts.com/</a></p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      <div className="ex-header">2015-3 / Udesk（北京沃丰时代数据科技有限公司）</div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>智能客服系统/即时通讯系统（IM）/客服端</p>
                        <p className="proj-line proj-content">
                          <span>项目内容：</span>基于EmberJs的IM客服端系统。客服人员在IM工作台统一处理来自PC端，手机端，微信，微博，SDK等平台的客户消息。
                          可以处理包括文本，表情，语音，视频，地理位置，表单，文件等类型的消息。支持监控，排队管理，访客邀请等众多业务功能。主要用到了Websocket，XMPP等技术。
                        </p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>项目中独立负责IM客服端前端工作以及管理控制后前端工作
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>智能客服系统/即时通讯系统（IM）/客户端</p>
                        <p className="proj-line proj-content">
                          <span>项目内容：</span>包括基于WebSocket，XMPP通信，跨域等技术的网页聊天系统和基于NodeJs的访客系统。该系统可以嵌入第三方网站，进行在线聊天。支持手机模式，内嵌模式和独立窗口模式，兼容各种浏览器，支持机器人等众多功能。
                        </p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>项目中独立负责IM客户端中聊天系统的工作，独立完成js内嵌插件。
                        </p>
                        <p className="proj-line proj-example">
                          <span>体验地址：</span>金柚网官网的【在线咨询】：<a target="_blank" href="https://www.joyowo.com/">https://www.joyowo.com/</a>
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>客户管理系统（CRM）</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>基于EmberJs的CRM系统。 主要是针对销售人员开发的CRM系统，包括销售线索，商机，客户和联系人等模块，以及针对线索和客户的公海等功能。</p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>参与各业务模块开发，负责部分公用组件开发。
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>商务智能系统（BI）</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>基于EmberJs的BI系统。独立的BI系统，可配套其他系统使用，支持大部分统计图表，支持多维度和多指标，用户可以自己根据需要生成相应地看板。</p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>参与项目搭建，负责部分公用组件开发。
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>知识库管理系统</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>基于EmberJs的知识库管理系统。主要管理空间下的文章，以及人员组织结构。</p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>参与项目搭建。
                        </p>
                      </div>
                    </Timeline.Item>
                </Timeline>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="基本信息" className="to-bottom personal-card">
                <p><Icon type="user" />&nbsp;&nbsp;连海云/男/本科</p>
                <p><Icon type="phone" />&nbsp;&nbsp;18310673100</p>
                <p className="github"><Icon type="mail" />&nbsp;&nbsp;lianhaiyun@gmail.com</p>

                <p>投递职位：Web前端工程师</p>
                <p>工作经验：3年</p>
                <p>毕业院校：天津工业大学</p>
                <p>专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业：计算机</p>
                <p>在线简历：<a target="_blank" href="http://www.mobei.website/resume">http://www.mobei.website/resume</a></p>
              </Card>
              <Card title="专业技能" className="card-skill to-bottom">
                <div key="skill-overview">
                  <span>前端</span>
                  <Progress className="skill-js" percent={90} format={() => 'JavaScript'} />
                  <Progress className="skill-html" percent={90} format={() => 'HTML'} />
                  <Progress className="skill-css" percent={80} format={() => 'CSS'} />
                  <Progress className="skill-jquery" percent={85} format={() => 'jQuery'} />
                  <Progress className="skill-ember" percent={70} format={() => 'Ember'} />
                  <Progress className="skill-react" percent={55} format={() => 'React'} />
                  
                  <span>工具</span>
                  <Progress className="skill-git" percent={90} format={() => 'Git'} />
                  <Progress className="skill-gulp" percent={70} format={() => 'Gulp'} />
                  <Progress className="skill-webpack" percent={60} format={() => 'Webpack'} />
                  <Progress className="skill-nginx" percent={40} format={() => 'Nginx'} />

                  <span>后端</span>
                  <Progress className="skill-node" percent={40} format={() => 'NodeJs'} />
                  <Progress className="skill-python" percent={30} format={() => 'Python'} />
                </div>
              </Card>
              <Card title="个人标签" className="card-skill">
                <Tooltip placement="top" title="对待工作认真负责，比较细心">
                  <Tag color="pink">认真负责</Tag>
                </Tooltip>
                <Tooltip placement="top" title="需要和产品，设计，后端人员进行沟通合作">
                  <Tag color="red">团队协作</Tag>
                </Tooltip>
                <Tooltip placement="top" title="抗压能力强，不服来加班">
                  <Tag color="orange">能抗压</Tag>
                </Tooltip>
                <Tooltip placement="top" title="没事笑哈哈">
                  <Tag color="yellow">心态好</Tag>
                </Tooltip>
                <Tooltip placement="top" title="较快速的学习新东西">
                  <Tag color="cyan">学习能力</Tag>
                </Tooltip>
                <Tooltip placement="top" title="对人对事态度好，态度决定所有">
                  <Tag color="green">态度决定一切</Tag>
                </Tooltip>
                <Tooltip placement="top" title="快速理解复杂业务逻辑">
                  <Tag color="blue">逻辑思维</Tag>
                </Tooltip>
              </Card>
            </Col>
          </Row>
          <BackTop visibilityHeight={200}/>
        </div>
      </div>
    );
  }
}

export default App;
