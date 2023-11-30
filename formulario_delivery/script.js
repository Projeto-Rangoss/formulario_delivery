document.addEventListener('DOMContentLoaded', function() {
    var cidades = ["Rio de Janeiro", "Niterói", "Nova Iguaçu", "Campos dos Goytacazes", "Petrópolis", "Volta Redonda", "Duque de Caxias", "Macaé"];
    var selectCidade = document.getElementById("cidade");

    cidades.forEach(function(cidade) {
        var opt = document.createElement('option');
        opt.value = cidade;
        opt.innerHTML = cidade;
        selectCidade.appendChild(opt);
    });
});


