const data = [
  {
    creator: "Anubis",
    color: "#D1C4E9",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 2,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "Girls in Pink",
    color: "#F8BBD0",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 3,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "Cinema Apes",
    color: "#FBE9E7",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 4,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "Lumberjack",
    color: "#D7CCC8",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 1,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "Anubista",
    color: "#E0F7FA",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 1,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "Girls in Red",
    color: "#E0E0E0",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    detailData: {
      creatorProfileRating : 1,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "NonCinema Apes",
    color: "#607D8B",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 1,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
  },
  {
    creator: "Lumberjackfruit",
    color: "#80DEEA",
    imageData: [
      { url: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", title: "Breakfast" },
      { url: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", title: "Burger" },
      { url: "https://images.unsplash.com/photo-1522770179533-24471fcdba45", title: "Camera" },
      { url: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c", title: "Coffee" }
    ],
    details: {
      creatorProfileRating : 1,
      codeQualityRating : 2 ,
      socialMediaRating : 5 
    }
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