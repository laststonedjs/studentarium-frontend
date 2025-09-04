<!DOCTYPE html>
<html lang="en">
<body>
  <h1>Studentarium Frontend</h1>
  <p>This is the React Native frontend for the Studentarium application.</p>

  <h2>📦 Technologies</h2>
  <ul>
    <li>React Native</li>
    <li>TypeScript</li>
    <li>Axios / Fetch (for backend API communication)</li>
  </ul>

  <h2>⚙️ Installation and Running</h2>
  <ol>
    <li>Clone the repository:
      <pre>git clone &lt;frontend_repo_url&gt;</pre>
    </li>
    <li>Install dependencies:
      <pre>npm install</pre>
    </li>
    <li>Run the application:
      <ul>
        <li>iOS: <pre>npx react-native run-ios</pre></li>
        <li>Android: <pre>npx react-native run-android</pre></li>
      </ul>
    </li>
  </ol>

  <h2>📌 Project Structure</h2>
  <ul>
    <li><strong>App.tsx</strong> - main application file</li>
    <li><strong>src/screens/</strong> - all screens (Login, Register, Landing, Script, Profile)</li>
    <li><strong>src/components/</strong> - shared components</li>
    <li><strong>src/api/</strong> - files for backend API calls</li>
  </ul>

  <h2>💡 Notes</h2>
  <ul>
    <li>Current backend URL: <code>http://localhost:5000</code></li>
    <li>Use Postman to test the backend before connecting the frontend</li>
    <li>For storing JWT tokens, use AsyncStorage or Context API</li>
  </ul>
</body>
</html>
