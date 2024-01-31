import CitiesPreviewCard from "./CitiesPreviewCard";
import type { GenerateState } from "@/lib/actions";

type Props = GenerateState;

export default function CitiesPreviewGrid(props: Props) {
    return (
        <div>
            <h2 className="text-3xl text-center font-bold mb-16">
                Discover your Next Destination
            </h2>
            <div className="grid grid-cols-3 gap-16">
                {props.cities.map((city) => {
                    return <CitiesPreviewCard key={city.name} {...city} />;
                })}
            </div>
        </div>
    );
}
