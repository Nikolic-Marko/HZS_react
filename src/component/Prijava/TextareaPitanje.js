import { useRef } from 'react'
import './Pitanje.css'


const TextarePitanje = ({ text, error, required }) => {
    const inputRef = useRef();
    const placeholderRef = useRef();
    const underlineRef = useRef();

    function movePlaceholder() {
        inputRef.current.focus();
        placeholderRef.current.classList.add('placeholderUp');
        underlineRef.current.style.width = "100%";
    }

    function noMoreFocus() {
        if (!inputRef.current.value) {
            placeholderRef.current.classList.remove('placeholderUp')
        }
        underlineRef.current.style.width = "0%";
    }

    return (
        <div className="Pitanje">
            <div ref={placeholderRef} style={{ fontSize: "0.90rem", height: "5rem" }} className="fake-placeholder" onClick={movePlaceholder}>{text}</div>
            <textarea rows={10} ref={inputRef} onBlur={noMoreFocus} onFocus={movePlaceholder} />
            <div ref={underlineRef} className="fake-underline"></div>
            {required &&
                <div className="required" style={{ top: "5.6rem" }}><svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="9.3" stroke="#18EEA1" strokeWidth="1.4" /><path fill="#18EEA1" d="M9 14h2v2H9z" /><path stroke="#18EEA1" d="M9.5 3v10M10.5 3v10" /></svg></div>
            }

        </div>
    )
}

TextarePitanje.defaultProps = {
    text: "Pitanje:",
    error: "Ovo polje je obavezno"
}
export default TextarePitanje