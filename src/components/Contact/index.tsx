import * as emailjs from 'emailjs-com';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaInstagram, FaSpinner, FaWhatsapp } from 'react-icons/fa';
import { z } from 'zod';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Button, ContactContentComponent, ContactLayoutComponent, DataContactComponent,
    DataContactContentComponent, Divisor, FieldsComponent, FormComponent, InputComponent,
    NotificacaoComponent, TextAreaComponent, TitleComponent
} from './styles';

export const Contact = () => {
  const [valorTelefone, setValorTelefone] = useState('');
  const [estaEnviando, setEstaEnviando] = useState(false);
  const [notificacao, setNotificacao] = useState<{
    tipo: 'sucesso' | 'erro' | null;
    mensagem: string;
  }>({ tipo: null, mensagem: '' });

  const mailSchema = z.object({
    name: z.string({required_error: "Nome é obrigatório"}),
    mail: z.string({required_error: "E-mail é obrigatório"}),
    text: z.string({required_error: "Mensagem é obrigatória"}),
    phone: z.string({required_error: "Telefone é obrigatório"}),
  });

  type MailForm = z.infer<typeof mailSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<MailForm>({
    resolver: zodResolver(mailSchema),
  });

  const aplicarMascaraTelefone = (valor: string) => {
    // Remove todos os caracteres não numéricos
    const numeros = valor.replace(/\D/g, '');
    
    // Se não há números, retorna vazio
    if (!numeros) return '';
    
    // Aplica a máscara baseada na quantidade de dígitos
    if (numeros.length <= 2) {
      return `(${numeros}`;
    } else if (numeros.length <= 6) {
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    } else if (numeros.length <= 10) {
      // Telefone fixo: (DD) XXXX-XXXX
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 6)}-${numeros.slice(6)}`;
    } else {
      // Celular: (DD) XXXXX-XXXX
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
    }
  };

  const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = aplicarMascaraTelefone(event.target.value);
    setValorTelefone(valorFormatado);
    setValue('phone', valorFormatado);
  };

  const onSubmit = async (data: MailForm) => {
    setEstaEnviando(true);
    setNotificacao({ tipo: null, mensagem: '' });

    try {
      const templateParams = {
        name: data.name,
        email: data.mail,
        phone: data.phone,
        time: new Date().toLocaleString("pt-BR", {
          timeZone: "America/Sao_Paulo",
        }),
        text: data.text,
      };

      await emailjs.send(
        "service_yod2jvh", // Substitua pelo seu Service ID
        "template_a1y7c03", // Substitua pelo seu Template ID
        templateParams,
        "a8oZ6v9cQubnxrWFh" // Substitua pelo seu User ID
      );

      setNotificacao({
        tipo: 'sucesso',
        mensagem: 'E-mail enviado com sucesso! Entraremos em contato em breve.'
      });
      
      // Limpa o formulário após envio bem-sucedido
      setValorTelefone('');
      setValue('name', '');
      setValue('mail', '');
      setValue('phone', '');
      setValue('text', '');

    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      setNotificacao({
        tipo: 'erro',
        mensagem: 'Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.'
      });
    } finally {
      setEstaEnviando(false);
      
      // Remove a notificação após 5 segundos
      setTimeout(() => {
        setNotificacao({ tipo: null, mensagem: '' });
      }, 5000);
    }
  };
  return (
    <>
      {notificacao.tipo && (
        <NotificacaoComponent tipo={notificacao.tipo}>
          {notificacao.mensagem}
        </NotificacaoComponent>
      )}
      
      <ContactLayoutComponent>
        <ContactContentComponent>
        <div>
          <TitleComponent>
            <h3>CONTATO</h3>
            <Divisor />
          </TitleComponent>
          <DataContactComponent>
            <DataContactContentComponent>
              <MapPinIcon strokeWidth={1} width={"1.2rem"} />
              <p>Presidente Prudente</p>
            </DataContactContentComponent>

            <DataContactContentComponent>
              <EnvelopeIcon strokeWidth={1} width={"1.2rem"} />
              <p>psicothaisaraujo@gmail.com</p>
            </DataContactContentComponent>

            <DataContactContentComponent>
              <a
                href="https://wa.me/+5518996667981"
                className="social-icon"
                target="_blank"
              >
                <FaWhatsapp style={{ fontSize: "1.2rem" }} />
                <p>(18) 99666-7981</p>
              </a>
            </DataContactContentComponent>

            <DataContactContentComponent>
              <a
                href="https://www.instagram.com/thaisaraujopsic/"
                className="social-icon"
                target="_blank"
              >
                <FaInstagram style={{ fontSize: "1.2rem" }} />
                <p>@thaisaraujopsic</p>
              </a>
            </DataContactContentComponent>
          </DataContactComponent>
        </div>

        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <FieldsComponent>
            <InputComponent {...register("name")} placeholder="NOME" />
            <InputComponent {...register("mail")} placeholder="E-MAIL" type="email" />
            <InputComponent
              {...register("phone")}
              value={valorTelefone}
              onChange={handleTelefoneChange}
              placeholder="(DDD) XXXXX-XXXX"
              maxLength={15}
            />
          </FieldsComponent>
          <TextAreaComponent
            {...register("text")}
            rows={10}
            placeholder="MENSAGEM"
          />
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Button type="submit" disabled={estaEnviando}>
              {estaEnviando ? (
                <>
                  <FaSpinner style={{ 
                    fontSize: '0.9rem', 
                    marginRight: '0.5rem',
                    animation: 'spin 1s linear infinite'
                  }} />
                  Enviando...
                </>
              ) : (
                'Enviar'
              )}
            </Button>
          </div>
        </FormComponent>
        </ContactContentComponent>
      </ContactLayoutComponent>
    </>
  );
};
