import { FAQLayoutComponent } from "./styles";
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
        "O atendimento clínico ocorre em sessões com duração de até 50 minutos, podendo ser uma ou mais vezes na semana.",
      icon: <ChatBubbleLeftRightIcon strokeWidth={0.5} />,
    },
    {
      question: "Você atende online?",
      answer:
        "Sim. Atendo online e presencialmente na cidade de Presidente Prudente - SP.",
      icon: <ComputerDesktopIcon strokeWidth={0.5} />,
    },
    {
      question: "Você atende por convênio?",
      answer:
        "Não. Não atendo por nenhum convênio, apenas particular (emito recibo para reembolsos).",
      icon: <QuestionMarkCircleIcon strokeWidth={0.5} />,
    },
    {
      question: "Qual o valor?",
      answer:
        "O valor das sessões, e a forma de pagamento são combinados com cada paciente, de preferência no primeiro atendimento. Será acordado um valor possível para ambos.",
      icon: <CurrencyDollarIcon strokeWidth={0.5} />,
    },
  ];

  return (
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
  );
};
