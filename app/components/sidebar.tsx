import Image from "next/image";
import "../styles/nav.css";

export default function SideBar() {
    return (
        <div className="sidebarCont">
            <Image
                src="/stitch_logo.png"
                alt="Samewave7 stitch logo"
                width={300}
                height={280}
                sizes="(max-width: 768px) 80vw, 20vw"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block"
                }}
            />
            <div className="infoText">
                <p className="mv3 mobile-center">Samewave 7 is a New York City-based artist collective operated by Katrina Stalcup and Jordan Furr.</p>
            </div>

        </div>
    );
}