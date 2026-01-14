function copyProcess() {
    let copyText = document.getElementById("tinput");
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}

function copProcess() {
    let copText = document.getElementById("toutput");
    copText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copText.value);
    alert("Copied the text: " + copText.value);
}

function md5Processing() {
    let hash = document.getElementById("tinput").value;
    let md5hash = CryptoJS.MD5(hash);
    document.getElementById("toutput").value = md5hash;
}

function sha256Processing() {
    let hash = document.getElementById("tinput").value;
    let sha256hash = CryptoJS.SHA256(hash);
    document.getElementById("toutput").value = sha256hash;
}

function sha3256Processing() {
    let hash = document.getElementById("tinput").value;
    let sha3hash = CryptoJS.SHA3(hash, { outputLength: 256 });
    document.getElementById("toutput").value = sha3hash;
}

function sha3Processing() {
    let hash = document.getElementById("tinput").value;
    let sha3hash = CryptoJS.SHA3(hash, { outputLength: 512 });
    //let sha3hash = CryptoJS.SHA3(hash);
    document.getElementById("toutput").value = sha3hash;
}
