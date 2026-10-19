const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
    
    // Animação das barras do menu hambúrguer
    const bars = mobileMenu.querySelectorAll('.bar');
    if(mobileMenu.classList.contains('is-active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// ==========================================
// CONFIGURAÇÃO DOS TEXTOS DOS 12 CARDS
// ==========================================
// Importante: O nome da chave (ex: "Exames") deve ser EXATAMENTE igual
// ao texto que está escrito dentro da tag <h3 class="service-title"> no seu HTML.

const listaDeTextos = {
  "Exames": `
    <p><strong>Exame Admissional:</strong> é obrigatório e indispensável para a assinatura de um contrato formal de trabalho. O médico irá avaliar o candidato ao emprego, concluindo pela sua aptidão ou não para o exercício da função/atividade que será desenvolvida. Em síntese, a finalidade do Exame Admissional é checar a saúde do trabalhador, cujo resultado será emitido através do Atestado Médico de Capacidade Funcional.​</p>

    <p><strong>Exame Demissional:</strong> como o próprio nome já diz - é aquele realizado posteriormente ao desligamento do trabalhador de seu emprego. O objetivo principal é atestar as condições de saúde do trabalhador no momento de sua demissão, evitando eventuais alegações futuras relacionadas às doenças ocupacionais e/ou do trabalho. O Atestado de Saúde Ocupacional (ASO) - emitido após o Exame Demissional - é documento indispensável para a homologação do acerto do empregado, independentemente do local de sua realização (perante o Ministério do Trabalho ou do Sindicato da Categoria).</p>

    <p><strong>Exame Periódico:</strong> por sua vez, visam a acompanhar o estado de saúde do trabalhador durante o vínculo de emprego. Todos os exames clínicos e conseqüentes diagnósticos são inseridos no PCMSO (Programa de Controle Médico e Saúde Ocupacional), que é um documento sigiloso e, nesta condição, para evitar informações desabonadoras referentes ao trabalhador, ficam sob o controle médico.</p>

    <p><strong>Exame Mudança de Função:</strong> O exame médico de mudança de função deverá ser realizado sempre que o colaborador for transferido de função ou setor , desde que haja alteração nos riscos ocupacionais que o mesmo venha a se expor. Este exame visa avaliar se o colaborador possui a aptidão necessária para exercer a nova função e se o exercício desta não poderá trazer prejuízos à sua saúde.</p>

    <p><strong>Exame Retorno ao Trabalho:</strong> No exame médico de retorno ao trabalho, deverá ser realizada obrigatoriamente no primeiro dia da volta ao trabalho de trabalhador ausente por período igual ou superior a 30 (trinta) dias por motivo de doença ou acidente, de natureza ocupacional ou não, ou parto.</p>
  `,
  
  "PCMSO": `
    <p><strong>O que significa PCMSO?</strong><p>A sigla PCMSO significa Programa de Controle Médico de Saúde Ocupacional.</p>
<p><strong>Qual a norma que regulamenta o PCMSO?</strong><p>A Norma Regulamentadora – NR 7 através da Portaria 3214/78 regulamenta o Programa de Controle Médico e Saúde Ocupacional.</p>
<p><strong>Para que serve o PCMSO?</strong><p>A NR7 estabelece a obrigatoriedade de elaboração e implementação, por parte de todos os empregadores e instituições que admitam trabalhadores como empregados, do Programa de Controle Médico de Saúde Ocupacional – PCMSO, com o objetivo de promoção e preservação da saúde do conjunto dos seus trabalhadores. É um programa que em conjunto com os demais somará forças em prol da saúde dos trabalhadores. Tem caráter de prevenção, mapeamento precoce e diagnóstico dos agravos a saúde dos trabalhadores, além da constatação dos casos de doenças profissionais ou danos irreversíveis causados por riscos do trabalho ou quaisquer situações ligadas ao ambiente de trabalho. O PCMSO também serve para que a empresa acompanhe através de exames, se ações de segurança tem sido eficientes ou não.</p>
<p><strong>Quem tem que pagar pela elaboração do PCMSO?</strong><p>A NR deixa claro no item 7.1.1 que a elaboração e implantação do PCMSO é de responsabilidade do empregador. Cabe a ele custear o programa. É importante guardar os recibos e comprovantes de pagamentos referentes os exames médicos e complementares relativos ao PCMSO, à fiscalização do Ministério do Trabalho poderá solicitá-los algum dia.</p>
<p><strong>Como ocorre a elaboração do PCMSO?</strong><p>O PCMSO normalmente é feito com base no PPRA (Programa de Prevenção de Riscos Ambientais). Ele usa os dados coletados na análise do ambiente levantados no PPRA para definir sua estratégia. Como ambos são programas de saúde, devem trabalhar em sintonia. E isso mostra importância do PPRA ser bem elaborado.</p>
<p><strong>Qual a validade do PCMSO?</strong><p>NR 7.4.6 Deverá obedecer a um planejamento em que estejam previstas as ações de saúde a serem executadas durante o ano, devendo estas ser revisadas anualmente (validade um ano).</p>
<p><strong>A falta do PCMSO pode me levar à multa?</strong><p>A NR 28 traz uma tabela indicando os valores das multas que podem ser aplicadas às faltas in medicina e segurança do trabalho. Como os valores comportam variação, caberá à SRTE determinar o valor será aplicado à multa para o caso específico. Vale ressaltar que a falta do PCMSO pode causar vários outros problemas para a empresa.</p>
<p><strong>A partir de quantos funcionários devo ter o PCMSO?</strong><p>Assim como o PPRA o PCMSO deve ser elaborado para todos os tipos e tamanhos de empresas. Toda empresa que admite trabalhadores como empregados deve elaborar o implantar o PCMSO segundo a NR 7.1.1.</p>
<p><strong>Por quanto tempo devo guardar o PCMSO?</strong><p>NR 7.4.5.1 Os registros e tudo mais relacionado ao programa deverão ser mantidos em segurança por período mínimo de 20 (vinte) anos.</p>
  `,
  
  "PGR": `
    <p><strong>O que é o PPRA?</strong><p>O PPRA é um programa de prevenção a riscos ambientais que tem por objetivo promover a saúde, a segurança e a integridade. As empresas que devem elaborar o PPRA are aquelas onde há risco ambiental conhecido, ou ainda as que podem vir a apresentar esses riscos futuramente. De acordo com a NR 9, são considerados riscos ambientais:</p>
<p> - Agentes químicos, como gases e poeira de diversos tipos;</p>
<p> - Agentes físicos, como radiações ionizantes e não ionizantes, ultrassom e infrassom, altas ou baixas temperaturas, ruído sonoro, vibrações e pressão atmosférica anormal;</p>
<p> - Agentes biológicos, como vírus e bactérias, fungos, bacilos, parasitas, dentre outros.</p>
<p>Além de analisar qual o tipo de risco com o qual se está lidando, é preciso considerar também a intensidade e o tempo de exposição. São considerados apenas os agentes que, devido à sua intensidade e/ou tempo de exposição, sejam prejudiciais à saúde do trabalhador.</p>

<p><strong>Quem é obrigado a implantar o PPRA?</strong><p>Independentemente de haver ou não risco ambiental ou sua previsão futura, todas as empresas que tenham pelo menos um funcionário em seu quadro de empregados estão obrigadas a implantar o PPRA, segundo a NR 9. Muitos condomínios residenciais e comerciais não têm a ciência de que são obrigados a implantar o PPRA, e isso acaba por lhes gerar problemas com a fiscalização, e até mesmo processos judiciais.</p>
  `,

  "LTCAT": `
  <p><strong>Para que serve o LTCAT ?</strong><p>O Laudo Técnico de Condições  Ambientais de Trabalho Trata-se de um comprovante de que o trabalhador esteve exposto a determinados riscos ambientais durante o período de permanência na empresa. Nesse sentido é a partir dele que é determinada a necessidade ou não da aposentadoria especial pelo INSS. Se a Previdência Social determinar que aquele trabalhador tem direito à aposentadoria especial, a empresa deve recolher todas as alíquotas de contribuição destinadas ao financiamento do benefício.</p>
<p><strong>As empresas podem ser multadas caso não possuam o LTCAT?</strong><p>A empresa que não mantiver laudo técnico atualizado com referência aos agentes nocivos existentes no ambiente de trabalho ou que emitir documento de comprovação de efetiva exposição em desacordo com o respectivo laudo, estará sujeito a penalidades previstas em lei. A comprovação da efetiva exposição do segurado aos agentes nocivos deve ser feita em formulário estabelecido pelo INSS, emitido pela empresa ou seu preposto, com base em laudo técnico de condições ambientais do trabalho expedido por médico do trabalho ou engenheiro de segurança do trabalho.</p>
<p><strong>Obrigatoriedade do LTCAT</strong><p>Segundo a Lei Nº 9.732 , DE 11 DE DEZEMBRO DE 1998,  no artigo 57, parágrafo 1º faz menção: A comprovação da efetiva exposição do segurado aos agentes nocivos será feita mediante formulário, na forma estabelecida pelo Instituto Nacional do Seguro Social — INSS, emitido pela empresa ou seu preposto, com base em laudo técnico de condições ambientais do trabalho expedido por médico do trabalho ou engenheiro de segurança do trabalho.</p>
<p><strong>Quem pode elaborar o LTCAT?</strong><p>De acordo com o  § 1º do art. 58 da Lei 8213/91 o LTCAT deve ser expedido pelo médico do trabalho ou engenheiro de segurança do trabalho, devidamente habilitados.</p>
<p><strong>Qual a validade?</strong><p>O LTCAT não têm uma validade apenas considerando uma periodicidade. O mesmo, deve ser atualizado sempre que ocorrer alterações no ambiente de trabalho. Lembrando que o mesmo não substitui nenhum dos programas como o PPRA, PCMSO, PCMAT ou PGR, o LTCAT é um documento regulamentado pela Previdência Social, sem força substitutiva para um documento sugestionado pelo Ministério do Trabalho.</p>
<p><strong>Qual é a penalidade para quem não realiza o LTCAT?</strong><p>O decreto nº 3.048, de 06 de maio de 199 – art. 283, Capitulo III estabelece uma multa para empresas que não realizam o LTCAT que vária segundo a gravidade da infração, podendo ser entre R$ 991,03 a R$ 99.102,12.Esses valores estão atualizados conforme a Portaria MPS nº 727 de 30 de maio de 2003.</p>
  `,

  "Complementares": `
    <p><strong>Audiometria</strong><p>Trata-se de uma avaliação da acuidade auditiva do trabalhador, ou seja, detecta a ocorrência de possíveis perdas no sentido da audição do funcionário. O exame de audiometria é realizado em cabine de isolamento acústico.</p>
<p><strong>Espirometria</strong><p>Este exame é uma medição da quantidade de ar e a velocidade com que ele entra e sai dos pulmões quando o funcionário respira. A espirometria é realizada com o funcionário de pé e respirando pela boca, que o trabalhador coloca em um tubo conectado ao aparelho medidor (espirômetro).</p>
<p><strong>Radiografias</strong><p>Os exames de Raios X do tórax e da coluna vertebral são os mais comumente solicitados para fins de Saúde Ocupacional.</p>
<p><strong>Eletrocardiograma (ECG)</strong><p>O eletrocardiograma é uma medição das variações das ondas elétricas resultantes das contrações do coração. O ECG é realizado com o funcionário deitado e com eletrodos cardíacos afixados na região torácica. Esses eletrodos captarão as variações elétricas das batidas do coração e as transmitirão para um aparelho (eletrocardógrafo) que imprimirá um gráfico, posteriormente lido pelo médico.</p>
<p><strong>Eletroencefalograma (EEG)</strong><p>Esse exame analisa a atividade elétrica cerebral espontânea, ou seja, detecta possíveis anormalidades no funcionamento cerebral. No EEG o paciente permanece deitado, com eletrodos afixados em seu couro cabeludo. Os eletrodos encaminham os sinais captados para um aparelho (eletroencefalógrafo) que imprimirá um gráfico a ser analisado pelo médico.</p>
<p><strong>Acuidade visual</strong><p>É o exame oftalmológico que avalia a capacidade da visão na percepção de formas e contornos. Detecta a existência de déficit nessa capacidade visual do funcionário. A forma mais simples de sua realização é a verificação através da Escala de Sinais de Snellen. Com ela o funcionário deve ler algumas linhas de letras que vão diminuindo em tamanho.</p>
<p><strong>Exames laboratoriais</strong><p>Trata-se de um conjunto variado de possibilidades de exames, a maioria a partir de avaliação de sangue, urina e fezes do funcionário.</p>
  `,

  "PPP": `
    <p>O Perfil Profissiográfico Previdenciário-PPP constitui-se em um documento histórico-laboral do trabalhador que reúne, entre outras informações, dados administrativos, registros ambientais e resultados de monitoração biológica, durante todo o período em que este exerceu suas atividades na respectiva empresa.</p>
<p>Tendo sua elaboração obrigatória a partir de 01.01.2004 (data fixada pela IN INSS/DC 96/2003) o PPP tem por objetivo primordial fornecer informações para o trabalhador quanto às condições ambientais de trabalho, principalmente no requerimento de aposentadoria especial.</p>
<p>O PPP tem como finalidade:</p>
<p> - Comprovar as condições para habilitação de benefícios e serviços previdenciários, em particular, o benefício de aposentadoria especial;</p>
<p> - Prover o trabalhador de meios de prova produzidos pelo empregador perante a Previdência Social, a outros órgãos públicos e aos sindicatos, de forma a garantir todo direito decorrente da relação de trabalho, seja ele individual, difuso ou coletivo;</p>
<p> - Prover a empresa de meios de prova produzidos em tempo real, de modo a organizar e a individualizar as informações contidas em seus diversos setores ao longo dos anos, possibilitando que a empresa evite ações judiciais indevidas relativas a seus trabalhadores;</p>
<p> - Possibilitar aos administradores públicos e privados acesso a bases de informações fidedignas, como fonte primária de informação estatística, para desenvolvimento de vigilância sanitária e epidemiológica, bem como definição de políticas em saúde coletiva.</p>
<p> - Criado para substituir os antigos formulários denominados SB 40, DISES BE 5235, DSS 8030 e DIRBEN 8030, os quais sempre foram de preenchimento obrigatório apenas para aqueles trabalhadores que laboram expostos a agentes nocivos à sua saúde, sua exigência legal se encontra no § 4º do art. 58 da Lei 8.213/91.</p>
<p>Anteriormente somente os trabalhadores que tinham direito a se aposentar precocemente, com a chamada aposentadoria especial, recebiam os formulários substituídos pelo PPP.</p>
<p>Em decorrência da IN INSS 118/2005, a partir de 1º de janeiro de 2004, a empresa ou equiparada à empresa ficou obrigada a elaborar o PPP, conforme anexo XV da referida Instrução, de forma individualizada para seus empregados, trabalhadores avulsos e cooperados. Atualmente, a Instrução Normativa INSS 77/2015 , alterada pela Instrução Normativa INSS 85/2016, é que estabelece as instruções de preenchimento e o modelo do formulário do PPP.</p>
<p>A exigência abrange aqueles que laborem expostos a agentes nocivos químicos, físicos, biológicos ou associação de agentes prejudiciais à saúde ou à integridade física, considerados para fins de concessão de aposentadoria especial, ainda que não presentes os requisitos para a concessão desse benefício, seja pela eficácia dos equipamentos de proteção, coletivos ou individuais, seja por não se caracterizar a permanência.</p>
<p><strong>MICROEMPRESAS</strong><p>As Micro Empresas e as Empresas de Pequeno Porte não estão dispensadas da emissão do PPP.</p>
<p><strong>RESPONSABILIDADE</strong><p>A responsabilidade pela emissão do PPP é:</p>
<p> - Da empresa empregadora, no caso de empregado;</p>
<p> - Cooperativa de trabalho ou de produção, no caso de cooperados filiados;</p>
<p> - Órgão Gestor de Mão de Obra – OGMO, no caso dos Trabalhadores Portuários Avulsos – TPA;</p>
<p> - Sindicato de Categoria, no caso de trabalhador avulso não portuário.</p>
<p> - O PPP deve ser preenchido, updated e entregue ao trabalhador no momento da rescisão de contrato de trabalho, especificando se o mesmo esteve sujeito aos agentes nocivos à saúde durante o contrato de trabalho, sob pena de multa mínima, de acordo com o art. 283 do Decreto 3.048/99 e da Portaria Interministerial MPS/MF 15/2018 (válida a partir de janeiro/2018) de R$ 2.331,32 (dois mil trezentos e trinta e um reais e trinta e dois centavos).</p>
<p>O PPP deverá ser emitido com base nas demonstrações ambientais, exigindo, como base de dados:</p>
<p>a) Programa de Prevenção de Riscos Ambientais - PPRA;</p>
<p>b) Programa de Gerenciamento de Riscos - PGR;</p>
<p>c) Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção - PCMAT;</p>
<p>d) Programa de Controle Médico de Saúde Ocupacional - PCMSO;</p>
<p>e) Laudo Técnico de Condições Ambientais do Trabalho - LTCAT;</p>
<p>f) Comunicação de Acidente do Trabalho - CAT.</p>
<p>A atualização do Perfil Profissiográfico Previdenciário deve ser feita sempre que houver alteração que implique mudança das informações contidas nas suas seções ou pelo menos uma vez ao ano, quando permanecerem inalteradas suas informações.</p>
  `,

  "Cursos": `
    <p><strong>Formação da CIPA: </strong>Processo completo de formação e eleição da primeira CIPA + treinamento para cipeiros.</p>
<p>Para formar a CIPA, deve-se passar por um processo eleitoral no qual se escolhem os representantes da comissão. O empregador é o responsável pela convocação das eleições para formação e constituição da CIPA, assim como o treinamento dos representantes eleitos. O processo de constituição da comissão eleitoral da CIPA funciona da seguinte maneira:</p>
<p><strong>CRONOGRAMA</strong></p>
<p><strong>1 – EDITAL DE CONVOCAÇÃO PARA ELEIÇÃO: </strong>Nesta data definida seguindo orientações da NR – 05 devemos fixar em edital, da forma mais visível possível o EDITAL DE CONVOCAÇÃO PARA A CANDIDATURA DOS MEMBROS DA CIPA. Deve-se providenciar documentos como fotos, faixas e cartazes que registrem a divulgação do pleito passo a passo até o término das ELEIÇÕES.
É necessário deixar esses documentos expostos para conhecimento de todos durante todo processo eleitoral da CIPA da empresa.</p> 
<p><strong>2 – FORMAÇÃO DA COMISSÃO ELEITORAL: </strong>Deve se formar a COMISSÃO ELEITORAL. Esta comissão pode ser constituída pelo pessoal dos departamentos de RH (Recursos Humanos) ou TST (Técnicos de Segurança do Trabalho ou até mesmo voluntários de outros setores. Ao ter as pessoas deve-se reuni-los ao redor de uma mesa para exemplificar a função do grupo. Deve-se Fazer fotos documentos dessa formação.</p>
<p><strong>3 – ENVIAR CÓPIA DE CONVOCAÇÃO AO SINDICATO: </strong>Após a à formação da comissão eleitoral deve-se enviar um Oficio com cópia dessa convocação ao Sindicato que representa a categoria dos trabalhadores em questão.</p>
<p><strong>4 – PUBLICAÇÃO EDITAL DE INSCRIÇÃO DO CANDIDATO: </strong>O Edital informa que estão abertas as inscrições para o voluntariado da CIPA.</p>
<p><strong>5 – INÍCIO DAS INSCRIÇÕES DOS CANDIDATOS: </strong>Deve-se criar o formulário de inscrição para os candidatos à CIPA.</p>
<p><strong>6 – TERMINO INSCRIÇÕES DOS CANDIDATOS: </strong>Realizar reunião com os organizadores ou com um representante da empresa contratada para formar a CIPA e encerrar as inscrições.</p>
<p><strong>7 – RETIRADA DO EDITAL DE INSCRIÇÃO: </strong>Recolhimento de todos os Editais e anúncios que identifique os candidatos.</p>
<p><strong>8 – RETIRADA DO EDITAL DE CONVOCAÇÃO: </strong>Recolhimento de todos os Editais e anúncios que identifique o numero e o candidato.</p>
<p><strong>9 – REALIZAÇÃO DA ELEIÇÃO; (VOTAÇÃO): </strong>A eleição acontecerá na chegada dos colaboradores, no momento em que registrar o ponto. A urna trancada com cadeado deverá ficar exposta ao lado do Relógio Ponto. Junto a urna deverá estar presente a comissão eleitoral, com a presença de um representante dos servidores. Ao término da votação ainda na presença dos representantes, a urna deverá ser lacrada e encaminhada ao local de apuração.</p>
<p><strong>10 – REALIZAÇÃO DA APURAÇÃO: </strong>A apuração deverá ser feita com apoio de representante dos colaboradores, da comissão eleitoral e dos candidatos.</p>
<p><strong>11 – RESULTADO DA ELEIÇÃO – ATA DA ELEIÇÃO: </strong>Através de ATA, nesta data logo pela manhã o resultado das eleições deverão ser publicadas. Comunicado a Gerencia, aos colaboradores e ao representante sindical.</p>
<p><strong>12 – COMUNICAR AO SINDICATO O RESULTO DAS ELEIÇÃO: </strong>Enviar ao Sindicato o Ofício comunicando o resultado da eleição.</p>
<p><strong>13 – CURSO PARA CIPEIROS: </strong>Iniciar o treinamento dos representantes eleitos CIPA.</p>
<p><strong>14 – TÉRMINO DO MANDATO ANTERIOR: </strong>Encerrar mandato anterior e encaminhar oficio de comunicação para sindicato.</p>
<p><strong>15 – REALIZAÇÃO DA POSSE – ATA DE POSSE NOVOS MEMBROS: </strong>Em cerimônia formal, com a presença de convidados, inclusive de representante sindical, dar posse aos eleitos.</p>
<p><strong>16 – ORGANIZAÇÃO DO CALENDÁRIO DE REUNIÕES: </strong>Em reunião, o Técnico de segurança do trabalho e os membros da CIPA, deverão organizar uma agenda para a reunião anual.</p>
<p><strong>17 – ENTREGAR ATAS DA ELEIÇÃO/POSSE AOS MEMBROS CIPA: </strong>Nesta data, as ATAS de posse e do processo eleitoral devem ser entregues aos membros da CIPA. A constituição da comissão eleitoral tanto o presidente como o vice-presidente constituirão os membros em um período de 55 dias antes de encerrar o mandato atual. Trata-se da Comissão Eleitoral (CE), que tem a responsabilidade de organizar e acompanhar todo o processo eleitoral. No caso de primeira CIPA, a própria empresa constitui a CE e pode até reduzir os prazos no processo eleitoral.</p>
  `,

  "PCMAT": `
    <p><strong>O Que é? </strong><p>O PCMAT (Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção Civil) é um documento completo e minucioso cuja ideia central é prevenir acidentes de trabalho em todas as esferas do segmento da construção civil que deve ser elaborado antes do início das atividades. Ele contempla os riscos de todas as etapas da obra, e por isso não tem validade definida. Periodicamente o PCMAT deve passar por uma reavaliação global e só será necessário quando você possuir 20 (vinte) ou mais empregados dentro de um canteiro de obras.</p>
  `,

  "Laudos": `
    <p><strong>Mas o que é o Laudo Ergonômico? </strong><p>O laudo ergonômico/AET é um documento obrigatório para as empresas cujos funcionários estejam expostos a riscos decorrentes de esforços físicos.Esses esforços podem ser por levantamento e transporte de cargas pesadas, por consequência de esforços repetitivos ou, ainda, por posturas inadequadas, entre outros fatores. A análise demonstra detalhadamente os riscos ergonômicos aos quais o profissional está exposto, oferecendo subsídios para que se realizem adaptações que vão aperfeiçoar a relação entre a produção e o bem-estar do funcionário, minimizando os riscos de lesões decorrentes do trabalho.</p>
<p><strong>Qual seria o profissional mais habilitado para elaboração? </strong><p>Sabe-se que na prática:</p>
<p> - Engenheiros de Segurança;</p>
<p> - Médicos do Trabalho;</p>
<p> - Educadores Físicos;</p>
<p> - Fisioterapeutas.</p>
<p>Assinam Laudos Ergonômicos e, de fato, não há norma que os proíba de o fazerem ou que defina quem são os profissionais competentes para assiná-los. O entendimento da Ius Natura é que o profissional deve possuir um conhecimento ligado à área de Ergonomia, seja no período de graduação ou em uma especialização. Então, o que aconselhamos é que somente os profissionais citados acima, que possua conhecimentos em Ergonomia e Registro em seus respectivos Conselhos de Classe, assinem o laudo. E dentre esses, é mais comum vermos a elaboração de tal documento pelo fisioterapeuta, profissional que possui conhecimentos específicos sobre os problemas de saúde decorrentes de más condições ergonômicas nos ambientes de trabalho.</p>
  `,

  "Assessoria": `
    <p>Med Clin há 26 anos no mercado oferece a seus clientes e parceiros toda infraestrutura, com profissionais disponíveis as necessidades da sua empresa com médicos, técnicos de segurança do trabalho e engenheiros do trabalho e outros, para atendimento as exigências do Ministério do Trabalho na área da saúde do trabalhador, com exames, laudos, acompanhamento nas auditorias, pericias, elaboração de laudos e outros, sempre visando a saúde do trabalhador e da empresa.</p>
  `,

  "Laboratório": `
    <p>Laboratório próprio para garantir exames e análises clínicas com máxima agilidade.</p>
  `,

  "e-Social": `
    <p>Informamos aos nossos clientes que a Medclin Assessoria em Medicina do Trabalho está capacitada para a implantação do e social na área de Medicina e Segurança do Trabalho – SST.</p>
<p>Para que possamos transmitir as informações dos eventos pela clínica:</p>
<p> - 2210 (CAT);</p>
<p> - 2220 (ASOS);</p>
<p> - 2240 ( LAUDOS) – Riscos.</p>
<p>Segue orientações para solicitar ao escritório de contabilidade as seguintes informações:</p>
<p> - Entrar no ECAC e fazer uma procuração digital no CNPJ da MEDCLIN  01.331.213/0001-69, nos EVENTOS DO SST;</p>
<p> - Clique no link abaixo, caso seja um parceiro conveniado MEDCLIN, preencha o formulário abaixo com as informações de seus colaboradores.</p>
<p>Qualquer dúvida, estamos a disposição para maiores esclarecimentos e informações sobre o e social, entrar em contato conosco.</p>
  `
};


// ==========================================
// LÓGICA DE ABERTURA E FECHAMENTO (NÃO MEXER)
// ==========================================
const modal = document.getElementById('service-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

// Mapeia todos os cards da tela
document.querySelectorAll('.service-card').forEach(card => {
  const btn = card.querySelector('.btn-action');
  
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Impede o link '#' de subir a tela
      
      // Pega o título do card clicado
      const tituloCard = card.querySelector('.service-title').innerText.trim();
      
      // Captura a cor do tema (--service-color) que está aplicada nesse card específico
      const corTema = getComputedStyle(card).getPropertyValue('--service-color');
      
      // Alimenta o modal com as informações do card
      modalTitle.innerText = tituloCard;
      modalTitle.style.color = corTema; // Deixa o título do modal na cor do card
      
      // Injeta o texto correspondente da lista ou exibe um aviso se estiver vazio
      let textoHTML = listaDeTextos[tituloCard] || `<p>O texto para o serviço <strong>"${tituloCard}"</strong> ainda não foi configurado no arquivo JavaScript.</p>`;
      
      // ADICIONA O BOTÃO APENAS SE FOR O CARD DO e-Social
      if (tituloCard === "e-Social") {
        const botaoExternoHTML = `
          <div class="modal-footer-action">
            <a href="https://parceiromedclin.medclinonline.com.br/login.php" target="_blank" class="btn-modal-external" style="background-color: ${corTema}">
              Acesso exclusivo para Parceiros
            </a>
          </div>
        `;
        textoHTML += botaoExternoHTML;
      }
      
      modalText.innerHTML = textoHTML;
      
      // Abre o modal nativamente na tela
      modal.showModal();
    });
  }
});

// Fecha o modal ao clicar no botão de fechar (X)
closeModalBtn.addEventListener('click', () => {
  modal.close();
});

// Fecha o modal se o usuário clicar na área escura (fora do box branco)
modal.addEventListener('click', (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});