import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
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
import { FaWhatsapp } from "react-icons/fa";
export const SendMail = () => {
  const mailSchema = z.object({
    name: z.string(),
    mail: z.string(),
    text: z.string().min(10),
    phone: z.string().min(16).max(15),
  });

  type MailForm = z.infer<typeof mailSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MailForm>({
    resolver: zodResolver(mailSchema),
  });

  const onSubmit: SubmitHandler<MailForm> = (data) => console.log(data, errors);

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
              <p>(18) 99666-7981</p>
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
