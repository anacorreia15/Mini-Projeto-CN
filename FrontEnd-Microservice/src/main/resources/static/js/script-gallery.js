    $(document).ready(function(){
    // Simulando a lista de URLs de imagens (substitua isso pelo seu método real de obtenção de imagens)
    var imageUrls = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Adicione mais URLs de imagens conforme necessário
    ];

    // Função para criar cards dinamicamente com as imagens carregadas
    function createCards(imageUrls) {
    var cardContainer = $(".row"); // Seletor do elemento onde os cards serão adicionados

    // Loop através das URLs das imagens e criar um card para cada uma delas
    imageUrls.forEach(function(url) {
    var cardHtml = `
                    <div class="col-md-6 col-lg-4">
                        <div class="card my-3">
                            <img src="${url}" class="card-image-top" alt="thumbnail">
                            <div class="card-body">
                                <h4 class="card-title"><a href="#" class="text-secondary">Classification result</a></h4>
                                <p class="card-text">Exemplo</p>
                                <a href="#" class="btn btn-primary">See More</a>
                            </div>
                        </div>
                    </div>
                `;

    // Adicionar o card ao container
    cardContainer.append(cardHtml);
});
}

    // Chamada inicial para criar os cards com as imagens já carregadas
    createCards(imageUrls);

    // Aqui você pode adicionar lógica para carregar mais imagens e atualizar os cards dinamicamente
});