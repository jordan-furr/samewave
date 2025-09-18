import Link from "next/link"
import "@/app/styles/page.css"

export default async function About() {
    return (
        <div className="pageContent">
            <div className="mainContent">
                <div className="aboutCont">
                    <p className="mb3">Samewave 7 is the collective of Artists Katrina Stalcup and Jordan Furr. They design and create quilted goods (blankets, wearables, posters, table runners, coasters), clothing, paper media, creative mail, stuffed animal accesories, needlework, a variety of embellishments, and lately, beading.</p>
                    <p className="mb3">Following their 50% input / 50% output practice, Samewave 7 is propelled by an ongoing search for inspiration (exhibitions, film, books, culture and design conversations in NYC) and sustained by consistent hours in the studio.</p>
                    <p className="mb5">Samewave 7 particpates in trades with other creatives and has sold goods for USD in the past. If the project is curious and open to creative control, commissions may be on the table.</p>
                    <Link href={"https://www.instagram.com/samewave7/?hl=en"} target="_">Instagram</Link>
                </div>
            </div>

        </div>

    )
}