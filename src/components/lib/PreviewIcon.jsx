import { useContext, useEffect } from "react";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { IconContext } from "@/context/UpdateStore";

const PreviewIcon = ({ download }) => {
    const storageValue = JSON.parse(localStorage.getItem("iconSet")) || {};
    const bgValue = JSON.parse(localStorage.getItem("bgset")) || { padding: 0, bgcolur: "#fff", rounded: 0 };
    const { iconUpdates } = useContext(IconContext);

    const Icon = ({ name, color, size, rotate }) => {
        const LucuidIcon = icons[name];
        if (!LucuidIcon) {
            return <div>No Icon Found</div>;
        }
        return (
            <div
                style={{
                    display: "inline-block",
                    transform: `rotate(${rotate}deg)`,
                }}
            >
                <LucuidIcon color={color} size={size} />
            </div>
        );
    };

    const captureScreenshot = () => {
        const downLoadUrlDiv = document.getElementById("canv");
        html2canvas(downLoadUrlDiv, {
            backgroundColor: null,
        }).then((canvas) => {
            const pngImage = canvas.toDataURL("image/png");
            const downLoadLin = document.createElement("a");
            downLoadLin.href = pngImage;
            downLoadLin.download = "techharik.png";
            downLoadLin.click();
        });
    };

    useEffect(() => {
        if (download) {
            captureScreenshot();
        }
    }, [download]);

    return (
        <div className="flex justify-center items-center pt-10">
            <div
                id="canv"
                className="w-[512px] h-[512px] border"
                style={{
                    padding: typeof bgValue.padding === "number" ? `${bgValue.padding}px` : bgValue.padding || "0px",
                }}
            >
                <div
                    className="flex justify-center items-center h-full w-full"
                    style={{
                        backgroundColor: bgValue.bgcolur,
                        borderRadius: `${bgValue.rounded}%`,
                    }}
                >
                    <Icon
                        name={storageValue?.icon}
                        color={storageValue?.iconColor}
                        size={storageValue?.iconSize}
                        rotate={storageValue?.rotate}
                    />
                </div>
            </div>
        </div>
    );
};

export default PreviewIcon;
