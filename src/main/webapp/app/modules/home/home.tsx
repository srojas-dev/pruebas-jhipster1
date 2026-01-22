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
        <h1 className="display-4">Tere tulemast, Java Hipster!</h1>
        <p className="lead">See on teie avaleht</p>
        {
          (account?.login) ? (
            <div>
              <Alert color="success">
                Olete sisse logitud kasutajana &quot;{account.login}&quot;.
              </Alert>
            </div>
          ) : (
            <div>
              <Alert color="warning">
                Kui te soovite 
                <span>&nbsp;</span>
                <Link to="/login" className="alert-link">sisse logida</Link>
                , siis võite kasutada vaikekontosid:<br/>- Administraator (kasutajanimi=&quot;admin&quot; ja salasõna=&quot;admin&quot;) <br/>- Kasutaja (kasutajanimi=&quot;user&quot; ja salasõna=&quot;user&quot;).
              </Alert>

            </div>
          )
        }
        <p>
          Kui teil on küsimusi JHipster kohta:
        </p>

        <ul>
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
              JHipster koduleht
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
              JHipster Stack Overflow-s
            </a>
          </li>
          <li>
            <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
              JHipster veahaldus
            </a>
          </li>
          <li>
            <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
              JHipster avalik jututuba
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
              jälgi @jhipster Twitteris
            </a>
          </li>
        </ul>

        <p>
          Kui teile meeldib JHipster, siis ärge unustage anda meile tähte
          {' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </Col>
    </Row>
  );
};

export default Home;

