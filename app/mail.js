// Simple anti-spam

export const getmail = (ciphertext, key) => {
    const shift = ciphertext.length;
    var result = "";
    for (var i = 0; i < ciphertext.length; i++) {
        var ltr;
        if (key.indexOf(ciphertext.charAt(i)) == -1) {
            ltr = ciphertext.charAt(i);
            result += (ltr);
        }
        else {
            ltr = (key.indexOf(ciphertext.charAt(i)) - shift + key.length) % key.length;
            result += (key.charAt(ltr));
        }
    }
    return result;
};
