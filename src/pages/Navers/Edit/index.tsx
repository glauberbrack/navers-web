/* eslint-disable camelcase */
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useParams } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { format, parseISO, addDays } from 'date-fns';

import { Form } from '@unform/web';
import Header from '../../../components/Header';
import { Content, Main, MainHeader } from './styles';
import Input from '../../../components/Input';
import InputMask from '../../../components/InputMask';
import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';
import ModalMessage from '../../../components/Modals/ModalMessage';
import { useNaver } from '../../../hooks/NaverContext';
import { Naver } from '../../../utils/interfaces';

const Edit: React.FC = () => {
  const [modalShow, setModalShow] = useState(false);
  const [naver, setNaver] = useState<Naver>({} as Naver);
  const formRef = useRef<FormHandles>(null);
  const { loadNaver, updateNaver } = useNaver();
  const { id } = useParams();

  const loadNaverShow = useCallback(async () => {
    const response = await loadNaver(id);

    const { admission_date, birthdate } = response;

    formRef.current?.setFieldValue(
      'birthdate',
      format(addDays(parseISO(birthdate), 1), 'dd/MM/yyyy'),
    );
    formRef.current?.setFieldValue(
      'admission_date',
      format(addDays(parseISO(admission_date), 1), 'dd/MM/yyyy'),
    );
    setNaver(response);
  }, [loadNaver, id]);

  useEffect(() => {
    loadNaverShow();
  }, [loadNaverShow]);

  const handleSubmit = useCallback(
    async (data: Naver) => {
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

        await updateNaver(id, data);

        setModalShow(true);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [updateNaver, id],
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
            <p>Editar Naver</p>
          </MainHeader>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={naver}>
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
        title="Naver atualizado"
        message="Naver atualizado com sucesso"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Edit;
