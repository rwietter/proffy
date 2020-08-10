import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import warningIcon from '../../assets/images/icons/warning.svg';
import Header from '../../components/header';
import Input from '../../components/input';
import Select from '../../components/select';
import TextArea from '../../components/textarea';
import api from '../../services/api';

import './style.css';

const TeacherForm: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  const addScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  };

  const handleCreateClass = (e: FormEvent) => {
    e.preventDefault();
    api
      .post('classes', {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: +cost,
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado!');
        setTimeout(() => {
          history.push('/');
        }, 1000);
      })
      .catch(() => alert('Erro ao realizar cadastro'));
  };

  const handleScheduleItemValue = (idx, field, value) => {
    const updateScheduleItem = scheduleItems.map((item, position) => {
      if (idx === position) {
        return {
          ...item,
          [field]: value,
        };
      }
      return item;
    });
    setScheduleItems(updateScheduleItem);
  };

  return (
    <div id="page-teacher-form" className="container">
      <Header
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />
      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus Dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={({ target }) => setAvatar(target.value)}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={({ target }) => setWhatsapp(target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={({ target }) => setBio(target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={({ target }) => setSubject(target.value)}
              options={[
                {
                  value: 'Artes',
                  label: 'Artes',
                },
                {
                  value: 'Biologia',
                  label: 'Biologia',
                },
                {
                  value: 'Matemática',
                  label: 'Matemática',
                },
                {
                  value: 'Física',
                  label: 'Física',
                },
                {
                  value: 'Geografia',
                  label: 'Geografia',
                },
                {
                  value: 'História',
                  label: 'História',
                },
                {
                  value: 'Portugês',
                  label: 'Portugês',
                },
                {
                  value: 'Inglês',
                  label: 'Inglês',
                },
                {
                  value: 'Espanhol',
                  label: 'Espanhol',
                },
                {
                  value: 'Química',
                  label: 'Química',
                },
              ]}
            />
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={({ target }) => setCost(target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((item, idx) => (
              <div key={item.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da semana"
                  value={item.week_day}
                  onChange={(e) => handleScheduleItemValue(idx, 'week_day', e.target.value)
                  }
                  options={[
                    {
                      value: '0',
                      label: 'Domingo',
                    },
                    {
                      value: '1',
                      label: 'Segunda-feira',
                    },
                    {
                      value: '2',
                      label: 'Terça-feira',
                    },
                    {
                      value: '3',
                      label: 'Quarta-feira',
                    },
                    {
                      value: '4',
                      label: 'Quinta-feira',
                    },
                    {
                      value: '5',
                      label: 'Sexta-feira',
                    },
                    {
                      value: '6',
                      label: 'Sábado',
                    },
                  ]}
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  value={item.from}
                  onChange={(e) => handleScheduleItemValue(idx, 'from', e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  value={item.to}
                  onChange={(e) => handleScheduleItemValue(idx, 'to', e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="aviso importante" />
              <div>
                <span>Importante</span>
                <span>Preencha todos os dados</span>
              </div>
            </p>
            <button type="submit">Salvar Cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
