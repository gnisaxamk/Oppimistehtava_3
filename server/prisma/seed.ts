import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
    await prisma.henkilo.deleteMany();

    const henkilot = await prisma.henkilo.createMany({
        data: [
            {
                etunimi: "Ulla",
                sukunimi: "Mäkinen",
                titteli: "Toimitusjohtaja",
                puhelin: "(602) 288 4085",
                aloittanutPvm: "10.08.2015",
                aloittanutAikaleima: "1439233200000",
                sahkoposti: "ulla.makinen@yritys.fi",
                kuva: "1.jpg"
            },
            {
                etunimi: "Tarja",
                sukunimi: "Nieminen",
                titteli: "Talousjohtaja",
                puhelin: "(639) 192 4847",
                aloittanutPvm: "14.03.2020",
                aloittanutAikaleima: "1584216000000",
                sahkoposti: "tarja.nieminen@yritys.fi",
                kuva: "2.jpg"
            },
            {
                etunimi: "Leena",
                sukunimi: "Laine",
                titteli: "Johdon assistentti",
                puhelin: "(987) 576 8948",
                aloittanutPvm: "27.09.2017",
                aloittanutAikaleima: "1506538800000",
                sahkoposti: "leena.laine@yritys.fi",
                kuva: "3.jpg"
            },
            {
                etunimi: "Kristiina",
                sukunimi: "Kivelä",
                titteli: "Markkinointi- ja viestintäjohtaja",
                puhelin: "(961) 860 4551",
                aloittanutPvm: "25.12.2020",
                aloittanutAikaleima: "1608926400000",
                sahkoposti: "kristiina.kivela@yritys.fi",
                kuva: "4.jpg"
            },
            {
                etunimi: "Ismo",
                sukunimi: "Räikkönen",
                titteli: "Kehitysjohtaja",
                puhelin: "(369) 540 7596",
                aloittanutPvm: "21.04.2016",
                aloittanutAikaleima: "1461265200000",
                sahkoposti: "ismo.raikkonen@yritys.fi",
                kuva: "5.jpg"
            },
            {
                etunimi: "Marjut",
                sukunimi: "Järvinen",
                titteli: "Projektipäällikkö",
                puhelin: "(897) 458 9326",
                aloittanutPvm: "17.02.2016",
                aloittanutAikaleima: "1455739200000",
                sahkoposti: "marjut.jarvinen@yritys.fi",
                kuva: "6.jpg"
            },
            {
                etunimi: "Akseli",
                sukunimi: "Toivonen",
                titteli: "Projektipäällikkö",
                puhelin: "(951) 594 8228",
                aloittanutPvm: "18.11.2015",
                aloittanutAikaleima: "1447876800000",
                sahkoposti: "akseli.toivonen@yritys.fi",
                kuva: "7.jpg"
            },
            {
                etunimi: "Timo",
                sukunimi: "Möttölä",
                titteli: "Projektipäällikkö",
                puhelin: "(167) 313 6678",
                aloittanutPvm: "29.01.2015",
                aloittanutAikaleima: "1422561600000",
                sahkoposti: "timo.mottola@yritys.fi",
                kuva: "8.jpg"
            },
            {
                etunimi: "Tuomas",
                sukunimi: "Vatanen",
                titteli: "Projektipäällikkö",
                puhelin: "(240) 820 5875",
                aloittanutPvm: "09.02.2015",
                aloittanutAikaleima: "1423512000000",
                sahkoposti: "tuomas.vatanen@yritys.fi",
                kuva: "9.jpg"
            },
            {
                etunimi: "Arttu",
                sukunimi: "Mäkinen",
                titteli: "Ohjelmistoasiantuntija",
                puhelin: "(968) 924 6011",
                aloittanutPvm: "05.08.2019",
                aloittanutAikaleima: "1565031600000",
                sahkoposti: "arttu.makinen@yritys.fi",
                kuva: "10.jpg"
            },
            {
                etunimi: "Annikki",
                sukunimi: "Kivelä",
                titteli: "Ohjelmistoasiantuntija",
                puhelin: "(999) 499 8143",
                aloittanutPvm: "03.02.2020",
                aloittanutAikaleima: "1580760000000",
                sahkoposti: "annikki.kivela@yritys.fi",
                kuva: "11.jpg"
            },
            {
                etunimi: "Antero",
                sukunimi: "Vatanen",
                titteli: "Ohjelmistoasiantuntija",
                puhelin: "(910) 144 6177",
                aloittanutPvm: "09.05.2015",
                aloittanutAikaleima: "1431198000000",
                sahkoposti: "antero.vatanen@yritys.fi",
                kuva: "12.jpg"
            },
            {
                etunimi: "Mikael",
                sukunimi: "Sirén",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(614) 453 3402",
                aloittanutPvm: "05.04.2020",
                aloittanutAikaleima: "1586113200000",
                sahkoposti: "mikael.siren@yritys.fi",
                kuva: "13.jpg"
            },
            {
                etunimi: "Taneli",
                sukunimi: "Vatanen",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(222) 757 6193",
                aloittanutPvm: "26.07.2016",
                aloittanutAikaleima: "1469559600000",
                sahkoposti: "taneli.vatanen@yritys.fi",
                kuva: "14.jpg"
            },
            {
                etunimi: "Tarja",
                sukunimi: "Häyhä",
                titteli: "Graafinen suunnittelija",
                puhelin: "(400) 190 7604",
                aloittanutPvm: "09.08.2015",
                aloittanutAikaleima: "1439146800000",
                sahkoposti: "tarja.hayha@yritys.fi",
                kuva: "15.jpg"
            },
            {
                etunimi: "Päivi",
                sukunimi: "Kivelä",
                titteli: "Käyttöliittymäsuunnittelija",
                puhelin: "(111) 272 1214",
                aloittanutPvm: "20.08.2017",
                aloittanutAikaleima: "1503255600000",
                sahkoposti: "paivi.kivela@yritys.fi",
                kuva: "16.jpg"
            },
            {
                etunimi: "Ossi",
                sukunimi: "Huutonen",
                titteli: "Käyttökokemusasiantuntija",
                puhelin: "(280) 192 1548",
                aloittanutPvm: "26.11.2020",
                aloittanutAikaleima: "1606420800000",
                sahkoposti: "ossi.huutonen@yritys.fi",
                kuva: "17.jpg"
            },
            {
                etunimi: "Juha",
                sukunimi: "Mäkelä",
                titteli: "ICT-asiantuntija",
                puhelin: "(721) 818 3629",
                aloittanutPvm: "20.03.2020",
                aloittanutAikaleima: "1584734400000",
                sahkoposti: "juha.makela@yritys.fi",
                kuva: "18.jpg"
            },
            {
                etunimi: "Outi",
                sukunimi: "Yrjölä",
                titteli: "Tietokanta-asiantuntija",
                puhelin: "(315) 818 6505",
                aloittanutPvm: "25.08.2016",
                aloittanutAikaleima: "1472151600000",
                sahkoposti: "outi.yrjola@yritys.fi",
                kuva: "19.jpg"
            },
            {
                etunimi: "Teemu",
                sukunimi: "Väänänen",
                titteli: "Tietokanta-asiantuntija",
                puhelin: "(436) 120 2578",
                aloittanutPvm: "17.07.2016",
                aloittanutAikaleima: "1468782000000",
                sahkoposti: "teemu.vaananen@yritys.fi",
                kuva: "20.jpg"
            },
            {
                etunimi: "Aino",
                sukunimi: "Jokinen",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(582) 451 8250",
                aloittanutPvm: "10.05.2017",
                aloittanutAikaleima: "1494442800000",
                sahkoposti: "aino.jokinen@yritys.fi",
                kuva: "21.jpg"
            },
            {
                etunimi: "Akseli",
                sukunimi: "Kosunen",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(432) 488 2567",
                aloittanutPvm: "08.12.2018",
                aloittanutAikaleima: "1544299200000",
                sahkoposti: "akseli.kosunen@yritys.fi",
                kuva: "22.jpg"
            },
            {
                etunimi: "Annikki",
                sukunimi: "Miettinen",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(313) 479 8844",
                aloittanutPvm: "24.08.2017",
                aloittanutAikaleima: "1503601200000",
                sahkoposti: "annikki.miettinen@yritys.fi",
                kuva: "23.jpg"
            },
            {
                etunimi: "Olavi",
                sukunimi: "Ihalainen",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(974) 304 4214",
                aloittanutPvm: "06.08.2016",
                aloittanutAikaleima: "1470510000000",
                sahkoposti: "olavi.ihalainen@yritys.fi",
                kuva: "24.jpg"
            },
            {
                etunimi: "Ossi",
                sukunimi: "Heikkinen",
                titteli: "Ohjelmistosuunnittelija",
                puhelin: "(871) 474 4604",
                aloittanutPvm: "18.12.2016",
                aloittanutAikaleima: "1482091200000",
                sahkoposti: "ossi.heikkinen@yritys.fi",
                kuva: "25.jpg"
            },
        ]
    });

    console.log(`Luotiin ${henkilot.count} henkilön tiedot tietokantaan`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });