const MAIL = 'me(at_mark)bracken.black'.replace('(at_mark)', '@');
const LINK_GITHUB = 'https://github.com/blackbracken/';
const LINK_TWITTER = 'https://twitter.com/black_bracken/';
const LINK_BLOG = 'https://blackbracken.hatenablog.com/';

let mail_modal = new tingle.modal({
    footer: true
});
mail_modal.setContent('<h2>' + MAIL + '</h2>');
mail_modal.addFooterBtn('Send me a mail', 'tingle-btn tingle-btn--primary tingle-btn--pull-right', () => {
    location.href = 'mailto:' + MAIL;
});

document.getElementById('github-button').onclick = () => {
    window.open(LINK_GITHUB);
};

document.getElementById('twitter-button').onclick = () => {
    window.open(LINK_TWITTER);
};

document.getElementById('blog-button').onclick = () => {
    window.open(LINK_BLOG);
};

document.getElementById('mail-button').onclick = () => {
    mail_modal.open()
};