(function () {
  const root = document.getElementById("aotd-root");
  if (!root) return;

  function escapeHtml(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function metaRow(label, value) {
    if (!value) return "";
    return `<div><p class="meta-label">${escapeHtml(label)}</p><p>${escapeHtml(value)}</p></div>`;
  }

  async function load() {
    try {
      const response = await fetch("../data/art-of-the-day.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      root.innerHTML = `
        <div class="aotd-layout">
          <figure class="aotd-frame">
            <img
              src="${escapeHtml(data.image.url)}"
              alt="${escapeHtml(data.image.alt || data.title)}"
              width="${escapeHtml(data.image.width || "")}"
              height="${escapeHtml(data.image.height || "")}"
            />
          </figure>
          <div>
            <p class="kicker">${escapeHtml(data.series_label || "Daily Work")}</p>
            <h2>${escapeHtml(data.title)}</h2>
            <p class="lede">${escapeHtml(data.subtitle || "")}</p>
            <div class="aotd-meta">
              ${metaRow("Artist / Maker", data.artist)}
              ${metaRow("Date", data.date)}
              ${metaRow("Culture / Place", data.culture)}
              ${metaRow("Medium", data.medium)}
              ${metaRow("Collection", data.collection)}
              ${metaRow("Rights", data.rights)}
            </div>
          </div>
        </div>
        <div class="aotd-copy">
          <div class="aotd-callout">
            <p class="meta-label">Look Closely</p>
            <p>${escapeHtml(data.look_prompt)}</p>
          </div>
          <div class="aotd-callout">
            <p class="meta-label">Make From It</p>
            <p>${escapeHtml(data.make_prompt)}</p>
          </div>
          <div>
            <p class="meta-label">Source Link</p>
            <p><a class="text-link" href="${escapeHtml(data.source_url)}">${escapeHtml(data.source_label || data.source_url)}</a></p>
          </div>
        </div>
      `;
    } catch (error) {
      root.innerHTML = `<p class="muted">Could not load Art of the Day data.</p>`;
      console.error(error);
    }
  }

  load();
})();
