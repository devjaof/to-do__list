document.querySelector('#push').onclick = function() {

    if(document.querySelector('#novoitem input').value.length == 0){
        alert("Favor digitar uma tarefa")
   
    }
    else {
        document.querySelector('#tarefas').innerHTML    
        += `
            <div class="tarefa">
                <span id="tarefaNome">
                    ${document.querySelector('#novoitem input').value}
                </span>
                <button class="deletar">
                <i class="fas fa-minus-circle"></i>
                </button>
            </div>
        `;
    }

    var tarefa_atual = document.querySelectorAll(".deletar");
    for(var i=0; i<tarefa_atual.length; i++){
        tarefa_atual[i].onclick = function() {
            this.parentNode.remove();
        }
    }

    var tarefa = document.querySelectorAll(".tarefa");
    for (var i=0; i<tarefa.length; i++){
        tarefa[i].onclick = function(){
            this.classList.toggle('completa');
        }
    }
    
    document.querySelector("#novoitem input").value = "";
}