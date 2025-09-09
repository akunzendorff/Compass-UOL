# _*ALIGN - ALINHANDO O FUTURO A DOIS*_

## Índice
- [Introdução](#introdução)
- [Problematização](#problematização)
- [Solução Proposta](#solução-proposta)
- [Funcionalidades](#funcionalidades)
- [Arquitetura de integração](#arquitetura-de-integração)
- [Fluxo de Dados](#fluxo-de-dados)
- [Segurança e Privacidade](#segurança-e-privacidade)
- [Diferenciais Inovadores](#diferenciais-inovadores)
- [Desafios esperados](#desafios-esperados)

---

## Introdução
O casamento é um dos momentos mais especiais na vida de um casal, e também um dos mais estressantes, especialmente quando o assunto é dinheiro. De acordo com uma pesquisa da Serasa (2024), 60% dos casais assumem dívidas durante o planejamento do casamento, e 73% discutem finanças no primeiro ano de vida a dois (IBGE, 2023). O problema não está apenas nos gastos, mas na falta de transparência, na divisão desequilibrada de responsabilidades e na ausência de ferramentas que tornem essa jornada mais colaborativa.

Foi pensando nisso que criamos o Align - um aplicativo que vai muito além de um simples organizador financeiro. Nosso objetivo é ajudar casais a planejar não apenas o casamento, mas toda uma vida compartilhada com clareza, leveza e, o mais importante: sem conflitos. 

Utilizando a tecnologia do Open Finance, o Align integra contas bancárias, cartões de crédito e metas financeiras em um só lugar, transformando a gestão do dinheiro em uma experiência unificada, gamificada e adaptada às necessidades emocionais do casal.

Com funcionalidades como Termômetro de Metas, o Modo Anti-Conflito e o Gerenciamento de Gastos Compartilhados, o Align não só organiza as finanças, mas fortalece a relação mostrando que, quando o assunto é  construir um futuro, planejar juntos é o melhor caminho.

## Problematização
O planejamento financeiro do casamento e da vida a dois é um dos maiores desafios enfrentados por casais que estão prestes a oficializar sua união. Organizar e dividir responsabilidades financeiras de forma clara, justa e sem gerar estresse emocional é uma tarefa complexa - especialmente quando faltam ferramentas adequadas para facilitar esse processo.

A ausência de soluções focadas na gestão financeira colaborativa contribui diretamente para uma série de consequências negativas:
 - Conflitos recorrentes: Muitos divórcios no primeiro ano de casamento estão associados a desentendimentos sobre gastos e prioridades financeiras.
 - Endividamento: Sem planejamento adequado, casais recorrem ao crédito pessoal para arcar com os custos do casamento, acumulando dívidas logo no início da vida conjunta.
 - Infelicidade pessoal: O estresse financeiro pode gerar sentimentos de frustração, incapacidade e desânimo, afetando não apenas o relacionamento, mas também a saúde emocional individual de cada parceiro.

Diante desse cenário, torna-se evidente a necessidade de uma solução que vá além do controle de gastos: uma ferramenta que promova parceria, diálogo e equilíbrio emocional na construção da vida financeira em casal.

## Solução Proposta
Apresentamos o Align: um aplicativo que usa a tecnologia do Open Finance para transformar a gestão financeira conjugal em uma jornada colaborativa, transparente e sem estresse, acompanhando o casal desde o planejamento do casamento até a construção de uma vida a dois.
A proposta se baseia em quatro pilares centrais:

- Automação financeira inteligente: Por meio da integração com APIs de Open Finance, o Align sincroniza em tempo real as contas e cartões do casal, categorizando automaticamente os gastos em áreas como “Decoração”, “Lua de Mel”, “Aluguel”, entre outros objetivos compartilhados.
 - Transparência na gestão: O aplicativo oferece uma visão unificada e clara das finanças do casal, promovendo equilíbrio na divisão de responsabilidades e evitando mal-entendidos.
 - Colaboração emocional: Recursos gamificados, como o termômetro de metas, recompensas por conquistas e alertas empáticos (ex: “Maria, faltam R$200 para atingir a meta do buffet!”) tornam o processo leve, respeitoso e motivador.
 - Integração prática no dia a dia: Funcionalidades como listas de tarefas compartilhadas e comandos de voz (via Amazon Alexa) facilitam a organização e a comunicação entre os parceiros, reforçando a parceria na rotina.	

Mais do que um aplicativo financeiro, o Align é um facilitador de diálogos e decisões, ajudando casais a construírem, juntos, uma vida com propósito, equilíbrio e bem-estar financeiro.

## Funcionalidades
O Align foi pensado para ser mais do que um gerenciador financeiro: ele é um facilitador da vida a dois. Abaixo, apresentamos suas principais funcionalidades, projetadas para tornar a gestão financeira conjugal mais leve, prática e emocionalmente saudável:
 - Perfil Conjunto: Cada casal conta com um perfil compartilhado, permitindo o cadastro de dois usuários. O compartilhamento de dados é opcional, respeitando os limites e acordos de privacidade de cada relação.
 - Sincronização Automática via Open Finance: Integração direta com instituições financeiras (como Itaú, Nubank, entre outras), garantindo atualização em tempo real das movimentações bancárias e de cartões de crédito de ambos os parceiros.
 - Setorização Inteligente de Gastos: O Align classifica automaticamente as despesas em categorias personalizáveis, como "Casamento", "Casa Nova", "Lazer", “Contas Fixas” e outros gastos ou metas do casal, facilitando a visualização e o controle.
 - Termômetro de Metas: Um identificador visual e interativo mostra o progresso de metas financeiras, como "70% do valor da meta Lua de mel alcançado".
 - Modo Anti-Conflito: Alertas e lembretes são enviados com linguagem empática e não confrontadora, como "Ana, você utilizou 60% do orçamento destinado a vestuário", promovendo o diálogo sem gerar atrito.
 - Tarefas Compartilhadas: O casal pode criar listas de afazeres com atribuições específicas, como "João, chegou o dia de pagar o DJ” ou “Maria, chegou o dia de comprar o vestido", unindo organização prática e colaboração no dia a dia.
 - Controle por voz: Comandos de voz tornam a experiência ainda mais acessível e integrada à rotina: “ Alexa, quanto gastamos com decoração até agora?”.
 - Modo Poupança Inteligente: Permite configurar a alocação automática de um percentual da renda de cada parceiro para objetos conjuntos,como “5% para fundo de emergência” ou “10% para a entrada do apartamento”.
 - Sistema de recompensas: A gamificação motiva o casal a manter bons hábitos financeiros. Exemplos: “Se o casal economizar R$1.000 este mês, ganham direito a pedir uma pizza”. O sistema pode ser integrado a APIs de cashback e programas de fidelidade, criando uma rede de incentivos reais. 

## Arquitetura de Integração
O Align utilizará o ecossistema do Open Finance para acessar, importar e processar dados financeiros dos casais de forma autorizada, segura e eficiente. 

Para simplificar a integração com múltiplas instituições financeiras e garantir a conformidade com os requisitos regulatórios, o aplicativo fará uso de um agregador de APIs autorizado, como Pluggy, Belvo ou Klavi. Essas soluções já estão integradas ao Open Finance brasileiro, o que elimina a necessidade de registro direto no Banco Central, mantendo a viabilidade do projeto e reduzindo a complexidade regulatória.

A autenticação dos usuários será realizada por meio do protocolo OAuth 2.0, garantindo consentimento explícito e seguro para o compartilhamento de dados. Com a autorização ativa, o agregador fornecerá informações como: 
 - Saldos Bancários
 - Movimentações  e extratos
 - Informações de cartões de crédito 

Esses dados serão consumidos, normalizados e categorizados pelo backend do Align, alimentando visualmente os dashboards de gastos, metas financeiras e progresso das economias em tempo real.

### Tecnologias e Comunicação
 - Backend: Desenvolvido com Node.js, será responsável pelo consumo das APIs dos agregadores, processamento dos dados financeiros e gerenciamento das regras de negócio da aplicação.
 - Frontend (Mobile): Desenvolvido em React Native, garantindo uma única base de código para Android e iOS, reduzindo custos e tempo de desenvolvimento.
 - APIs RESTful: Toda comunicação entre o frontend, backend e agregador ocorrerá por meio de APIs REST seguras, com autenticação baseada em tokens JWT.
 - Banco de Dados: As informações serão armazenadas de forma estruturada e segura em um banco de dados relacional, com criptografia de dados sensíveis.
 - Segurança: Será utilizado OAuth 2.0 combinado com OpenID Connect, em conformidade com as diretrizes de segurança estabelecidas pelo Banco Central do Brasil para o ecossistema Open Finance.

Essa arquitetura garante uma experiência fluida, segura e transparente para os casais, ao mesmo tempo em que mantém o Align em conformidade com os padrões técnicos e regulatórios exigidos.

## Fluxo de Dados
O fluxo de dados no Align tem como ponto de partida o consentimento explícito de cada parceiro, autorizando o acesso às suas contas bancárias por meio do Open Finance. Essa autorização é feita de maneira segura, seguindo padrões do protocolo OAuth 2.0, garantindo o controle e a transparência no compartilhamento das informações. 

Uma vez concedido acesso, os dados bancários e de cartões de crédito de cada parceiro são coletados periodicamente por meio do agregador de APIs (como Pluggy, Belvi ou Klavi). Essas informações incluem:
 - Saldos atualizados
 - Movimentações e transações
 - Informações de crédito e despesas

No backend, esses dados são processados, normalizados e automaticamente categorizados com base nas regras definidas (como Casamento, Casa Nova, Lazer, etc). Essa categorização permite transformar dados brutos em informações úteis e personalizadas, prontas para serem apresentadas ao usuário. 	O frontend, desenvolvido em React Native, consome essas informações e as exibe por meio de:
 - Dashboards intuitivos de gastos e metas
 - Termômetros de progresso financeiro
 - Alertas empáticas e gamificados

Esse processo cria uma experiência visual clara e motivadora, reforçando a colaboração entre os parceiros e incentivando o alcance dos objetivos em conjunto, sem conflitos ou sobrecargas.

Todo o ciclo de dados é estruturado com foco em segurança, privacidade e usabilidade, promovendo confiança e engajamento contínuo do casal na plataforma.

## Segurança e privacidade
A segurança da informação e a privacidade dos usuários são pilares fundamentais no desenvolvimento da aplicação, especialmente considerando a natureza sensível dos dados financeiros envolvidos. Abaixo, detalham-se as principais estratégias adotadas para garantir a segurança e a conformidade regulatória. 
 - Consentimento e Transparência:
A coleta, o uso e o eventual armazenamento de dados financeiros somente ocorrerão mediante consentimento explícito do usuário, conforme exige a Lei Geral de Proteção de Dados(LGPD). 

 - Criptografia de Dados:
Todas as comunicações entre o aplicativo, o backend e as APIs do Open Finance serão protegidas por TLS (Transport Layer Security), garantindo a criptografia dos dados em trânsito. Além disso, dados sensíveis armazenados localmente serão protegidos com algoritmos como AES-256 assegurando que, mesmo em caso de violação não serão interpretados.

 - Minimização dos Dados:
A aplicação seguirá um princípio de minimização de dados para salvar apenas informações estritamente necessárias para o funcionamento das funcionalidades oferecidas. 

 - Autenticação e Controle de Acesso:
Serão adotadas medidas de autenticação e autorização, incluindo o uso de OpenID Connect com tokens seguros (JWT). O backend garantirá que cada usuário acesse exclusivamente os próprios dados.

 - Política de Revogação e Exclusão de Dados:
Os usuários poderão, a qualquer momento, revogar o acesso aos seus dados financeiros via Open Finance, bem como solicitar a exclusão completa de seus dados armazenados na aplicação.

## Diferenciais inovadores
O Align é um aplicativo inovador que transforma a gestão financeira conjugal em uma jornada colaborativa e contínua - desde o planejamento do casamento até a construção de metas da vida a dois. Utilizando a tecnologia do Open Finance, o app proporciona uma experiência integrada, transparente e emocionalmente acolhedora para casais que desejam cultivar uma relação financeira saudável e duradoura.

Seu principal diferencial está na automação financeira inteligente. Através da integração com APIs de Open Finance, o Align sincroniza em tempo real as contas bancárias e cartões de crédito do casal, categorizando automaticamente os gastos em áreas como “Buffet”, “Decoração”, “Lua de Mel”, “Aluguel”, “Viagens” e outros objetivos compartilhados. Isso elimina a burocracia, reduz o esforço manual e incentiva o uso contínuo da plataforma.

Mais do que tecnologia, o Align adota uma abordagem centrada na colaboração emocional. Funcionalidades gamificadas - como termômetros de metas, recompensas por conquistas e alertas empáticos (por exemplo: “Maria, faltam R$200 para atingir a meta do buffet!”) - tornam a comunicação mais leve, respeitosa e motivadora, fortalecendo o vínculo entre o casal.

Além da gestão financeira, o Align se posiciona como um ecossistema completo de organização da vida conjugal. Oferece recursos como listas de tarefas compartilhadas, controle de metas em conjunto e planejamento de longo prazo, acompanhando o casal em todas as fases da relação.

Com foco em parceria, autonomia e bem-estar financeiro, o Align é muito mais do que um gerenciador de finanças: é uma ferramenta para construir uma vida a dois com propósito e harmonia.

## Desafios esperados
A construção do Align como um ecossistema inteligente para a vida financeira a dois envolve não apenas tecnologia, mas também sensibilidade para lidar com aspectos emocionais e comportamentais dos casais. Nesse percurso, é natural que surjam desafios importantes - técnicos, humanos e regulatórios - que exigem estratégia, empatia e visão de longo prazo.

Um dos principais desafios esperados é a integração eficaz com as APIs de Open Finance, garantindo segurança, estabilidade e atualização em tempo real dos dados bancários. Para superar essa barreira, o Align adotará parcerias estratégicas com instituições financeiras homologadas, além de uma arquitetura robusta e escalável, com foco em privacidade e proteção de dados sensíveis, em total conformidade com a LGPD.

Outro ponto crítico está na aderência do usuário à plataforma. O gerenciamento financeiro em casal ainda pode ser um tema delicado, permeando emoções, crenças e hábitos diversos. Para promover o engajamento contínuo, o Align aposta em experiências gamificadas, comunicação empática e design centrado no usuário, transformando tarefas complexas em jornadas leves, motivadoras e colaborativas.

Há também o desafio de equilibrar a autonomia individual com metas conjuntas. Nem sempre os dois parceiros terão o mesmo ritmo, prioridades ou estilo de consumo. O Align enfrentará esse desafio com funcionalidades flexíveis, como visualizações separadas de gastos individuais e opções de configuração personalizada para metas compartilhadas, sempre valorizando o diálogo e a transparência.

Além disso, por ser uma solução voltada a um público específico, que são os casais em diferentes fases da relação, será essencial garantir personalização sem fragmentação. Isso será feio por meio de módulos evolutivos, que acompanham o casal desde os preparativos do casamento até os planos de longo prazo, adaptando o conteúdo e as funcionalidades conforme o contexto de vida a dois.

Por fim, a educação financeira emocional será um pilar para transformar o Align em uma ferramenta de impacto real. A estratégia será oferecer conteúdos educativos leves, interativos e contextualizados, que ajudem o casal a tomar decisões conscientes, respeitando o tempo e a realidade de cada um.

O Align nasce com o compromisso de unir tecnologia e afeto, praticidade e profundidade. E mesmo diante dos desafios, cada obstáculo será uma oportunidade de fortalecer essa missão: construir relações financeiras mais saudáveis, humanas e duradouras.
