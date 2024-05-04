# The Daily Prophet

![The Daily Prophet Logo](https://github.com/BlackDranzer777/The-Daily-Prophet-Digest/blob/main/daily_prophet.png)

The Daily Prophet is a magical news aggregator inspired by the wizarding world of Harry Potter. This web application brings the latest news updates from various sources straight to your fingertips, offering a seamless and enchanting user experience. Utilizing APIs from NewsAPI.org, The Guardian, and The New York Times, The Daily Prophet offers a comprehensive selection of articles across different categories and topics.

## Features

- **Article Search and Filtering**: Easily search for articles by keyword and filter results by date, category, and source.
- **Personalized News Feed**: Customize your news feed by selecting preferred sources, categories, and authors.
- **Mobile-Responsive Design**: Optimized for viewing on mobile devices, ensuring a seamless experience across all screen sizes.

  ### Implemented:
- **Fetching data from three different sources:** NewsAPI.org, The Guardian API, and The New York Times API.
- **Article Search and Filtering:** Users can search for articles by keyword and filter results by date, category, and source.
- **Personalized News Feed:** Users can customize their news feed by selecting preferred sources and categories.
- **Mobile-Responsive Design:** The website is optimized for viewing on mobile devices, ensuring a seamless experience across all screen sizes.

  ### Need to be Implemented:
- **Selecting Preferred Authors:** The feature to select preferred authors for the personalized news feed is not yet implemented.

  ### Additional Features:
- **Lazy Loading:** Users can load more options upon clicking, enhancing the user experience by loading content dynamically.


## Design Inspiration

The design of The Daily Prophet draws inspiration from the iconic newspaper featured in the Harry Potter series. With its vintage aesthetic, parchment-like backgrounds, and ornate typography, the app captures the essence of the wizarding world while providing a modern and intuitive interface for users.

## Technologies Used

- **React.js**: Frontend framework for building interactive user interfaces.
- **NewsAPI.org**: Comprehensive API for accessing articles from thousands of news sources.
- **The Guardian API**: API for accessing articles from The Guardian newspaper.
- **The New York Times API**: API for accessing articles from The New York Times.


## Getting Started

### Running Locally

To run The Daily Prophet locally without Docker:

1. **Clone this repository**:
    ```bash
    git clone https://github.com/BlackDranzer777/The-Daily-Prophet-Digest.git
    ```

2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Access the application at [http://localhost:3000](http://localhost:3000).

### Running with Docker

To run The Daily Prophet using Docker:

1. **Clone this repository**:
    ```bash
    git clone https://github.com/BlackDranzer777/The-Daily-Prophet-Digest.git
    ```

2. Build the Docker image:
    ```bash
    docker build -t daily-prophet-digest .
    ```

3. Run the Docker container:
    ```bash
    docker run -p 3000:3000 daily-prophet-digest
    ```

4. Access the application:
   Once the Docker container is running, you can access The Daily Prophet in your web browser at [http://localhost:3000](http://localhost:3000).

## Future Updates

The Daily Prophet is constantly evolving to provide an even better user experience. Keep an eye out for upcoming updates, which will include the following features:

- **Advanced Search Options**: Enhancements to the search functionality, allowing users to perform more advanced searches based on specific criteria.
- **Interactive News Feed**: Implementing features for users to interact with articles directly within the app, such as liking, commenting, and sharing.
- **Customizable Themes**: Introducing customizable themes and color schemes to personalize the app's appearance according to user preferences.

Stay tuned for these exciting updates, coming soon to The Daily Prophet!


## Contributors

- [Your Name](https://github.com/BlackDranzer777/) - Lead Developer

## License

This project is licensed under the [MIT License](link-to-license-file).
