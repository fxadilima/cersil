import { RouteConfig, Handlers } from "$fresh/server.ts";
import { renderToString } from "preact-render-to-string";
import { extract } from "$std/front_matter/yaml.ts";

export const config: RouteConfig = {
    skipInheritedLayouts: true, // Skip already inherited layouts
};

/*
export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "About");
        return resp;
    },
};
*/
function getFrontmatters() {
    let fm = [];
    const files = Deno.readDirSync(Deno.cwd() + "/content/sdyxz");
    for (const file of files) {
        const txt = Deno.readTextFileSync(Deno.cwd() + "/content/sdyxz/" + file.name);
        const { attrs, body } = extract(txt);
        fm.push({data: attrs, slug: `/memanah-rajawali/${file.name}`});
    }
    return fm;
}

export default function IndexPage() {
    const fmatters = getFrontmatters();
    //console.log(typeof data);
    return (
        <main class="w3-main w3-padding-16">
            <div class="w3-content w3-container">
                <h1>Memanah Rajawali</h1>
                <ul class="w3-ul">
                    {fmatters.map((fm) => 
                    <li>
                        <div class="w3-row-padding">
                            <div class="w3-quarter w3-container">
                                <img src={fm.data.image} alt={fm.data.title} width="100%"/> 
                            </div>
                            <div class="w3-threequarter w3-container">
                                <h1>Chapter: {fm.data.chapter}</h1>
                                <h3>{fm.data.title}</h3>
                                {fm.data.description}
                                <p><a href={fm.slug} class="w3-btn w3-round w3-border">Baca selengkapnya...</a></p>
                            </div>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        </main>
    );
}

/*
*/