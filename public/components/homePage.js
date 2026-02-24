import getHtmlView from './homeView-html.js';
/**
 * Fonction de création de la page principale
 * @param {*} props - Liste des fonctions à appeler lors de la survenue d'un événement
 * @property {object}  defaults               - The default values for parties.
 * @property {function}  defaults.onPaste    - Fonction à appeler lors d'un coller
 * @returns
 */
function createHomeView(props) {
  const root = document.createElement('div');
  root.innerHTML = getHtmlView();

  /** @HTMLTextAreaElement */
  const inputTextArea = root.querySelector('#input');

  inputTextArea.addEventListener('paste', props.onPaste);
  inputTextArea.addEventListener('input', props.onInput);

  const updateInputWithPast = (pasteText) => {
    inputTextArea.value = 'Paste this:\n' + inputTextArea.value ;
    return modifiedText;
  };

  return { root, updateInputWithPast };
}

export default createHomeView;