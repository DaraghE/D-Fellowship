To initialise the dev build 
    cd fellowship-app
    npm run dev
*As I was unable to complete setting up the backend there is to need to update credentials 

Deployed app: https://main.d3ttt6d65nqw1n.amplifyapp.com
Create account or sign in as:
        Email: williamgoose@gmail.com
        PWD: TestUser1!
        UsrNm: billy_the_goose

Step 1 ✅: Initialize the Project - 2.30 hrs
1. Create a ReactJS application. (10 mins)
    The process I am used too is outdated by today's standards, so I'll use the link below to set up and deploy my project when I'm up to that step
    https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/ 
2. Set up the project with modern React configurations. 10 mins
    The above method uses Vite and comes with an up to date configuration
3. Initialize AWS Amplify in the project. 2hrs
    Initially I had issues running amplify commands, found the issue was old profiles attached to my personal account, this lead to issues down the line as my amplify had initialized improperly

Step 2 ✅: Configure Authentication 30 mins
1. Add authentication using AWS Amplify. 10 mins
    Used cognito to create user pools to keep accounts (D-User pool) and grabbed the template supplied
2. Configure AWS Cognito for user authentication. 5 mins
    Set up accounts to need email, password and username
3. Integrate authentication into the React application. 15 mins
    Added necessary auth components to site for log in as well as test user
        Email: williamgoose@gmail.com
        PWD: TestUser1!
        UsrNm: billy_the_goose

Step 3: Set Up the Backend 5hrs
1. Add a REST API using AWS Amplify. 1 hr
    Took time to make adjustments to some of the amplify files and had a few attempts of making the right lambda files
2. Configure the API with AWS API Gateway and a Lambda function. 15 mins
    After making adjustments the lamda files were generated fairly quickly
3. Add a DynamoDB table using AWS Amplify for data storage. 15 mins
    Table generated with very little issue,
    Added an item through the dynamo console for testing purposes.
4. Modify the Lambda function to interact with DynamoDB. 3 hrs
    Ran into a lot of problems trying to interact with the db.
    Looks like despite generating the API, table and lambda functions the api no longer exists or is unable to connect to the app

Step 4: Implement the Frontend
1. Create authentication components for user login and sign-up.
    Simple buttons that lead to login window that points back to page and authenticates user and another logout button that returns user to starting state
2. Build a dashboard to display user profile information.
    Gathered basic user for the user to display
3. Fetch data from the API and display it in a table.
    I was unable to reach this stage but there were a few ways I could have gone about it. The db i wanted to create would have been made up of columns Email (of the user that created the item) and the content. Using the email of the current user I would have retrieved the items attached to said email and use a simple Map function to display components that contain the data retrieved from individual items.
4. Implement search, sorting, filtering, and pagination in the table.
    With the array I could add usestate values to act as filters to find items with content containing the filter. I also could have sorted the posts by content alphabetically.

Step 5: Add State Management
1. Use React Context API (or Redux) to manage the application state.
2. Manage authentication and data fetching state.
    I have used create context to handle data before in other larger scale apps. In this case I would mostly focus on passing user data to make sure all functions related to the back end were assigned to the correct user. 
    Due to the size of this app I'd likely GET and display within the same class.
    I would also use it to keep track of any state variables that affect the app as a whole like user status and actions the user is performing

Step 6: Write Test Cases
1. Write Jest test cases for React components. 10 mins
    Created test cases for auth components as they were developed
    Will add more as progress is made
2. Write Jest test cases for API integration.
3. Mock API responses in the test cases.

Step 7 ✅: Deploy the Application 3 hrs
1. Deploy the application using AWS Amplify. 2.30 hrs
    Wasn't used to creating the build command, and i was having issues finding documentation and effectively did trial and error until my app deployed (Can be seen on buildspec.txt)
2. Verify the deployment and ensure all features work. ~30 min
    At this stage I only had the auth functionality working which had no issues.
    I'll do more testing as other features are added.

Step 8: Document the Project
1. Write a README file with setup instructions.
2. Include instructions for running the project locally and deploying it.
3. Provide the deployed application link.


Over all I know i could have done better, But I came thinking I knew the process after making apps with similar funtionallity (seen in links below).

(DB credentils need updating)
Bar Book: https://main.d3d2uywy5ajazp.amplifyapp.com
Portfolio: https://main.dhhpo8bzwxbca.amplifyapp.com
