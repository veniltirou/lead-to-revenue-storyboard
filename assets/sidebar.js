/* Sidebar preview for the Oracle CX Storyboard Series.
 * Each section shows its first three pages, followed by a "Show N more"
 * link that reveals the rest (and "Show less" to fold them again).
 * The section holding the current page is shown in full, and a section
 * only folds when at least two titles would be hidden.
 * Without JavaScript the sidebar simply stays fully expanded. */
(function () {
  var PREVIEW = 3;
  var css =
    '.sidebar li.sb-hidden{display:none}' +
    '.sidebar li.sb-more a{font-size:.82em;color:#ff8c4b;padding-top:2px;padding-bottom:6px;cursor:pointer}' +
    '.sidebar li.sb-more a:hover,.sidebar li.sb-more a:focus{color:#fff;outline:none}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var ul = document.querySelector('.sidebar ul');
  if (!ul) return;

  var groups = [], current = null;
  Array.prototype.forEach.call(ul.children, function (li) {
    if (li.classList.contains('section-label')) {
      current = { label: li, items: [] };
      groups.push(current);
    } else if (current) {
      current.items.push(li);
    }
  });

  groups.forEach(function (group) {
    var extra = group.items.slice(PREVIEW);
    if (extra.length < 2) return;  // never hide a single title behind a link
    var hasActive = group.items.some(function (li) { return li.querySelector('a.active'); });

    var moreLi = document.createElement('li');
    moreLi.className = 'sb-more';
    var link = document.createElement('a');
    link.setAttribute('role', 'button');
    link.setAttribute('tabindex', '0');
    moreLi.appendChild(link);
    group.items[group.items.length - 1].insertAdjacentElement('afterend', moreLi);

    function setOpen(open) {
      extra.forEach(function (li) { li.classList.toggle('sb-hidden', !open); });
      link.textContent = open ? '▴ Show less' : '▸ Show ' + extra.length + ' more';
      link.setAttribute('aria-expanded', open ? 'true' : 'false');
      moreLi.dataset.open = open ? '1' : '';
    }
    function toggle(e) { e.preventDefault(); setOpen(!moreLi.dataset.open); }
    link.addEventListener('click', toggle);
    link.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') toggle(e);
    });
    setOpen(hasActive);
  });
})();
