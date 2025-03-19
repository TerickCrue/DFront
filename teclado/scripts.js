document.addEventListener("DOMContentLoaded", () => {
    //Definir las keys
    const keys = [
        { key: 'a', audio: 'assets/boom.wav', text: 'A' },
        { key: 's', audio: 'assets/clap.wav', text: 'S' },
        { key: 'd', audio: 'assets/hihat.wav', text: 'D' },
        { key: 'f', audio: 'assets/kick.wav', text: 'F' },
        { key: 'g', audio: 'assets/openhat.wav', text: 'G' },
        { key: 'h', audio: 'assets/ride.wav', text: 'H' },
        { key: 'j', audio: 'assets/snare.wav', text: 'J' },
        { key: 'k', audio: 'assets/tink.wav', text: 'K' },
        { key: 'l', audio: 'assets/tom.wav', text: 'L' },
    ];
    
    //Agregar las keys al contenedor
    addKeysToContainer(keys);

    const divs = document.querySelectorAll(".key");

    //Evento click
    divs.forEach(div => {
        div.addEventListener("click", () => {
            removeActiveClassAll(divs);
            toggleActiveClass(div);
            playKeyAudio(div);
        });
    });

    //Evento keydown
    document.addEventListener("keydown", (event) => {
        const keyPressed = event.key.toLowerCase(); 
        const div = [...divs].find(d => d.getAttribute("data-key") === keyPressed);

        if (div) {
            removeActiveClassAll(divs);
            toggleActiveClass(div);
            playKeyAudio(div);
        }
    });

    function addKeysToContainer(keys){
        const contenedorKeys = document.getElementById("keys-container");

        keys.forEach(key => {
            const div = document.createElement("div");
            div.classList.add("key");
            div.setAttribute("data-key", key.key);
            div.setAttribute("data-audio", key.audio);
            const p = document.createElement("p");
            p.textContent = key.text;
    
            div.appendChild(p);
    
            contenedorKeys.appendChild(div);
        });
    }

    function removeActiveClassAll(divs){
        divs.forEach(d => d.classList.remove("active"));
    }

    function toggleActiveClass(div){
        div.classList.toggle("active");
    }

    function playKeyAudio(div){
        const audioSrc = div.getAttribute("data-audio");
        const audio = new Audio(audioSrc);
        audio.play();
    }
});

