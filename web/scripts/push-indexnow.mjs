import fs from "fs";

async function pushIndexNow() {
  const key = "c9e47f201a884d8fb85c96b7974351a0";
  const host = "www.crowncelebrity.com";
  const keyLocation = `https://${host}/${key}.txt`;

  const sitemapXml = fs.readFileSync("web/public/sitemap-pages.xml", "utf8");
  const urlMatches = [...sitemapXml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
  const urlList = urlMatches.map((m) => m[1]);

  console.log(`Found ${urlList.length} URLs to submit via IndexNow...`);

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow API Response Status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log("Successfully submitted all URLs to IndexNow (Bing, Yandex, Seznam, Naver)!");
    } else {
      const text = await res.text();
      console.log("IndexNow response details:", text);
    }
  } catch (err) {
    console.error("IndexNow submission error:", err);
  }
}

pushIndexNow();
