export const getGenerateUserMessage = (
    days: number,
    budget: number,
    from: string,
    details: string
) => {
    return `I will give you some details about the user's background, and you are to give THREE potential travel destination spots. For each spot, you'll give me a few pieces of info: The City name, The country, and a 1-sentence description of the city, and 3 key characteristics (reasons) of the city that may make it appealing for the user.

    Here are the user's details:
    
    • Trip duration: ${days} days
    • Max budget: $${budget}
    • Traveling from: ${from}
    • Details: "${details}"
    
    Give your answer in JSON format. Your response should look like this:
    
    {
      "cities": {
        "name": string,
        "country": string,
        "description": string,
        "reasons": string[]
      }[]
    }
    
    Do not return anything besides valid JSON.
    
    The description should be 8-10 words. Reasons should be very short (1-3 words).
    
    Here is a sample City object::
    
    {
        "name": "Paris",
        "country": "France",
        "description": "Paris offers a vibrant mix of historic and modern attractions.",
        "reasons": [
            "Rich historical sites",
            "Diverse foods",
            "Tourist-friendly"
        ]
    }`;
};

export const getSaveDestinationUserMessage = ({
    city,
    country,
    budget,
    days,
    from,
    details,
}: {
    city: string;
    country: string;
    budget: number;
    days: number;
    from: string;
    details: string;
}) => `You are a travel itinerary planner.

I will give you some information about our client, and your job is to provide a wonderful vacation itinerary package for our client in the format I ask of you.

Here are the relevant client details:

City they want to visit: ${city} (${country})
Budget: ${budget}
Trip Length: ${days} days
User is traveling from: ${from}
User's specific requests: "${details}"

The budget should cover everything from lodging to flights to meals and activities.

Your response should include the following things:

- A description of the city, what they can expect, and what kind of adventure to expect with the itinerary you planned (2-4 sentences)
- Flight price ranges (in economy) that they can expect. I know this depends on the season, but try to give your best general estimate.
- Average flight time (in hours, but as a string. e.g. "9 hours" or "2.5 hours")
- Hotel price estimates for a 3 star, 4 star, and a 5 star hotel in the city. Again, I know this depends a ton, but try to give your best general estimate. (not a range, a single number).
- A "Traveler's Tip". This will be shown with a little light-bulb icon as a cool FYI for the user. It should be 1-2 sentences.
- The itinerary

The itinerary is split up into "Days". And each Day object should include:
- The number of the day
- The title for the day (3-6 words)
- A 1-sentence description of the day
- 3-4 bullet points on the activities for that given day

Got it? Return your answer in JSON format.

It should look like this:

{
    "trip_description": string,
    "flight_price_min": number,
    "flight_price_max": number,
    "flight_time": string,
    "hotel_price": {
        "3": number,
        "4": number,
        "5": number
    },
    "tip": string,
    "itinerary": {
        "day": number,
        "title": string,
        "description": string,
        "activities": string[]
    }[]
}

Only return valid JSON.`;
