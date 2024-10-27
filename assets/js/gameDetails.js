const details = {
    id: "bgmi",
    name: "BGMI",
    image: "../assets/img/bgmi_logo.png",
    description: "Where Victory Beckons, Gaming Legends Rise!",
    downlaod:{
        monile : {
            title: "Battleground Mobile India",
            launch : "2024",
            image : "data:image/png;base64,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",
            downloadLink: "https://www.battlegroundsmobileindia.com/download"
        },
        pc : {
            title: "Battleground Mobile India",
            launch : "2024",
            image : "https://play.google.com/store/apps/details?id=com.pubg.imobile&pcampaignid=web_share",
            downloadLink: "https://www.battlegroundsmobileindia.com/download"
        }
    },
    about : "Welcome to BGMI, where epic battles unfold in a dynamic virtual realm. Engage in intense firefights, navigate expansive landscapes, and emerge victorious in the ultimate battle royale experience. With stunning graphics and strategic gameplay, BGMI delivers an unforgettable adventure, redefining the thrill of survival gaming ... ",

}