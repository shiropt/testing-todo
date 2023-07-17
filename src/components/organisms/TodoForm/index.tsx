import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from 'styled-components';
import { Button } from '../../atoms/Button';
import { TextBox } from '../../atoms/TextBox';
import { FC } from 'react';
import { formatDate, getCurrentDate } from '../../../utils/date';
import { Todo } from '../../../@types';
import { useTodo } from '../../../hooks/todo';
import { useTranslation } from 'react-i18next';

type Props = {};

export const TodoForm: FC<Props> = () => {
  const { addTodo } = useTodo();
  const { t } = useTranslation();

  const { setFieldValue, handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      title: '',
      dueDate: new Date(),
    },
    onSubmit: (values) => {
      if (values.title) {
        const newTodo: Todo = {
          id: Date.now(),
          title: values.title,
          createdDate: getCurrentDate(),
          isCompleted: false,
          dueDate: formatDate(values.dueDate),
          isEditMode: false,
        };
        addTodo(newTodo);
        setFieldValue('title', '');
        setFieldValue('dueDate', new Date());
      }
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <TextBoxWrapper
        label={t('label.task')}
        name="title"
        type="text"
        placeholder={t('placeholder.task')}
        onChange={handleChange}
        value={values.title}
      />
      <div>
        <Label>{t('label.dueDate')}</Label>
        <DatePick
          placeholderText={t('placeholder.dueDate')}
          dateFormat="yyyy/MM/dd"
          selected={values.dueDate}
          onChange={(e) => {
            setFieldValue('dueDate', e);
          }}
        />
      </div>
      <ButtonWrapper variant="ADD" color="primary" type="submit">
        {t('button.add')}
      </ButtonWrapper>
    </Form>
  );
};
const TextBoxWrapper = styled(TextBox)`
  width: 450px;
  height: 40px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 95%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 20px;
`;
const DatePick = styled(DatePicker)`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;
const Label = styled.label`
  display: block;
`;
const ButtonWrapper = styled(Button)`
  height: 40px;
  margin-top: 24px;
`;
