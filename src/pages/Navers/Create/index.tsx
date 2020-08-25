import React, { useRef, useCallback, useState } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import Header from '../../../components/Header';
import { Content, Main, MainHeader } from './styles';
import Input from '../../../components/Input';
import InputMask from '../../../components/InputMask';
import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';
import ModalMessage from '../../../components/Modals/ModalMessage';
import { useNaver } from '../../../hooks/NaverContext';
import { CreateNaver as CreateNaverForm } from '../../../utils/interfaces';

const Create: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { createNaver } = useNaver();

  const handleSubmit = useCallback(
    async (data: CreateNaverForm) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Obrigatório'),
          job_role: Yup.string().required('Obrigatório'),
          birthdate: Yup.string().required('Obrigatório'),
          admission_date: Yup.string().required('Obrigatório'),
          project: Yup.string().required('Obrigatório'),
          url: Yup.string().required('Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await createNaver(data);

        setModalShow(true);

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [createNaver],
  );

  return (
    <>
      <Header />
      <Content>
        <Main>
          <MainHeader>
            <Link to="/">
              <FiChevronLeft size={28} color="#000" />
            </Link>
            <p>Adicionar Naver</p>
          </MainHeader>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input name="name" label="Nome" placeholder="Nome" />
              <Input name="job_role" label="Cargo" placeholder="Cargo" />
              <InputMask
                mask="99/99/9999"
                name="birthdate"
                label="Data de aniversário"
                placeholder="Data de aniversário"
              />
              <InputMask
                mask="99/99/9999"
                name="admission_date"
                label="Data de admissão"
                placeholder="Data de admissão"
              />
              <Input
                name="project"
                label="Projetos que já participou"
                placeholder="Projetos que já participou"
              />
              <Input
                name="url"
                label="URL da foto no Naver"
                placeholder="URL da foto no Naver"
              />
            </div>
            <Button type="submit">Salvar</Button>
          </Form>
        </Main>
      </Content>

      <ModalMessage
        title="Naver criado"
        message="Naver criado com sucesso"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Create;
