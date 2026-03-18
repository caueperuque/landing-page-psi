import { FAQContainer, FAQLayoutComponent } from "./styles";
import { FAQItem, FAQItemProps } from "./components/FAQItem";
import {
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export const FAQ = () => {
  const questions: FAQItemProps[] = [
    {
      question: "Como funcionam as sessões?",
      answer:
        "As sessões têm duração de até 50 minutos e a frequência — que pode ser de uma ou mais vezes por semana — é estabelecida de acordo com a necessidade de cada processo. Esse ritmo é conversado durante as entrevistas iniciais, buscando sustentar um espaço de fala e escuta que respeite as possibilidades e tempo de cada paciente.",
      icon: <ChatBubbleLeftRightIcon strokeWidth={0.5} />,
    },
    {
      question: "Você atende online?",
      answer:
        "Sim. Realizo atendimentos em ambas as modalidades: presencialmente, em meu consultório em Presidente Prudente (SP), e online, através de plataformas de vídeo seguras que garantem o sigilo e a qualidade do encontro analítico",
      icon: <ComputerDesktopIcon strokeWidth={0.5} />,
    },
    {
      question: "Você atende por convênio?",
      answer:
        "Não realizo atendimentos diretos por convênios, apenas na modalidade particular. No entanto, emito recibos e toda a documentação necessária para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele ofereça essa opção.",
      icon: <QuestionMarkCircleIcon strokeWidth={0.5} />,
    },
    {
      question: "Qual o valor?",
      answer:
        "O valor das sessões, a frequência e a forma de pagamento são definidos em conjunto durante as entrevistas iniciais. Esse primeiro contato é fundamental para avaliarmos a demanda e estabelecermos os combinados que sustentarão o trabalho analítico.",
      icon: <CurrencyDollarIcon strokeWidth={0.5} />,
    },
  ];

  return (
    <FAQContainer>
      <FAQLayoutComponent>
        {questions.map((question, index) => (
          <FAQItem
            key={index}
            icon={question.icon}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </FAQLayoutComponent>
    </FAQContainer>
  );
};
