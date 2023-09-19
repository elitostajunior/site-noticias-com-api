document.addEventListener("DOMContentLoaded", function () {
    const apiKey = 'd6d046b6d96c4f7580870c1144776ba0'; // Substitua pela sua chave de API
    const apiUrl = 'https://newsapi.org/v2/top-headlines';
    const country = 'us'; // Escolha o país desejado
    const category = 'general'; // Escolha a categoria desejada
    const pageSize = '16';
    const newsContainer = document.querySelector('.row');
    const menuLinks = document.querySelectorAll('.nav-link[data-category]');
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = document.querySelector('#newsQuery');

    // Função para buscar notícias da API
    async function fetchNews() {
        try {
            const response = await fetch(`${apiUrl}?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`);
            const data = await response.json();

            // Limpa o conteúdo atual das notícias
            newsContainer.innerHTML = '';

            // Loop pelas notícias e crie os cards
            data.articles.forEach((article) => {
                const card = document.createElement('div');
                card.classList.add('col');
                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${article.urlToImage}" class="card-img-top object-fit-cover" height="250" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">${article.source.name}</h6>
                            <p class="card-text">${article.description}</p>
                        </div>
                        <div class="card-footer">
                            <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>                            
                        </div>
                    </div>
                </div>
                `;
                newsContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
        }
    }

    // Chame a função para buscar notícias quando a página carregar
    fetchNews();

    // Função para atualizar o conteúdo com base na categoria
    function updateContent(category){
        
        // Limpa o conteúdo atual das notícias
        newsContainer.innerHTML = '';

        // Chave da API da News API
        const apiKey = 'd6d046b6d96c4f7580870c1144776ba0';

        // URL da API da News API
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`;

        // Faça uma solicitação à API para buscar notícias da categoria selecionada
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.articles && data.articles.length > 0) {
                    // Loop pelas notícias e crie os cards
                    data.articles.forEach(article => {
                        const card = document.createElement('div');
                        card.classList.add('col');
                        card.innerHTML = `
                            <div class="card h-100">
                                <img src="${article.urlToImage}" class="card-img-top object-fit-cover" height="250" alt="${article.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${article.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">${article.source.name}</h6>
                                    <p class="card-text">${article.description}</p>
                                </div>
                                <div class="card-footer">
                                    <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>                            
                                </div>
                            </div>
                        </div>
                        `;
                        newsContainer.appendChild(card);
                    });                    
                } else {
                    console.error('Nenhuma notícia encontrada.');
                }
            })
            .catch(error => {
                console.error('Erro ao buscar notícias:', error);
            });
    }

    // Adicione um evento de clique para cada link do menu
    menuLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão de seguir o link
            const category = link.getAttribute('data-category');
            updateContent(category); // Chama a função para atualizar o conteúdo
        });
    });

    // Função para buscar notícias com base na consulta de pesquisa
    async function searchNews(query){
        try {
            const apiKey = 'd6d046b6d96c4f7580870c1144776ba0';
            const apiUrl = `https://newsapi.org/v2/top-headlines?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;
            
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Limpa o conteúdo atual das notícias
            newsContainer.innerHTML = '';

            if (data.articles && data.articles.length > 0) {
                // Loop pelas notícias e crie os cards
                data.articles.forEach(article => {
                    const card = document.createElement('div');
                    card.classList.add('col');
                    card.innerHTML = `
                        <div class="card h-100">
                            <img src="${article.urlToImage}" class="card-img-top object-fit-cover" height="250" alt="${article.title}">
                            <div class="card-body">
                                <h5 class="card-title">${article.title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${article.source.name}</h6>
                                <p class="card-text">${article.description}</p>
                            </div>
                            <div class="card-footer">
                                <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>                            
                            </div>
                        </div>
                    </div>
                    `;
                    newsContainer.appendChild(card);
                });
            } else {
                console.error('Nenhuma notícia encontrada.');
            }
        } catch (error) {
            console.error('Erro ao buscar notícias:', error);
        }
    }

    // Adicione um ouvinte de evento ao formulário de busca
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o comportamento padrão de enviar o formulário
        const query = searchInput.value.trim(); // Obtém o valor da caixa de busca

        if (query !== '') {
            // Chame a função de busca com o termo da pesquisa
            searchNews(query);
        }
    });
});