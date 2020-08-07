// Exemplo de requisição GET
var listElement = document.getElementById('ulid');
//  console.log(listElement);

var ajax = new XMLHttpRequest();



function getUser(){
    var usuario = document.getElementById('inputid').value;
    return usuario;
}

function buscaUsuario(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            preencheRepos(JSON.parse(this.responseText));
        }else if(this.readyState == 4 && this.status!= 200){
            alert(this.status);
            listElement.innerHTML = "";

        }
      };
        if(getUser() != ""){
        loading();

        ajax.open('GET','https://api.github.com/users/'+getUser() +'/repos', true);
        ajax.send();
        }else{
            listElement.innerHTML = "Por favor preencha o campo de busca.";
        }

        }


function preencheRepos(repositorios)  {
    console.log(repositorios);
    listElement.innerHTML = "";
  
    for (repo of repositorios) {
      const reposname = document.createTextNode(repo.name);
      const reposElement = document.createElement('li');
  
      reposElement.appendChild(reposname);
      listElement.appendChild(reposElement);
    }
  }

  function loading(){
   
    listElement.innerHTML = "";
    const loadText = document.createTextNode('Carregando...');
    const load = document.createElement('li');
    load.appendChild(loadText);
    listElement.appendChild(load);
    console.log('carregando');

}



//https://avatars2.githubusercontent.com/u/30843291?v=4"