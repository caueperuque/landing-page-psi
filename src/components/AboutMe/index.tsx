import ProfileImg from '../../assets/AboutMe/profile.jpeg';
import {
    AboutMeContentComponent, AboutMeLayoutComponent, AboutMeTextComponent,
    AboutMeTextHeaderComponent, Divisor, ImageComponent, TextContentComponent
} from './styles';

export const AboutMe = () => {
  return (
    <AboutMeLayoutComponent>
      <AboutMeContentComponent>
        <ImageComponent>
          <img src={ProfileImg} />
        </ImageComponent>
        <AboutMeTextComponent>
          <AboutMeTextHeaderComponent>
            <h1>Sobre mim</h1>
            <span>CRP: 06/133754</span>
            <Divisor />
          </AboutMeTextHeaderComponent>
          <TextContentComponent>
            <p>
              Formada em Psicologia pela UNOESTE em 2016, atuo na clínica desde a graduação. Entre
              2019 e 2024, trabalhei como psicóloga hospitalar em um hospital psiquiátrico público, uma
              experiência que me deu uma compreensão aprofundada sobre o cuidado de pessoas com
              sofrimentos psíquicos graves.
            </p>
            <p>
              Interessada pela psicanálise desde antes da graduação, em 2020 iniciei meu primeiro curso de
              formação como psicanalista pela SBPSP, e sigo me aprimorando através da mesma instituição, e de
              outras com o mesmo rigor. Paralelamente, dediquei-me a aprofundar sobre a saúde mental pública
              no SUAS e no SUS, e mantenho a participação em grupos de estudos, e discussões que permitam
              aprimorar a minha escuta clínica, e a compreensão a respeito da contemporaneidade e seus
              desafios.
            </p>
            <p>
              Atualmente, realizo atendimento individual para adolescentes e adultos, tanto online quanto
              presencialmente em meu consultório em Presidente Prudente - SP.
            </p>
          </TextContentComponent>
        </AboutMeTextComponent>
      </AboutMeContentComponent>
    </AboutMeLayoutComponent>
  );
};
