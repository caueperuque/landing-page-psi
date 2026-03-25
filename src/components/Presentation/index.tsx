import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SalaImg from "../../assets/Presentation/sala.jpeg";
import { fadeInUp, topicTransition } from "../../utils/animations";
import {
  ArrowButton,
  BulletListComponent,
  Dot,
  DotsContainer,
  HeaderDivisor,
  ImageComponent,
  NavigationComponent,
  PresentationContentComponent,
  PresentationLayoutComponent,
  PresentationTextComponent,
  PresentationTextHeaderComponent,
  ReferenceText,
  TopicComponent,
} from "./styles";

interface Topico {
  titulo: string;
  conteudo: ReactNode;
}

const topicos: Topico[] = [
  {
    titulo: "",
    conteudo: (
      <>
        <p>
          Muito acontece em uma sessão de análise, mas pouco é possível de ser
          transmitido em palavras. Isso ocorre porque a relação construída entre
          analista e paciente é, antes de tudo, uma experiência emocional — um
          trabalho realizado em conjunto e desenvolvido encontro após encontro.
        </p>
        <p>
          Para quem não está familiarizado com o termo, a análise pode ser
          entendida como uma sessão de psicoterapia conduzida, e pensada, a
          partir dos saberes da psicanálise. Em outras palavras, refere-se a um
          modo de trabalho que se baseia na investigação aprofundada do
          inconsciente e de suas formas de expressão. O psicanalista, sustentado
          por sua formação rigorosa, propõe-se a compreender, através da escuta
          de seu paciente, o que o levou à sua queixa atual e o que isso revela
          sobre sua própria história e seu modo de ser.
        </p>
        <p>
          Sintomas como ansiedade excessiva, tristeza profunda ou comportamentos
          repetitivos que geram prejuízo à vida são compreendidos como formas de
          expressão de um sofrimento provocado por situações difíceis —
          vivências que, embora passadas, ainda assombram o presente. Nesse
          processo, psicanalista e paciente buscam, juntos, uma forma de cuidar
          e dar sentido a esse momento.
        </p>
      </>
    ),
  },
  {
    titulo: "Para além do diagnóstico",
    conteudo: (
      <p>
        O trabalho que realizaremos busca construir um sentido para as
        experiências emocionais que vão além de possíveis diagnósticos. Entendo
        que cada pessoa possui um modo de ser próprio, construído desde a
        infância precoce. Ideias, percepções e expectativas familiares se
        entrelaçam na nossa autopercepção e, consequentemente, na nossa história
        individual, produzindo efeitos concretos em como somos e como vemos o
        mundo.
      </p>
    ),
  },
  {
    titulo: "O que acontece nas sessões?",
    conteudo: (
      <>
        <p>
          Durante o atendimento, o paciente é convidado a falar livremente sobre
          o que compõe seus dias, seus momentos importantes e seus afetos. Minha
          escuta busca identificar como o paciente se relaciona com o que lhe
          acontece e com suas angústias, permitindo que, juntos, possamos
          construir um novo sentido para aquilo que o assombra.
        </p>

        <p>
          Um trabalho psicanalítico bem-sucedido oferece ao paciente a
          possibilidade de:
        </p>

        <BulletListComponent>
          <li>
            Fazer escolhas autênticas: decidir o que é melhor para si a partir
            da própria realidade;
          </li>
          <li>
            Desenvolver autonomia: agir a partir do seu desejo, e não apenas
            pelo que "vem de fora";
          </li>
          <li>
            Ampliar a capacidade de pensar: transformar a dor em trabalho
            psíquico e aprendizado.
          </li>
        </BulletListComponent>

        <p>
          O acompanhamento com uma psicóloga/psicanalista nem sempre será
          simples ou agradável — mas o sofrimento também não é. Nenhum
          acontecimento da vida, por si só, oferece um aprendizado; aprender
          exige a capacidade de pensar a experiência com os afetos envolvidos. É
          a partir daí que alcançamos a máxima de uma análise: a liberdade de
          fazer escolhas e decidir por si.
        </p>
      </>
    ),
  },
];

export const Presentation = () => {
  const [topicoAtual, setTopicoAtual] = useState(0);

  const totalTopicos = topicos.length;
  const topico = topicos[topicoAtual];

  const handleAnterior = () => {
    if (topicoAtual <= 0) return;
    setTopicoAtual((prev) => prev - 1);
  };

  const handleProximo = () => {
    if (topicoAtual >= totalTopicos - 1) return;
    setTopicoAtual((prev) => prev + 1);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <PresentationLayoutComponent>
        <PresentationContentComponent>
          {/*<ImageComponent>
            <img src={SalaImg} alt="Sala de atendimento" />
          </ImageComponent>*/}
          <PresentationTextComponent>
            <PresentationTextHeaderComponent>
              <h1>A sessão de análise: um trabalho a dois</h1>
              <HeaderDivisor />
            </PresentationTextHeaderComponent>

            <AnimatePresence mode="wait">
              <motion.div
                key={topicoAtual}
                variants={topicTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <TopicComponent>
                  <h2>{topico.titulo}</h2>
                  {topico.conteudo}
                </TopicComponent>
              </motion.div>
            </AnimatePresence>

            <NavigationComponent aria-label="Navegação entre tópicos">
              <ArrowButton
                onClick={handleAnterior}
                disabled={topicoAtual === 0}
                aria-label="Tópico anterior"
              >
                <ChevronLeftIcon />
              </ArrowButton>

              <DotsContainer>
                {topicos.map((_, index) => (
                  <Dot
                    key={index}
                    $ativo={index === topicoAtual}
                    onClick={() => setTopicoAtual(index)}
                    aria-label={`Ir para tópico ${index + 1}`}
                  />
                ))}
              </DotsContainer>

              <ArrowButton
                onClick={handleProximo}
                disabled={topicoAtual === totalTopicos - 1}
                aria-label="Próximo tópico"
              >
                <ChevronRightIcon />
              </ArrowButton>
            </NavigationComponent>

            <ReferenceText>
              Texto de autoria própria. Referência bibliográfica: "Para que
              serve uma análise? E outros ateliês." Marion Minerbo. Vol. 1.
              Editora Blucher, 2024.
            </ReferenceText>
          </PresentationTextComponent>
        </PresentationContentComponent>
      </PresentationLayoutComponent>
    </motion.div>
  );
};
