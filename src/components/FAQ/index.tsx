import { FAQLayoutComponent } from "./styles";
import { FAQItem } from "./components/FAQItem";
import {
  ChatBubbleLeftRightIcon,
  ComputerDesktopIcon,
  QuestionMarkCircleIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/outline";

export const FAQ = () => {
  return (
    <FAQLayoutComponent>
      <FAQItem
        icon={<ChatBubbleLeftRightIcon strokeWidth={0.5} />}
        question="Como funcionam as sessões?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue nulla metus, ut rhoncus est mattis imperdiet. Maecenas nec nulla sit amet dui maximus iaculis in vitae tellus. Quisque tincidunt eros convallis tristique tincidunt. Suspendisse potenti. Curabitur iaculis ut eros feugiat maximus. Suspendisse potenti."
      />
      <FAQItem
        icon={<ComputerDesktopIcon strokeWidth={0.5} />}
        question="Você atende online?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue nulla metus, ut rhoncus est mattis imperdiet. Maecenas nec nulla sit amet dui maximus iaculis in vitae tellus. Quisque tincidunt eros convallis tristique tincidunt. Suspendisse potenti. Curabitur iaculis ut eros feugiat maximus. Suspendisse potenti."
      />
      <FAQItem
        icon={<QuestionMarkCircleIcon strokeWidth={0.5} />}
        question="Você atende por convênio?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue nulla metus, ut rhoncus est mattis imperdiet. Maecenas nec nulla sit amet dui maximus iaculis in vitae tellus. Quisque tincidunt eros convallis tristique tincidunt. Suspendisse potenti. Curabitur iaculis ut eros feugiat maximus. Suspendisse potenti."
      />
      <FAQItem
        icon={<CurrencyDollarIcon strokeWidth={0.5} />}
        question="Qual o valor?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue nulla metus, ut rhoncus est mattis imperdiet. Maecenas nec nulla sit amet dui maximus iaculis in vitae tellus. Quisque tincidunt eros convallis tristique tincidunt. Suspendisse potenti. Curabitur iaculis ut eros feugiat maximus. Suspendisse potenti."
      />
    </FAQLayoutComponent>
  );
};
