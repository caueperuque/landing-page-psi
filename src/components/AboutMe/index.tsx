import { motion } from "framer-motion";
import ProfileImg from "../../assets/AboutMe/profile.jpeg";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import {
  AboutMeContentComponent,
  AboutMeLayoutComponent,
  AboutMeTextComponent,
  AboutMeTextHeaderComponent,
  Divisor,
  ImageComponent,
  TextContentComponent,
} from "./styles";

export const AboutMe = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <AboutMeLayoutComponent>
        <AboutMeContentComponent>
          <motion.div variants={fadeInUp}>
            <ImageComponent>
              <img src={ProfileImg} />
            </ImageComponent>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <AboutMeTextComponent>
              <AboutMeTextHeaderComponent>
                <h1>Sobre mim</h1>
                <span>CRP: 06/133754</span>
                <Divisor />
              </AboutMeTextHeaderComponent>
              <TextContentComponent>
                <p>
                  Formada em Psicologia pela Unoeste em 2016, atuo na clínica
                  desde o meu primeiro ano de formação. Entre 2019 e 2024, para
                  além da prática em consultório, trabalhei como psicóloga
                  hospitalar em um hospital psiquiátrico público. Essa
                  experiência me proporcionou um repertório amplo no
                  acompanhamento de pessoas em sofrimento mental grave.
                </p>
                <p>
                  Meu trabalho é orientado pela psicanálise, o que diferencia
                  minha escuta e minha compreensão sobre os modos de ser e as
                  inúmeras possibilidades de expressão do sofrer. Envolvida com
                  estudos e grupos de atividades psicanalíticas desde a
                  graduação, iniciei em 2020 minha formação como psicanalista
                  pela Sociedade Brasileira de Psicanálise de São Paulo (SBPSP),
                  instituição onde sigo em constante aperfeiçoamento, ao lado de
                  outras organizações filiadas de rigor semelhante.
                </p>
                <p>
                  Busco desenvolver minha escuta e minha compreensão acerca da
                  mente humana de forma crítica, atenta à realidade
                  contemporânea, às diversidades e aos atravessamentos sociais.
                  Atualmente, realizo atendimentos individuais para adolescentes
                  e adultos, nas modalidades online e presencial, em meu
                  consultório em Presidente Prudente.
                </p>
              </TextContentComponent>
            </AboutMeTextComponent>
          </motion.div>
        </AboutMeContentComponent>
      </AboutMeLayoutComponent>
    </motion.div>
  );
};
