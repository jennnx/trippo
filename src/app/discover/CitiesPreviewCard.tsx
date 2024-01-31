import type { City } from "@/lib/actions";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = City;

export default function CitiesPreviewCard(props: Props) {
    return (
        <div className="max-w-sm h-[550px] border rounded-lg shadow-sm flex flex-col">
            {props.image ? (
                <div className="aspect-video relative overflow-hidden">
                    <Image
                        className="object-cover"
                        src={props.image}
                        alt={`a photo of ${props.name}`}
                        fill
                    />
                </div>
            ) : null}
            <div className="flex flex-col flex-grow p-6 pt-2">
                <div className="flex justify-between items-center py-3">
                    <p className="text-xl font-bold">{props.name}</p>
                    <p className="text-gray-600">{props.country}</p>
                </div>
                <p>{props.description}</p>
                <ul className="mt-4 space-y-2">
                    {props.reasons.map((reason) => {
                        return (
                            <li
                                className="flex items-center space-x-2"
                                key={reason}
                            >
                                <Check className="h-5 w-5 text-green-500" />
                                <p>{reason}</p>
                            </li>
                        );
                    })}
                </ul>
                <div className="mt-auto">
                    <button
                        type="button"
                        className="border px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white w-full font-semibold"
                    >
                        Discover {props.name}
                    </button>
                </div>
            </div>
        </div>
    );
}
