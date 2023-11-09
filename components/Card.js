const Card = (/*{ petData}*/) => {
    var petData = 1;
    return (
            <div className="card_pet_container">
                <img className="card_pet type" src="/dog.svg" alt="type-img"></img>
                <img className="card_pet img" src="/dog.jpg" alt="type-img"></img>
                <h3 className="card_pet type-text"></h3>
                <span className="card_pet genero">a</span>

                <div className="card_pet text">
                    <p>Nome: {petData}</p>
                    <p>Raça: {petData}</p>
                    <p>Idade: {petData}</p>
                    <p>Localização: {petData}</p>
                </div>

                <button className="card_pet btn">
                    Conheça
                </button>
                <svg width="225" height="290" viewBox="0 0 225 290" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_528_20)">
                        <rect x="25" y="46" width="200" height="244" rx="10" fill="white"/>
                        <circle cx="50" cy="50" r="50" fill="#BAC2D7"/>
                        <circle cx="50" cy="50" r="45.8333" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_528_20">
                            <rect width="225" height="290" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </div>
    )
}

export default Card;