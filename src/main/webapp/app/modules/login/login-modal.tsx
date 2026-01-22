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
          <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>Logi sisse</ModalHeader>
          <ModalBody>
            <Row>
              <Col md="12">
                { loginError ?
                  <Alert color="danger" data-cy="loginError">
                    <strong>Sisselogimine ebaõnnestus!</strong> Palun kontrollige kasutajanime ja parooli ning proovige uuesti.
                  </Alert>
                  : null
                }
              </Col>
              <Col md="12">
                <ValidatedField
                  name="username"
                  label="Kasutajanimi"
                  placeholder="Teie kasutajanimi"
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
                  label="Salasõna"
                  placeholder="Teie salasõna"
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
                  label="Jäta mind meelde"
                  value={true}
                  register={register}
                />
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClose} tabIndex={1}>
                Katkesta
            </Button>
            {' '}
            <Button color="primary" type="submit" data-cy="submit">Logi sisse</Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
}

export default LoginModal;
