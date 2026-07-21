// Loads the Cal.com popup embed once for the whole site. Any element with a
// `data-cal-link="<slug>"` attribute opens the booking modal on click.
// Rendered as a plain inline script so it is present in the initial HTML and
// runs on page load (Cal attaches delegated click handlers on the document).
export function CalEmbed() {
  return (
    <script
      id="cal-embed"
      dangerouslySetInnerHTML={{
        __html: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", {origin:"https://cal.com"});
Cal("ui", {"styles":{"branding":{"brandColor":"#0F326D"}},"hideEventTypeDetails":false,"layout":"month_view"});`,
      }}
    />
  )
}
