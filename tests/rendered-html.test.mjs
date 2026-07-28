import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const relative =
    pathname === "/"
      ? "index.html"
      : `${pathname.replace(/^\/|\/$/g, "")}/index.html`;
  return readFile(new URL(`../out/${relative}`, import.meta.url), "utf8");
}

test("renders the public language landing page", async () => {
  const html = await render("/");
  assert.match(html, /MyBalcony Privacy &amp; Support/);
  assert.match(html, /Deutsch/);
  assert.match(html, /English/);
  assert.match(html, /简体中文/);
  assert.doesNotMatch(html, /react-loading-skeleton|codex-preview/);
});

test("renders all privacy and support locales", async () => {
  const expectations = [
    ["/de/privacy", "Datenschutzerklärung"],
    ["/en/privacy", "Privacy Policy"],
    ["/zh/privacy", "隐私政策"],
    ["/de/support", "TestFlight-Beta"],
    ["/en/support", "TestFlight beta"],
    ["/zh/support", "TestFlight 测试版"],
  ];
  for (const [pathname, phrase] of expectations) {
    const html = await render(pathname);
    assert.match(html, new RegExp(phrase), pathname);
  }
});

test("documents the real local-first and PVGIS boundaries", async () => {
  const html = await render("/en/privacy");
  assert.match(html, /No user account/);
  assert.match(html, /No advertising/);
  assert.match(html, /PVGIS/);
  assert.match(html, /roughly 1 km/);
  assert.match(html, /no automatic provider endpoint/);
});
