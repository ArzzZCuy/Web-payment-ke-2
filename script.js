alert("Wellcome to ArzXD - Payment");

function copyText(text) {
    const textToCopy = text;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Teks berhasil disalin: " + textToCopy);
    }).catch(err => {
        console.error("Gagal menyalin teks: ", err);
    });
}