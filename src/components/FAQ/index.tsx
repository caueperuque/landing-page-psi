import { FAQLayoutComponent } from "./styles";
import { FAQItem } from "./components/FAQItem";

export const FAQ = () => {
  return (
    <FAQLayoutComponent>
      <FAQItem
        question="Como funcionam as sessões?"
        answer="Sessões de psicoterapia de 15–30 minutos, com duração de 20 minutos. Sessões de psicoterapia de 15–30 minutos, com duração de 20 minutos. Sessões de psicoterapia de 15–30 minutos, com duração de 20 minutos."
      />
      <FAQItem
        question="Teste"
        answer="Teste"
      />
    </FAQLayoutComponent>
  );
};
