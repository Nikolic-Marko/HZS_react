import './Prijava.css'
import Pitanje from './Pitanje.js'
import CVButoon from './CVButton'
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

    const formRef = useRef();
    const [uspesnaPrijava, setUspesnaPrijava] = useState(false);
    const [errors, setErrors] = useState({
        0: '',//ime
        1: '',//broj
        2: '',//skola
        3: '',//razred
        4: '',//tim
        5: '',//ucestvovanje
        6: '',//razvoj
        7: '',//jedinstvenTim
        8: '',//osobaIT
        9: '',//komentar
        10: '',//cv
    });

    function getFileExtension(filename) {
        return filename.split('.').pop();
    }

    function posaljiPrijavu(e) {
        e.preventDefault();
        const pitanja = document.querySelectorAll('.Pitanje');
        const dozvoljeniTipovizaCV = ['pdf', 'doc', 'docx'];
        const odgovori = [];
        let nepopunjenaPolja = 0;
        let prvoNepopunjeno = null;

        let currentErrors = {
            0: '',
            1: '',
            2: '',
            3: '',
            4: '',
            5: '',
            6: '',
            7: '',
            8: '',
            9: '',
            10: '',
        }

        pitanja.forEach((pitanje, index) => {
            let input = pitanje.querySelector('input');
            if (!input) input = pitanje.querySelector('textarea');

            let vrednost = input.value;

            if (!vrednost.trim()) {
                if (pitanje.querySelector('.required')) {
                    if (prvoNepopunjeno == null) prvoNepopunjeno = pitanje;
                    currentErrors[index] = 'Ovo polje je obavezno';
                    nepopunjenaPolja++;
                }
                odgovori.push('');
            } else {
                odgovori.push(vrednost);
            }
        });

        const cvbtn = document.querySelector('.CVButton');
        const fileInput = cvbtn.querySelector('input');
        let files = fileInput.files;
        if (files.length <= 0) {
            document.querySelector('.ovoPoljeJeObaveznoFile').style.display = "block";
            if (prvoNepopunjeno == null) prvoNepopunjeno = cvbtn;
            currentErrors[10] = 'Neophodno je da posaljete Vaš CV';
            nepopunjenaPolja++;
        } else if (!dozvoljeniTipovizaCV.includes(getFileExtension(fileInput.value))) {
            currentErrors[10] = 'Dozvoljeni tipovi fajlova su pdf,doc i docx';
            nepopunjenaPolja++;
        }

        setErrors(previous => currentErrors);
        if (nepopunjenaPolja > 0) {
            window.smoothScroll(prvoNepopunjeno)
            return;
        } else {
            const form = new FormData();
            form.append('ime', odgovori[0]);
            form.append('broj', odgovori[1]);
            form.append('skola', odgovori[2]);
            form.append('razred', odgovori[3]);
            form.append('tim', odgovori[4]);
            form.append('ucestvovanje', odgovori[5]);
            form.append('razvoj', odgovori[6]);
            form.append('jedinstvenTim', odgovori[7]);
            form.append('osobaIT', odgovori[8]);
            form.append('komentar', odgovori[9]);
            form.append('upfile', files[0]);

            let url = 'https://hzstim.fonis.rs/hello/index.php';
            const request = new Request(url, {
                method: 'POST',
                body: form
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
                    setErrors(previous => response.errors)
                    scrollNaPitanjeSaGreskom(response.errors);
                }
            }).catch((err) => {
                console.log(err)
            });
        }

    }

    function scrollNaPitanjeSaGreskom(errrors) {
        const pitanja = document.querySelectorAll('.Pitanje');
        errrors.forEach((error, index) => {
            if (error != '') {
                if (index == 10) {
                    window.smoothScroll(document.querySelector('.CVButton'));
                } else {
                    window.smoothScroll(pitanja[index]);
                }
                return;
            }
        });
    }

    return (
        <main>
            <header className='naslov-prijave'>
                <h1>Dobrodošli na stranicu za prijavu</h1>
                <h1>Molimo vas da popunite polja ispod kako biste se prijavili za hakaton</h1>
            </header>
            <div className="brojac-container">
                <h1>Vreme do zatvaranja prijava:</h1>
                <h1 className="brojac">

                </h1>

            </div>
            {!uspesnaPrijava ?
                <div className="pitanja-container">
                    <Pitanje error={errors[0]} text="Ime i prezime" required={true} />
                    <Pitanje error={errors[1]} text="Broj telefona" required={true} />
                    <Pitanje error={errors[2]} text="Srednja škola" required={true} />
                    <Pitanje error={errors[3]} text="Razred" required={true} />
                    <CVButoon error={errors[10]} />
                    <div style={presekStyle}></div>
                    <Pitanje error={errors[4]} text="Naziv tima" required={true} />
                    <TextarePitanje error={errors[5]} required={false} text="Ako si ranije učestvovao/la na takmičenju sličnog karaktera, molimo te da to iskustvo podeliš sa nama" />
                    <TextarePitanje error={errors[6]} required={true} text="Na koji način će Hakaton za srednoškolce uticati na lični i profesionalni razvoj tebe i tvog tima?" />
                    <TextarePitanje error={errors[7]} required={true} text="Po čemu je tvoj tim jedinstven i zbog čega bi baš vi trebalo da budete deo ovogodišnjeg hakatona?" />
                    <TextarePitanje error={errors[8]} required={true} text="Koja osoba iz IT sveta te motiviše i zašto?" />
                    <TextarePitanje error={errors[9]} required={false} text="Dodatan komentar" />

                    <button type="submit" className="posaljiBtn" onClick={(e) => posaljiPrijavu(e)}>
                        <h2>Pošalji prijavu</h2>
                        <svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2h-4.18C11.4.84 10.3 0 9 0 7.7 0 6.6.84 6.18 2H2C.9 2 0 2.9 0 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 16l-4-4 1.41-1.41L7 13.17l6.59-6.59L15 8l-8 8z" fill="black" /></svg>
                    </button>

                    <div style={{ fontSize: "0.8rem", textAlign: "center" }}>*Ukoliko imaš dodatnih pitanja u vezi sa prijavom pošalji nam mejl na</div>
                    <div style={{ fontSize: "1rem", marginBottom: "20px", textAlign: "center" }}><b>fonis@fonis.rs</b></div>

                </div>
                :
                <div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>Vaša prijava je uspešno evidentirana!</div>
                    <div class="stiklir"></div>
                </div>}
            <div id="ucitavanjeDiv"><div id="rotirajuciKruzic"></div></div>
        </main>
    )
}

const presekStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: "rgb(0, 255, 163)",
    margin: "100px 0 0 0"
}

const vratiInicijalnoOdbrojavanje = () => {
    var countDownDate = new Date("Feb 28, 2021 00:00:00").getTime();

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
        var countDownDate = new Date("Feb 28, 2021 00:00:00").getTime();

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

window.smoothScroll = function (target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    let scroll = function (c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function () { scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

export default Prijava