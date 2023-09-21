### Projeto em desenvolvimento!!!

<hr>

#### Oque faz o QRShare?

O QRShare consiste em um sistema web que permite ao usuário escolher um arquivo e compartilhá-lo com outra pessoa. Ao clicar em "enviar", um código QR para o arquivo é gerado, juntamente com um link para download.

<details>
  <summary><h4>Visão geral partes do codigo</h4></summary>
  <summary><strong><h4>HTML</h4></strong></summary>
  <p>O código HTML define cinco páginas: uma página principal chamada <strong>"QRShare"</strong>, outra página chamada <strong>"Informações do Arquivo"</strong>, outa página chamada <strong>"About"</strong>, outa página chamada <strong>"Política de Privacidade"</strong> e por ultimo <strong>"Licença MIT"</strong>.</p>
  <summary><strong><h4>CSS</h4></strong></summary>
  <p>O CSS fornece estilos de formatação para a aparência da página, incluindo cores, fontes, tamanhos de botões e elementos, bem como a formatação de elementos de botão e contêineres.</p>
  <summary><strong><h4>JavaScript (script.js)</h4></strong></summary>
  <p><strong>displayFileName():</strong> Esta função é acionada quando um arquivo é selecionado por meio do elemento de entrada de arquivo (fileInput). Ela atualiza a exibição do nome do arquivo selecionado e do tamanho do arquivo.
    
<strong>formatFileSize(size):</strong> Esta função formata o tamanho do arquivo em bytes, kilobytes, megabytes ou gigabytes, dependendo do tamanho.

<strong>generateQRCode():</strong> Esta função é acionada quando o botão "Enviar" é clicado. Ela lê o arquivo selecionado, converte-o em dados base64 e gera um código QR para ele. Em seguida, armazena os dados do arquivo e o tamanho em localStorage e exibe o código QR, o link de download e o botão de cópia.

<strong>copyDownloadLink():</strong> Esta função é acionada quando o botão "Copiar Link" é clicado. Ela gera um link para a página de informações do arquivo com os detalhes do arquivo e copia esse link para a área de transferência. Em seguida, exibe uma mensagem de sucesso temporária.

<strong>downloadFile():</strong> Esta função é acionada quando o botão "Fazer Download" é clicado. Ela cria um blob a partir do arquivo selecionado e gera um URL de objeto para esse blob. Em seguida, define o atributo href do botão de download para apontar para esse URL, permitindo que o usuário faça o download do arquivo.</p>

<summary><strong><h4>JavaScript (na página "Informações do Arquivo")</h4></strong></summary>
<p>O código nesta página lê os parâmetros da URL para obter o nome do arquivo e o tamanho do arquivo. Em seguida, exibe essas informações na página e define o botão de download para baixar o arquivo com o nome correto quando clicado.
  
Em resumo, o código HTML, CSS e JavaScript fornecidos criam uma aplicação que permite ao usuário selecionar um arquivo, gerar um código QR para o arquivo, copiar o link para a página de informações do arquivo e fazer o download do arquivo com o nome correto. Cada parte do código desempenha um papel específico na funcionalidade da aplicação.</p>
  
</details>

<hr>

<details>
  <summary><h4>Politicas e Licença QRShare</h4></summary>
  <p>Clique no link abaixo para baixar o PDF de Política de Privacidade, e Licença MIT do QRShare.</p>
  <p><a href="https://github.com/ErickDaniel7/QRShare/blob/main/Licença%20MIT%20QRShare.pdf">Licença MIT</a></p>
  <p><a href="https://github.com/ErickDaniel7/QRShare/blob/main/Política%20de%20Privacidade%20do%20QRShare.pdf">Política de Privacidade</p>
</details>

<br>

![InterfaceCompleta](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/InterfaceCompleta.png)

![QRShare](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/QRShare.png)

![EscolherArquivo](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/EscolherArquivo.png)

![InformaçõesArquivo](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/InformaçõesArquivo.png)

![Qrcode&Download](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/Qrcode.png)

![Qrcode&Download](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/BoxLink.png)

![InformaçõesArquivoDownload](https://github.com/ErickDaniel7/QRShare/blob/main/Imagens/InformaçõesArquivoDownload.png)

