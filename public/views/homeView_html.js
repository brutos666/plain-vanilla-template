function getHtmlView() {
  return String.raw`
    <header class="header">
      <div class="header-content">
        <h3>Vanilla Starter</h3>
      </div>
    </header>
    <div class="row">
      <label for="input">Zone de texte</label>
      <textarea cols="100" rows=10 id="input" name="input" ></textarea>
    </div>`;
}

export default getHtmlView;