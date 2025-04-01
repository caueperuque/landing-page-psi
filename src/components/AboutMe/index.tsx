import {
  AboutMeContentComponent,
  AboutMeLayoutComponent,
  TextContentComponent,
} from "./styles";

export const AboutMe = () => {
  return (
    <AboutMeLayoutComponent>
      <AboutMeContentComponent>
        <div>
          <h1>A análise guarda em si todos os tempos do mundo</h1>
          <TextContentComponent>
            <p>
              O analista olha para trás e busca, nos primórdios da vida, nas
              experiências vividas, caminhos de compreensão que lancem luz sobre
              o tempo presente. Por isso, é verdade quando dizem que investimos
              tempo em conhecer a história de nossos pacientes.
            </p>
            <p>
              No entanto, o analista cuidadoso, ao olhar para o passado, não
              estaciona ali. Reconhece a necessidade de compreender o que
              passou, vê no presente as marcas da história, mas encontra nisso a
              possibilidade de elaboração e inauguração de experiências.
            </p>
            <p>
              O analista então aguarda o que está por vir, espera que o futuro
              chegue e se insinue – por meio do sonho, do esperançar, da
              confiança experimentada na relação íntima e particular de uma boa
              análise!
            </p>
            <p>
              Quando menos se espera, passado, presente e futuro se aglutinam
              numa mesma sessão de análise, sem pudor ou cerimônia e os
              pacientes podem, finalmente, circular no tempo, ser (ou voltar a
              ser) crianças, adolescentes ou adultos.
            </p>
            <p>
              A análise guarda em si todos os tempos do mundo e, por isso,
              favorece a integração de experiências, cuida do que foi traumático
              e abre espaço para o novo e para a vida!
            </p>
          </TextContentComponent>
        </div>
        <div>
          <img
            src="https://marinareigado.com.br/wp-content/uploads/2022/04/maebeto-35-683x1024.jpg"
            width={"400rem"}
          />
        </div>
      </AboutMeContentComponent>
    </AboutMeLayoutComponent>
  );
};
