let tipo_conta = null;

/* ELEMENTOS */

const pessoa_juridica = document.getElementById("pessoa_juridica");
const pessoa_fisica = document.getElementById("pessoa_fisica");

const continuar_etapa1 = document.getElementById("continuar_etapa1");

const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");
const etapa3 = document.getElementById("etapa3");

const voltar_etapa1 = document.getElementById("voltar_etapa1");

const form_cadastro = document.getElementById("form_cadastro");

const campos_cadastro = document.getElementById("campos_cadastro");

const titulo_dados = document.getElementById("titulo_dados");
const tipo_cadastro = document.getElementById("tipo_cadastro");

const mensagem_confirmacao = document.getElementById("mensagem_confirmacao");

const ir_para_area = document.getElementById("ir_para_area");

/* SELECIONAR TIPO DE CONTA */

pessoa_juridica.addEventListener("click", function(){

    tipo_conta = "pj";

    pessoa_juridica.classList.add("selecionado");
    pessoa_fisica.classList.remove("selecionado");

    continuar_etapa1.disabled = false;

});


pessoa_fisica.addEventListener("click", function(){

    tipo_conta = "pf";

    pessoa_fisica.classList.add("selecionado");
    pessoa_juridica.classList.remove("selecionado");

    continuar_etapa1.disabled = false;

});


/* AVANÇAR PARA ETAPA 2 */

continuar_etapa1.addEventListener("click", function(){

    if(tipo_conta == null){
        return;
    }

    etapa1.classList.add("escondido");
    etapa2.classList.remove("escondido");

    mudar_etapa(2);
    criar_campos();

});


/* VOLTAR PARA ETAPA 1 */

voltar_etapa1.addEventListener("click", function(){
    etapa2.classList.add("escondido");
    etapa1.classList.remove("escondido");

    mudar_etapa(1);
});


/* CRIAR CAMPOS */

function criar_campos(){

    campos_cadastro.innerHTML = "";

    if(tipo_conta == "pj"){

        tipo_cadastro.innerHTML = "PASSO 2 DE 3 — PESSOA JURÍDICA";
        titulo_dados.innerHTML = "Dados da empresa";

        criar_campo(
            "Razão Social",
            "razao_social",
            "Ex.: Analytica Tecnologia Ltda."
        );

        criar_campo(
            "CNPJ",
            "cnpj",
            "00.000.000/0001-00"
        );

        criar_campo(
            "Nome do Responsável de RH",
            "responsavel",
            "Ex.: João da Silva"
        );

        criar_campo(
            "E-mail corporativo",
            "email",
            "rh@empresa.com.br",
            "email"
        );

        criar_campo(
            "Telefone",
            "telefone",
            "(11) 99999-9999"
        );

        criar_campo(
            "Setor / Segmento",
            "setor",
            "Ex.: Tecnologia"
        );

    }

    if(tipo_conta == "pf"){

        tipo_cadastro.innerHTML = "PASSO 2 DE 3 — PESSOA FÍSICA";
        titulo_dados.innerHTML = "Seus dados pessoais";

        criar_campo(
            "Nome completo",
            "nome",
            "Ex.: Maria Oliveira Santos"
        );

        criar_campo(
            "CPF",
            "cpf",
            "000.000.000-00"
        );

        criar_campo(
            "E-mail",
            "email",
            "seunome@email.com",
            "email"
        );

        criar_campo(
            "Telefone",
            "telefone",
            "(11) 99999-9999"
        );

        criar_campo(
            "Cidade / Estado",
            "localizacao",
            "Ex.: São Paulo, SP"
        );

        criar_campo(
            "Área de atuação",
            "area",
            "Ex.: Desenvolvimento"
        );

    }

    criar_campo(
        "Senha",
        "senha",
        "Mínimo 8 caracteres",
        "password"
    );

}

/* CRIAR UM CAMPO */

function criar_campo(label, id, placeholder, tipo = "text"){

    const campo = document.createElement("div");
    campo.classList.add("campo");

    const campo_label = document.createElement("label");
    campo_label.htmlFor = id;
    campo_label.innerHTML = label;

    const input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.name = id;
    input.placeholder = placeholder;
    input.required = true;

    campo.appendChild(campo_label);
    campo.appendChild(input);
    campos_cadastro.appendChild(campo);

}


/* ENVIAR CADASTRO */

form_cadastro.addEventListener("submit", function(event){

    event.preventDefault();
    
    etapa2.classList.add("escondido");
    
    etapa3.classList.remove("escondido");

    mudar_etapa(3);


    if(tipo_conta == "pj"){

        mensagem_confirmacao.innerHTML = `
            Sua empresa já pode publicar vagas e utilizar a triagem por IA.
            Acesse o dashboard para começar.
        `;

        ir_para_area.innerHTML = "Ir para o Dashboard";

        ir_para_area.href = "#";

    }


    if(tipo_conta == "pf"){

        mensagem_confirmacao.innerHTML = `
            Seu perfil foi criado. Complete seu currículo para ser encontrado
            por empresas e se candidatar às vagas.
        `;

        ir_para_area.innerHTML = "Completar meu perfil";

        ir_para_area.href = "#";

    }


    /*
    QUANDO UTILIZARMOS PHP:

    Enviar os dados para o servidor.

    Algo parecido com:

    form_cadastro.action = "cadastro.php";
    form_cadastro.method = "POST";

    O PHP irá:

    1. Validar os dados
    2. Verificar se CPF/CNPJ já existe
    3. Criptografar a senha
    4. Criar o usuário
    5. Inserir no banco de dados
    */

});


/* MUDAR INDICADOR DAS ETAPAS */

function mudar_etapa(etapa_atual){
    const etapas = document.querySelectorAll(".etapa");

    etapas.forEach(function(etapa, indice){
        
        if(indice < etapa_atual){
            etapa.classList.add("ativa");
        }else{
            etapa.classList.remove("ativa");
        }

    });
}