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
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;喜欢Web开发，三年Web前端工作经验，有已上线的大型项目开发经验，有过部分H5开发经验。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;熟练掌握JavaScript，HTML，CSS技术，熟练ES2015，熟练EmberJs框架，喜欢接触新技术，对React，Webpack，yarn等较新的技术比较熟悉。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;熟练使用Git，熟练Linux，熟悉Nginx服务器，对NodeJs，Python等后端技术有一定了解。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;工作认真负责，有良好的编程习惯，性格开朗，有较强的学习能力、沟通能力和逻辑思维能力。</p>
                <p><Icon type="pushpin-o" />&nbsp;&nbsp;在Udesk公司担任前端工程师2年，期间主要负责IM系统的开发和维护，已投入生产使用，目前已有大量客户。</p>
              </Card>
              <Card title="工作/项目经历">
                <Timeline pending="至今">
                    <Timeline.Item color="red">
                      <div className="ex-header">2014-4 / 天津皖通科技</div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>梅江国际艺术馆官网</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>为天津梅江国际艺术馆开发的内容管理系统（CMS），同时负责前后端工作，网站地址：<a target="_blank" href="http://www.mj-arts.com/">http://www.mj-arts.com/</a></p>
                      </div>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <div className="ex-header">2015-3 / Udesk（北京沃丰时代数据科技有限公司）</div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>Udesk客服系统/即时通讯系统（IM）/客服端</p>
                        <p className="proj-line proj-content">
                          <span>项目内容：</span>IM客服端，主要使用EmberJs框架和xmpp通信，客服人员在IM工作台统一处理来自PC端，手机端，微信，微博，SDK等平台的客户消息。
                          可以处理包括简单文本，富文本，链接，表情，语音，小视频，微信地理位置，表单，文件，图片等类型的消息。支持区域截图，消息超时处理，敏感词处理，转接会话，同事监控，对话路由，对话质检，
                          排队管理，访客邀请等功能。
                        </p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>项目中负责IM客服端前端大部分工作以及管理控制后台大部分前端工作
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>Udesk客服系统/即时通讯系统（IM）/客户端</p>
                        <p className="proj-line proj-content">
                          <span>项目内容：</span>使用客服系统的公司可以通过在网站上嵌入代码的方式在自己的网站上生成IM聊天面板，他们的用户就可以通过IM进行咨询。系统支持多种接入方式和自定义配置，包括聊天系统和访客系统，访客系统主要实时的对访客信息进行处理。
                          聊天系统主要用来咨询客服或者机器人，使用xmpp通信，以及WebSocket，跨域等技术，支持手机模式，内嵌模式和独立窗口模式，浏览器兼容到IE6，支持手机端，支持机器人，用户识别，离线留言，满意度评价，自定义广告和推广消息等功能。
                        </p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>项目中独立负责IM客户端中聊天系统的工作，独立完成js内嵌插件。
                        </p>
                        <p className="proj-line proj-example">
                          <span>体验地址：</span>金柚网官网的【在线咨询】：<a target="_blank" href="https://www.joyowo.com/">https://www.joyowo.com/</a>
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>Udesk客户管理系统（CRM）</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>主要是针对销售人员开发的CRM系统，包括销售线索，商机，客户和联系人等模块，以及针对线索和客户的公海等功能。项目中主要使用EmberJs框架。</p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>项目中参与开发自定义字段部分。
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>Udesk商务智能系统（BI）</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>单独的BI系统，使用EmberJs框架，可配套其他系统使用，支持大部分统计图表，支持多维度和多指标，用户可以自己根据需要生成相应地看板。</p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>项目搭建，独立完成表格图标组件，参与设计器的开发。
                        </p>
                      </div>
                      <div className="proj">
                        <p className="proj-line proj-name"><span>项目名称：</span>Udesk客服系统其他模块</p>
                        <p className="proj-line proj-content"><span>项目内容：</span>客服系统中的工单，客户，知识库，监控报表等模块，使用EmberJs框架。</p>
                        <p className="proj-line proj-own">
                          <span>主要职责：</span>基于系统各模块之间的业务联系，参与各模块的开发，开发系统全局共用的某些组件。
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
