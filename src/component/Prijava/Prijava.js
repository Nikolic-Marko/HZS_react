import './Prijava.css'
import Pitanje from './Pitanje.js'
import TextarePitanje from './TextareaPitanje.js'
import { useState, useRef, useEffect } from 'react'

const Prijava = () => {

    useEffect(() => {
        vratiInicijalnoOdbrojavanje();
        let interval = odbrojavanje();
        return () => {
            clearInterval(interval);
        }
    });
    const nizClanova = [1, 2, 3];
    const saznaliRef = useRef();
    const brojClanovaRef = useRef();
    const pravilnikRef = useRef();

    const [strana, setStrana] = useState(1);
    const [brojClanova, setBrojClanova] = useState(4);

    const [uspesnaPrijava, setUspesnaPrijava] = useState(false);

    function posaljiPrijavu(e) {
        e.preventDefault();

        let nepopunjenaPolja = 0;
        let odgovori = {
            tim: [

            ],
            clanovi: [

            ]
        }

        let strana1 = document.querySelector(".strana1");
        let pitanjaNaPrvojStrana = strana1.querySelectorAll(".Pitanje");

        pitanjaNaPrvojStrana.forEach(pitanje => {
            let input = pitanje.querySelector('input');
            if (input == null) input = pitanje.querySelector('textArea');

            let vrednost = input.value;
            if (!vrednost) {
                let required = pitanje.querySelector('.required');
                if (required != null) nepopunjenaPolja++;
            }
            odgovori.tim.push(vrednost);
        })


        //broj clanova
        let brojClanovaSelect = strana1.querySelector("#brojClanova-select")
        let brojClanovaVrednost = brojClanovaSelect.options[brojClanovaSelect.selectedIndex].text
        //saznali
        let saznaliSelect = strana1.querySelector("#saznali-select")
        let saznaliVrednost = saznaliSelect.options[saznaliSelect.selectedIndex].text

        odgovori.tim.push({ brojClanova: brojClanovaVrednost });
        odgovori.tim.push({ saznali: saznaliVrednost });

        if (!pravilnikRef.current.checked) {
            window.alert("Molimo vas da označite da ste saglasni sa pravilnikom hakatona");
            setStrana(1);
            return;
        }

        //Kod za clanove
        let strana2 = document.querySelector('.strana2');
        let pitanjaZaClanove = strana2.querySelectorAll('.pitanjaZaClana');
        pitanjaZaClanove.forEach(pitanjaContainer => {
            let odgovoriClana = [];
            let pitanja = pitanjaContainer.querySelectorAll(".Pitanje");
            pitanja.forEach(pitanje => {
                let input = pitanje.querySelector('input');
                if (input == null) input = pitanje.querySelector('textArea');
                let vrednost = input.value;
                if (!vrednost) nepopunjenaPolja++;

                odgovoriClana.push(vrednost);
            })
            odgovoriClana.push({ razred: pitanjaContainer.querySelector("#razred-select").value });
            odgovori.clanovi.push(odgovoriClana);
        })

        if (nepopunjenaPolja > 0) {
            window.alert('Morate popuniti sva polja koja su obavezna!');
            return;
        } else {
            let url = 'https://hzs.fonis.rs/2021/obradaPrijave.php';
            // let url = 'http://localhost/hzsPrijaveServer/index.php';
            const request = new Request(url, {
                method: 'POST',
                body: JSON.stringify(odgovori)
            });

            const ucitavanjeDiv = document.getElementById('ucitavanjeDiv');
            ucitavanjeDiv.style.display = 'flex';
            fetch(request).then((response) => {
                return response.json();
            }).then((response) => {
                //Ovo ce biti json objekat koji u sebi ima
                //1. status - uspesno/neuspesno
                //2. objekat errors
                if (response.status == 'uspesno') {
                    setUspesnaPrijava(uspesnaPrijava => true);
                    ucitavanjeDiv.style.display = 'none';
                } else {
                    ucitavanjeDiv.style.display = 'none';
                    //ALERTUJ GRESKU
                    window.alert("Greska prilikom slanja prijave");
                }
            }).catch((err) => {
                console.log(err)
            });
        }

    }

    function prebaciStranu(strana) {
        setStrana(strana);
        window.scrollTo(0, 0);
    }

    function promenaBrojaClanova() {
        setBrojClanova(parseInt(brojClanovaRef.current.options[brojClanovaRef.current.selectedIndex].text));
    }

    return (
        <main>
            <header className='naslov-prijave'>
                <h1>Dobrodošli na stranicu za prijavu</h1>
                <h1>Molimo vas da popunite polja ispod kako biste se prijavili za hakaton</h1>
                <h1 style={{ fontSize: "0.9rem" }}>Polja označena uzvičnikom (!) su obavezna</h1>
                <h1 style={{ fontSize: "0.9rem" }}><b>Napomena:</b>prijava se <b>OBAVEZNO</b> popunjava timski!</h1>
            </header>
            <div className="brojac-container">
                <h1>Vreme do zatvaranja prijava:</h1>
                <h1 className="brojac">

                </h1>

            </div>


            {!uspesnaPrijava ?
                <div className="pitanja-container">

                    {/* Timska pitanja */}
                    <div className="strana1" style={{ display: strana == 1 ? "block" : "none" }}>
                        <Pitanje text="Naziv tima" required={true} />
                        <div className="saznali-container">
                            <div>Broj članova tima</div>
                            <div className="required"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="#18EEA1" strokeWidth="1.4" /><path fill="#18EEA1" d="M9 14h2v2H9z" /><path stroke="#18EEA1" d="M9.5 3v10M10.5 3v10" /></svg></div>
                            <select name="saznali" id="brojClanova-select" ref={brojClanovaRef} onChange={promenaBrojaClanova}>
                                <option>4</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div className="saznali-container">
                            <div>Kako ste saznali za hakaton za srednjoškolce?</div>
                            <div className="required"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="#18EEA1" strokeWidth="1.4" /><path fill="#18EEA1" d="M9 14h2v2H9z" /><path stroke="#18EEA1" d="M9.5 3v10M10.5 3v10" /></svg></div>
                            <select name="saznali" id="saznali-select" ref={saznaliRef}>
                                <option>Preko društvenih mreža</option>
                                <option>Preko prijatelja</option>
                                <option>Preko profesora</option>
                                <option>Preko online panela</option>
                                <option selected>Ostalo</option>
                            </select>
                        </div>
                        <TextarePitanje required={false} text="Da li ste nekada učestvovali na sličnim takmičenjima? Ukoliko jeste opišite vaša iskustva." />
                        <TextarePitanje required={true} text="Šta vas motiviše da se prijavite na ovogodišnji HZS? [od 70 do 150 reči]" />
                        <TextarePitanje required={true} text="Koja su vaša očekivanja od takmičenja? [od 40 do 80 reči]" />
                        <TextarePitanje required={true} text="Šta bi za vaš tim predstavaljao najveći izazov tokom takmičenja?" />
                        <div className="pravilnik-container">
                            <div><input type="checkbox" ref={pravilnikRef} /></div>
                            <div>
                                Saglasni smo da smo pročitali i da smo upoznati sa <a target="_blank" href="https://hzs.fonis.rs/2021/HZS.pdf" id ="pravilnikA">pravilnikom</a> takmičenja
                            </div>
                            <div className="required"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="#18EEA1" strokeWidth="1.4" /><path fill="#18EEA1" d="M9 14h2v2H9z" /><path stroke="#18EEA1" d="M9.5 3v10M10.5 3v10" /></svg></div>
                        </div>
                        <div className="sledecaStranaBtn" onClick={() => { prebaciStranu(2) }}>
                            Sledeća strana
                        </div>
                    </div>




                    {/* Pitanja za clanove */}
                    <div className="strana2" style={{ display: strana == 2 ? "block" : "none" }}>
                        {new Array(brojClanova).fill(0).map((value, index) => (
                            <div className="pitanjaZaClana">
                                <div className="clanBroj">ČLAN {index + 1}</div>
                                <Pitanje text="Ime i prezime" required={true} />
                                <Pitanje text="Grad" required={true} />
                                <Pitanje text="Srednja škola" required={true} />
                                <div className="saznali-container">
                                    <div>Razred</div>
                                    <div className="required"><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="#18EEA1" strokeWidth="1.4" /><path fill="#18EEA1" d="M9 14h2v2H9z" /><path stroke="#18EEA1" d="M9.5 3v10M10.5 3v10" /></svg></div>
                                    <select name="saznali" id="razred-select">
                                        <option valeu={1}>1</option>
                                        <option valeu={2}>2</option>
                                        <option valeu={3}>3</option>
                                        <option valeu={4}>4</option>
                                    </select>
                                </div>
                                <Pitanje text="Broj telefona" required={true} />
                                <Pitanje text="E-mail" required={true} />
                                <div style={presekStyle}></div>
                            </div>
                        ))}
                        <div className="sledecaStranaBtn prethodna" onClick={() => { prebaciStranu(1) }}>
                            Prethodna strana
                        </div>
                        <button type="submit" className="posaljiBtn" onClick={(e) => posaljiPrijavu(e)}>
                            <h2>Pošalji prijavu</h2>
                            <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2h-4.18C11.4.84 10.3 0 9 0 7.7 0 6.6.84 6.18 2H2C.9 2 0 2.9 0 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 16l-4-4 1.41-1.41L7 13.17l6.59-6.59L15 8l-8 8z" fill="black" /></svg>
                        </button>
                    </div>

                    <div style={{ fontSize: "0.8rem", textAlign: "center" }}>*Ukoliko imaš dodatnih pitanja u vezi sa prijavom pošalji nam mejl na</div>
                    <div style={{ fontSize: "1rem", marginBottom: "20px", textAlign: "center" }}><b><a href="mailto: office@fonis.rs" style={{textDecoration : "none", color: "#00ffa3"}} >office@fonis.rs</a></b></div>

                </div>
                :
                <div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>Vaša prijava je uspešno evidentirana!</div>
                    <div class="stiklir"></div>
                </div>}
            <div id="ucitavanjeDiv">
                <div id="rotirajuciKruzic"></div>
            </div>
        </main>
    )
}

const presekStyle = {
    width: "100%",
    height: "1.2px",
    backgroundColor: "var(--zelena-boja)",
    margin: "50px 0 0 0"
}

const vratiInicijalnoOdbrojavanje = () => {
    var countDownDate = new Date("Mar 11, 2021 00:00:00").getTime();

    var now = new Date().getTime();

    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.brojac').innerHTML = days + "<span class='normalFont'>d </span>" + hours + "<span class='normalFont'>h </span>" +
        + minutes + "<span class='normalFont'>m </span>" + seconds + "<span class='normalFont'>s </span>";

    if (distance < 0) {
        document.querySelector('.brojac').innerHTML = 'Vreme za prijave je isteklo :('
    }
    // return days + "<span class='normalFont'>d </span>" + hours + " <span class='normalFont'>h </span>" 
    //     + minutes + "<span class='normalFont'>m </span>" + seconds + "<span class='normalFont'>s </span>";   
}
const odbrojavanje = () => {
    let interval = setInterval(function () {
        var countDownDate = new Date("Mar 11, 2021 00:00:00").getTime();

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.querySelector('.brojac').innerHTML = days + "<span class='normalFont'>d </span>" + hours + "<span class='normalFont'>h </span>" +
            + minutes + "<span class='normalFont'>m </span>" + seconds + "<span class='normalFont'>s </span>";

        if (distance < 0) {
            document.querySelector('.brojac').innerHTML = 'Vreme za prijave je isteklo :('
        }
    }, 1000);
    return interval;
}


export default Prijava