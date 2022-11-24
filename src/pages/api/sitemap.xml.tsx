import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";

export default async (req, res) => {
    // Listado de tus páginas
    const sitemap = [{
        url: "/",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/briefingParaProjeto",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/briefingParaSite",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/construirSiteOuLojasVirtuais",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/contato",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/emailProfissional",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/estrategiasDeMarketingDigital",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/politicasDePrivacidade",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/projetosPersonalizados",
        changefreq: "monthly",
        priority: 0.8
    }, {
        url: "/sobre",
        changefreq: "monthly",
        priority: 0.8
    }
];
    const sitemapStream = new SitemapStream({
        hostname: 'https://builderseunegocioonline.com.br'
    });
    res.writeHead(200, {
        "Content-Type": "application/xml"
    });
    const xmlString = await streamToPromise(
        Readable
            .from(sitemap)
            .pipe(sitemapStream)
    ).then(
        (data) => data.toString()
    );
    res.end(xmlString);
};