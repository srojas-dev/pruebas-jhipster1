import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        <h1 className="display-4">Java 文青，歡迎!</h1>
        <p className="lead">這裡是您的首頁</p>
        {
          (account?.login) ? (
            <div>
              <Alert color="success">
                您目前是用 “{account.login}” 帳號登入。
              </Alert>
            </div>
          ) : (
            <div>
              <Alert color="warning">
                如果您要
                <span>&nbsp;</span>
                <Link to="/login" className="alert-link">登入</Link>
                ，可以使用預設帳號:<br/>- 管理員 (帳號是 &quot;admin&quot;，密碼是 &quot;admin&quot;) <br/>- 使用者 (帳號 &quot;user&quot;，密碼是 &quot;user&quot;)。
              </Alert>

            </div>
          )
        }
        <p>
          要是您對 JHipster 有任何疑問，可以到:
        </p>

        <ul>
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
              JHipster 首頁
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
              Stack Overflow 上標有 JHipster 的問題
            </a>
          </li>
          <li>
            <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
              JHipster 議題管理
            </a>
          </li>
          <li>
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
              JHipster 公開聊天室
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
              在 Twitter 上關注 @jhipster
            </a>
          </li>
        </ul>

        <p>
          如果您喜歡 JHipster，別忘了給我們星星，馬上連到
          {' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </Col>
    </Row>
  );
};

export default Home;

