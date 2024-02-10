export type Itinerary = {
    day: number;
    title: string;
    description: string;
    activities: string[];
};

function ItineraryCard(props: Itinerary) {
    return (
        <div className="flex  border rounded-xl py-8 px-6 shadow-lg">
            <div className="flex flex-col space-y-2 w-1/2 pr-4">
                <h2 className="text-2xl">Day {props.day}</h2>
                <p className="italic font-bold">{props.title}</p>
                <p>{props.description}</p>
            </div>
            <ul className="w-1/2 space-y-2 my-auto">
                {props.activities.map((activity) => (
                    <li className="text-sm" key={props.day + activity}>
                        • {activity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

type Props = {
    itinerary: Itinerary[];
};

export default function ItineraryList(props: Props) {
    return (
        <div className="flex flex-col space-y-8 px-8">
            {props.itinerary.map((day) => {
                return <ItineraryCard key={day.day + day.title} {...day} />;
            })}
        </div>
    );
}
