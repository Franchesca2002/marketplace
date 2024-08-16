function createCardMarketGuitars (marketGuitars){
    const  containerMarket = document.createElement('div')
    containerMarket.classList.add('market-guitars')
    containerMarket.id = market-Guitars.id

    const imgMarket = document.createElement('img')
    imgMarket.src = marketGuitars.image
    imgMarket.alt = marketGuitars.product

    const nameMarket = document.createElement('h2')
    nameMarket.textContent = marketGuitars.product

    const priceMarket = document.createElement('p')
    priceMarket.textContent = marketGuitars.priceMarket

    const btnMarket = document.createElement('button')
    btnMarket.textContent = 'Agregar al carrito'

    containerMarket.appendChild(imgMarket)
    containerMarket.appendChild(nameMarket)
    containerMarket.appendChild(priceMarket)
    containerMarket.appendChild(btnMarket)

    containerProducts.appendChild(containerMarket)
}

function renderMarketGuitars () {
    marketGuitars.forEach(marketGuitars => createCardMarketGuitars(marketGuitars) )
}