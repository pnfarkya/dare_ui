const data = [
  {
    creator: "Anubis",
    color: "#FCB900",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Girls in Pink",
    color: "#4DD0E1",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Cinema Apes",
    color: "#7BDCB5",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Lumberjack",
    color: "#E1BEE7",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Anubis",
    color: "#FCB900",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Girls in Pink",
    color: "#4DD0E1",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Cinema Apes",
    color: "#7BDCB5",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  },
  {
    creator: "Lumberjack",
    color: "#E1BEE7",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ]
  }

];

export function getTop10Recommendations() {
  let top10Recommendations = [];
  top10Recommendations = data;
  return top10Recommendations;
}

export function getUpcomingRecommendations() {
  let upcomingRecommendations = [];
  upcomingRecommendations = data;
  return upcomingRecommendations;
}