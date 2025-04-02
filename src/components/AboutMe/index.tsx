import {
  AboutMeContentComponent,
  AboutMeLayoutComponent,
  ImageComponent,
  TextContentComponent,
} from "./styles";

export const AboutMe = () => {
  return (
    <AboutMeLayoutComponent>
      <AboutMeContentComponent>
        <ImageComponent>
          <img src="/src/components/AboutMe/profile.jpeg" width={"350rem"} />
        </ImageComponent>
        <div className="about_text">
          <div className="about_header">
            <h1>Sobre mim</h1>
            <span>CRP: 06/133754</span>
          </div>
          <TextContentComponent>
            <p>
              Sou Psicóloga e Psicanalista, graduada pela UNOESTE (2011-2016),
              com aperfeiçoamento da técnica e da escuta psicanalítica pela
              SBPSP (2020-2022), e intuições como CEP, e IEPP. Como parte da
              formação, cursei disciplinas e cursos sobre assistência social e
              saúde mental pública (UNESP) com foco no manejo e técnica de casos
              de sofrimento psíquicos graves (psicose).
            </p>
            <p>
              Entre 2019 e 2024 atuei no serviço de saúde pública (SUS), numa
              equipe multidisciplinar de um hospital psiquiátrico, cuidando e
              participando ativamente do tratamento de mulheres e homens adultos
              em estado mental grave.
            </p>
            <p>
              Permaneço numa formação continuada, alinhada na perspectiva da
              psicanálise inglesa, com interesse pela psicopatologia, e os
              estudos do psiquismo desde seus primeiros anos de vida. Para além
              da teoria e conceitos, compartilho um interesse particular pela
              literatura, e logo pela escrita como uma expressão dos afetos, e a
              sua universalidade.
            </p>
            <p>
              Atualmente, atendo adolescentes e adultos, online e presencial no
              meu consultório particular na cidade de Presidente Prudente - SP.
            </p>
          </TextContentComponent>
        </div>
      </AboutMeContentComponent>
    </AboutMeLayoutComponent>
  );
};
