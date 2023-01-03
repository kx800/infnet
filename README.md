# infnet
Respostas:

1)

Observação: O serviço de API da camara.leg.br estava muito lento, e dando erros de timeout no momento da realização do teste.
Portanto, optei por substituir as solicitações de Partidos > Candidatos, por uma api de estrutura similar. No caso, Estado > Municícipo de ibge.gov.br afim de trabalhar no código com mais agilidade.
De qualquer forma, as linhas de código relacionadas as especificações originais foram mantidas como comentários.
Nesse projeto utilizei: HTML, CSS, Javascript e Bootstrap.


2)

SELECT c.customer_id, c.customer_name
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN order_items i ON o.order_id = i.order_id
INNER JOIN products p ON i.product_id = p.product_id
INNER JOIN suppliers s ON p.supplier_id = s.supplier_id
WHERE s.country = 'Brazil'
GROUP BY c.customer_id, c.customer_name

3)

(a)

footer.php
header.php
index.php
page.php
sidebar.php
single.php 
style.css
 
(b)

Um tema que herda a funcionalidade e o estilo do tema pai. Os temas filhos são geralmente usados quando você deseja customizar ou modificar um tema existente sem alterar os arquivos originais do tema.

(c)

É o arquivo de modelo que controla a página principal usado para exibir as postagens mais recentes na página inicial ou para exibir uma página estática.

(d)

É um arquivo que controla a exibição de postagens individuais.

4)

Criar um novo modelo de página específica do país. incluir o código PHP necessário para detectar o país do usuário utilizando por exemplo IP Geolocation API.

Adicionar o conteúdo da página específica do país a esta página.

Criar uma nova página para usuários de outros países.

Usar a função PHP header() para redirecionar os usuários para a página apropriada com base no país.

O teste seria efetuado utilizando um serviço de VPN em diferentes localizações.


