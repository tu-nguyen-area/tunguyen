function md5Processing() {
    var hash = document.getElementById("tinput").value;
    var md5hash = CryptoJS.MD5(hash);
    document.getElementById("toutput").value = md5hash;
}

function sha256Processing() {
    var hash = document.getElementById("tinput").value;
    var sha256hash = CryptoJS.SHA256(hash);
    document.getElementById("toutput").value = sha256hash;
}

function sha3256Processing() {
    var hash = document.getElementById("tinput").value;
    var sha3hash = CryptoJS.SHA3(hash, { outputLength: 256 });
    document.getElementById("toutput").value = sha3hash;
}

function sha3Processing() {
    var hash = document.getElementById("tinput").value;
    var sha3hash = CryptoJS.SHA3(hash, { outputLength: 512 });
    //var sha3hash = CryptoJS.SHA3(hash);
    document.getElementById("toutput").value = sha3hash;
}

