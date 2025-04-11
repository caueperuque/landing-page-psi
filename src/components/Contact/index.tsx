import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as emailjs from "emailjs-com"
import { z } from "zod";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  Button,
  ContactContentComponent,
  ContactLayoutComponent,
  DataContactComponent,
  DataContactContentComponent,
  Divisor,
  FormComponent,
  InputComponent,
  TextAreaComponent,
  TitleComponent,
} from "./styles";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
export const Contact = () => {
  const mailSchema = z.object({
    name: z.string(),
    mail: z.string(),
    text: z.string(),
    phone: z.string(),
  });

  type MailForm = z.infer<typeof mailSchema>;

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<MailForm>({
    resolver: zodResolver(mailSchema),
  });

  const onSubmit = async (data: MailForm) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.mail,
        phone: data.phone,
        time: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
        text: data.text,
      };

      await emailjs.send(
        "service_a4c9obg", // Substitua pelo seu Service ID
        "template_gkjbrg2", // Substitua pelo seu Template ID
        templateParams,
        "mDVUAYqSNNVEKZwqg" // Substitua pelo seu User ID
      );

      alert("E-mail enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.");
    }
  };
  return (
    <ContactLayoutComponent>
      <ContactContentComponent>
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
              <p>Entrar em contato</p>
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

        <FormComponent onSubmit={handleSubmit(onSubmit)}>
          <InputComponent {...register("name")} placeholder="NOME" />
          <InputComponent {...register("mail")} placeholder="E-MAIL" />
          <InputComponent
            {...register("phone")}
            placeholder="(DDD) XXXXX-XXXX"
          />
          <TextAreaComponent
            {...register("text")}
            rows={10}
            placeholder="MENSAGEM"
          />
          <Button type="submit">Enviar</Button>
        </FormComponent>
      </ContactContentComponent>
    </ContactLayoutComponent>
  );
};
