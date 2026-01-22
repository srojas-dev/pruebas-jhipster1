import React from 'react';
import { ValidatedField } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { type FieldError, useForm } from 'react-hook-form';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

const LoginModal = (props: ILoginModalProps) => {
  const login = ({ username, password, rememberMe }) => {
    props.handleLogin(username, password, rememberMe);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onTouched' });

  const { loginError, handleClose } = props;

  const handleLoginSubmit = e => {
    handleSubmit(login)(e);
  };

  return (
    <Modal isOpen={props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
      <Form onSubmit={handleLoginSubmit}>
          <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>登入</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                { loginError ?
                  <Alert color="danger" data-cy="loginError">
                    <strong>登入失敗!</strong> 請檢查您的憑證再重試一次。
                  </Alert>
                  : null
                }
              </Col>
              <Col md="12">
                <ValidatedField
                  name="username"
                  label="帳號"
                  placeholder="您的帳號"
                  required
                  autoFocus
                  data-cy="username"
                  validate={{ required: 'Username cannot be empty!' }}
                  register={register}
                  error={errors.username as FieldError}
                  isTouched={touchedFields.username}
                />
                <ValidatedField
                  name="password"
                  type="password"
                  label="密碼"
                  placeholder="您的密碼"
                  required
                  data-cy="password"
                  validate={{ required: 'Password cannot be empty!' }}
                  register={register}
                  error={errors.password as FieldError}
                  isTouched={touchedFields.password}
                />
                <ValidatedField
                  
                  name="rememberMe"
                  type="checkbox"
                  check
                  label="自動登入"
                  value={true}
                  register={register}
                />
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClose} tabIndex={1}>
                取消
            </Button>
            {' '}
            <Button color="primary" type="submit" data-cy="submit">登入</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
}

export default LoginModal;
