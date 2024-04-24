import type { AstroIntegration } from "astro";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import sharp from "sharp";

const generate = async (title: string) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const font = fs.readFileSync(
    path.resolve(__dirname, "NotoSansJP-SemiBold.ttf")
  );
  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      <svg
        width="75"
        viewBox="0 0 75 65"
        fill="#000"
        style={{ margin: "0 75px" }}
      >
        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
      </svg>
      <div style={{ marginTop: 40 }}>Hello, World</div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: font,
          style: "normal",
        },
      ],
    }
  );
  return await sharp(Buffer.from(svg)).png().toBuffer();
};

export const createOGImage = ({
  config,
}: {
  config: { path: string };
}): AstroIntegration => {
  return {
    name: "og-image",
    hooks: {
      "astro:build:done": async ({ dir, pages }) => {
        const blogPages = pages.filter((page) =>
          page.pathname.includes(config.path)
        );

        await Promise.all(
          blogPages.map(async (page) => {
            const indexHtmlPath = path.join(
              dir.pathname,
              page.pathname,
              "index.html"
            );

            const indexHtml = fs.readFileSync(indexHtmlPath, "utf8") as any;
            const title = await indexHtml.match(
              /<title[^>]*>([^<]+)<\/title>/
            )[1];
            const buffer = await generate(title);
            const filename = path.join(dir.pathname, page.pathname, "ogp.png");
            // 非同期のfs.writeFileだと生成がうまく以下あない場合があるので同期的に書き込む
            console.log(`Writing ${filename}`);
            fs.writeFileSync(filename, buffer);
          })
        );
      },
    },
  };
};