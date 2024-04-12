
# Rental Value vs Home Value in Texas by City

## Description

This project analyzes the relationship between rental values and home values across different cities in Texas. Utilizing two CSV datasets, the project initiates a new MongoDB database to store and manipulate the data. Analysis is performed within a Jupyter Notebook using pandas to create a new collection in the database. Finally, an Express application, backed by Node.js, retrieves the data and presents it on a map using JavaScript for visual representation.

## Features

- Importing datasets into MongoDB.
- Data manipulation and analysis using pandas in a Jupyter Notebook.
- Visualization of the geographical distribution of rental values vs. home values in Texas cities.
- An interactive map for easy visualization of data points.

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- MongoDB
- Node.js and npm (Node Package Manager)
- Python with pandas library
- Jupyter Notebook

### Setup Instructions

1. **Clone the repository**: Clone the project repository to your local machine using the command:
   ```shell
   git clone https://github.com/mafeestaba/Project3.git
   ```
2. **Navigate to the project directory**:
   ```shell
   cd https://github.com/mafeestaba/Project3.git
   ```
3. **Install Node.js dependencies**: Within the project directory, install the required Node.js dependencies (including Express) by running:
   ```shell
   npm install
   ```
   This command reads the `package.json` file in your project directory and installs all the dependencies listed there.

4. **Import the datasets into MongoDB**: Use the following commands to import your CSV datasets into MongoDB. Make sure MongoDB is running on your machine.
   ```shell
   mongoimport --type csv -d database -c home_values --headerline --drop filtered_data.csv
   mongoimport --type csv -d database -c tx_rental --headerline --drop tx_rental_filtered.csv
   ```

## Usage

### Data Analysis in Jupyter Notebook

1. Open the Jupyter Notebook included in the repository.
2. Execute the notebook cells sequentially to perform data manipulation and analysis. The notebook interacts with MongoDB to manipulate the dataset and prepare it for visualization.

### Visualization with the Express App

1. Start the Express app by navigating to the directory containing the `app.js` file and running:
   ```shell
   node app.js
   ```
2. Open your web browser and go to `http://localhost:3000` to view the interactive map that displays the analysis results.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions for improvements or have identified bugs.

## Ethical Considerations

### Data Privacy and Consent

- **Data Source Transparency**: The data for this project is sourced from Zillow. It was made publicly available and collected in adherence to Zillow's data usage policies. We have ensured that any required permissions or licenses for the use of this data have been obtained.

- **Personal Information**: We confirm that the datasets used do not contain personally identifiable information (PII) or sensitive personal information (SPI). Steps have been taken to anonymize any data prior to its analysis to protect individual privacy.

### Accuracy and Representation

- **Data Accuracy**: We acknowledge that no dataset is without its limitations. Efforts have been made to ensure the accuracy of the data through rigorous cleaning and validation processes. These steps are crucial to minimize errors and biases that could affect the analysis.

- **Representation**: This project is committed to fair and unbiased analysis. We have taken measures to ensure that our analysis does not misrepresent any communities or demographic groups. The process includes reviewing the datasets for potential biases and adjusting our analysis to account for these biases.


## Acknowledgments

- Data provided by [Zillow].
- Thanks to [contributors and supporters] for their help and support.

## Contributors

- Grayson Wiggins
- Karen Talgi
- Maria Torres
- Jose Cuevas


