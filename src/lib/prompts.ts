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
